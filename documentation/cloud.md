---
layout: page
title :
header : Облака
group: navigation
cssClass: docs
header-text: >
  <h4>Документация</h4>

  Облака
---
{% include JB/setup %}

{% include documentation-menu.md %}

<br>

#### [&gt; TestContainers](#testcontainers)  
#### [&gt; BrowserStack](#browserstack)  
#### [&gt; Saucelabs](#saucelabs)  
#### [&gt; Selenoid](#selenoid)   
#### [&gt; Другие облачные провайдеры](#other)  
{: .blogpost-menu}

<br>
<br>

Самый простой, быстрый и надёжный способ - запускать браузер рядом с тестом (т.н. "локальный" запуск). 
В крайнем случае - в докере на той же машине.

Но люди не ищут простых путей. Иногда им хочется запускать браузер в облаках.
В теории это может дать вам некоторые плюсы: бесконечное масштабирование и запуск разных версий разных браузеров.
Но конечно, есть и свои сложности и ограничения. Смотрите сами.

Селенид это позволяет сделать довольно легко.
Чтобы запустить браузер удалённо, в общем случае нужно задать настройку `remote`:

```java
Configuration.remote = "https://your-cloud-provider.com/wd/hub";
```

<a name="testcontainers"></a>
## TestContainers

Позволяет одной аннотацией запускать браузер на той же машине, но внутри докера. 

Рабочий пример: [selenide-examples/testcontainers](https://github.com/selenide-examples/testcontainers/).

Плюсы:
1. Позволяет запускать разные версии браузеров
2. Умеет записывать видео с тестов (и ещё куча фич TestContainers)
3. Большинство фич селенида продолжают работать (скриншоты, прокси, CDP)

Минусы:
1. Некоторые фичи селенида не могут работать (clipboard)
2. Поддерживаются только те браузеры, что в принципе способны работать в докере (Internet Explorer точно нет, насчёт Safari не уверен)

<br>

<a name="browserstack"></a>
## BrowserStack

Рабочий пример: [selenide-examples/selenide-browserstack](https://github.com/selenide-examples/selenide-browserstack).

Это рабочий пример тестов на селениде, которые запускают браузер на серверах BrowserStack.
Как видно, настройка там минимальная:

```java
  Configuration.remote = "https://hub-cloud.browserstack.com/wd/hub";
  Configuration.browserCapabilities.setCapability("bstack:options", Map.of(
    "userName", "unclebob",
    "accessKey", "0123456789001234567890"
  ));
```

Плюсы:
1. Позволяет запускать разные версии браузеров

Минусы:
1. Некоторые фичи селенида не могут работать (clipboard, прокси)

<br> 

<a name="saucelabs"></a>
## Saucelabs

Компания Saucelabs тоже предлагает запуск браузеров и мобильников на их серверах. 

[Пример](https://github.com/markwinspear/selenide-test-2015) (старый, но надеемся вскоре обновить).

Плюсы:
1. Позволяет запускать разные версии браузеров

Минусы:
1. Некоторые фичи селенида не могут работать (clipboard, прокси)

<br>

<a name="selenoid"></a>
## Selenoid

Как Selenium Grid, но в докере. И написано на Go, поэтому работает быстро и потребляет мало памяти. 

Рабочий пример: [на гитхабе](https://github.com/selenide/selenide/tree/main/modules/selenoid/src/test/java/it/selenoid)

Плюсы:
1. Поддерживается Селенидом напрямую

    1.1. Оформлено как плагин Селенида 'com.codeborne:selenide-selenoid:{{site.SELENIDE_VERSION}}'  
    1.2. В нём реализована поддержка некоторых фич для Selenoid: скачивание файлов, буфер обмена.  

2. Позволяет запускать разные версии браузеров
3. Умеет записывать видео с тестов

Минусы:
1. Поддерживаются только те браузеры, что в принципе способны работать в докере (Internet Explorer точно нет, насчёт Safari не уверен)

<br>

<a name="other"></a>
## Другие облачные провайдеры

Теоретически остальные облачные провайдеры должны интегрироваться так же легко. 

Какие ещё провайдеры пробовали вы? Плюсы, минусы, подводные камни?
Расскажите, поделитесь кодом. 

<br/>
<br/>
