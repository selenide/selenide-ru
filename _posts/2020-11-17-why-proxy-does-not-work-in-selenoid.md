---
layout: post
title: "Почему прокси не работает в Selenoid?"
description: ""
category:
header-text: "Мы подсели на зависимости"
tags: []
---
{% include JB/setup %}

Всем привет!

Сегодня мы наконец-то раскроем тайну, почему у многих не работает прокси в Selenoid. 

### Задача: скачать файл
* Мы запускаем тесты на Selenoid (обычно также и на Selenide, но необязательно).   
* В ходе теста мы хотим скачать файл.  
* Метод по умолчанию `$.download()` не подходит (например, потому, что скачивание происходит не по прямой ссылке)
* Поэтому мы хотим [скачать файл через прокси](https://ru.selenide.org/2019/12/10/advent-calendar-download-files/).

### Наши действия
1. Создаём проект
2. Добавляем в проект зависимость BrowserUpProxy, как указано в документации Selenide:
```kotlin
dependencies {
  testRuntimeOnly("com.browserup:browserup-proxy-core:2.1.1")
}
``` 
3. Копипастим типичный бойлерплейт для запуска браузера в Selenoid:
```java
Configuration.proxyHost = "192.168.0.10";
Configuration.remote = "http://localhost:4444/wd/hub";
DesiredCapabilities capabilities = new DesiredCapabilities();
capabilities.setBrowserName("chrome");
capabilities.setVersion("85.0");
capabilities.setCapability("enableVNC", true);
capabilities.setCapability("enableVideo", true);
capabilities.setCapability("enableLog", true);
Configuration.browserCapabilities = capabilities;
Configuration.fileDownload = FileDownloadMode.PROXY;
Configuration.proxyEnabled = true;
```

4. Ну и пишем тест, что-то вроде
```java
open("https://the-internet.herokuapp.com/download");
File file = $(byText("some-file.txt")).download();
assertThat(file.getName()).isEqualTo("some-file.txt");
```

### Проблема

И получаем ошибку при открытии браузера:
```java
org.openqa.selenium.WebDriverException: unknown error: net::ERR_TUNNEL_CONNECTION_FAILED
    ...
	at com.codeborne.selenide.Selenide.open(Selenide.java:49)
	at org.selenide.selenoid.FileDownloadTest.download(FileDownloadTest.java:45)
```
<br>

### ААА, паника!

На этом месте большинство людей паникует, перебирает кучу опций браузера и селенидовских настроек 
и в конце концов пишет в чатик автоматизаторов. 

А ведь всего-то надо было почитать внимательно лог.  
В логе чётко видна проблема:

```java
[LittleProxy-0-ProxyToServerWorker-1] ERROR org.littleshoot.proxy.impl.ProxyToServerConnection
                        - (HANDSHAKING) [id: 0xc05a41d5, L:/10.10.10.145:56103
                        - R:the-internet.herokuapp.com/52.1.16.137:443]
                        : Caught an exception on ProxyToServerConnection
java.lang.NoSuchMethodError: 'int io.netty.buffer.ByteBuf.maxFastWritableBytes()'
	at io.netty.handler.codec.ByteToMessageDecoder$1.cumulate(ByteToMessageDecoder.java:86)
``` 

### Крутим зависимости

Ошибка `NoSuchMethodError` недвусмысленно намекает на то, что у нас проблема с зависимостями: 
в classpath оказались какие-то два JAR'а с несовместимыми версиями. 

Против этого уже давно придумали прививку. Удивляюсь, почему так много людей до сих пор не в курсе.

Запускаем команду:

* `gradle dependencies`, или
* `mvn dependency:tree` 

И вуаля! - чётко видим, какие у нас JAR'ы и каких версий. Ищем там что-то похожее на "netty".  

```
\--- com.browserup:browserup-proxy-core:2.1.1
     +--- io.netty:netty-codec:4.1.44.Final
     +--- xyz.rogfam:littleproxy:2.0.0-beta-5
     |    +--- io.netty:netty-all:4.1.34.Final
```

Как видим, у нас есть два джарника с разными версиями: `netty-codec:4.1.44.Final` и `netty-all:4.1.34.Final`.  

### Лечим зависимости

Чтобы исправить проблему, достаточно явно прописать в `build.gradle` или `pom.xml` более новую версию `Netty`:

```kotlin
testRuntimeOnly("io.netty:netty-all:4.1.54.Final")
testRuntimeOnly("io.netty:netty-codec:4.1.54.Final")
```

(на самом деле достаточно только одной из этих строк. *Домашнее задание: какой и почему?*)

Команда `gradle dependencies` показывает, что теперь версии совпадают:
 
```
\--- com.browserup:browserup-proxy-core:2.1.1
     +--- io.netty:netty-codec:4.1.44.Final -> 4.1.54.Final
     +--- xyz.rogfam:littleproxy:2.0.0-beta-5
     |    +--- io.netty:netty-all:4.1.34.Final -> 4.1.54.Final
```

Тест запускается, прокси работает, файл скачивается. Всем щастье. 

### Мораль

Будьте внимательнее к логам, братьям нашим меньшим!

<br/>
 
[Андрей Солнцев](http://asolntsev.github.io/)

ru.selenide.org
