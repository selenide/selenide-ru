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

#### [&gt; Selenium Grid](#selenium-grid)  
#### [&gt; TestContainers](#testcontainers)  
#### [&gt; TestMu AI (ex. LambdaTest)](#testmu-ai)  
#### [&gt; BrowserStack](#browserstack)  
#### [&gt; Saucelabs](#saucelabs)  
#### [&gt; Moon](#moon)
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

<a name="selenium-grid"></a>
## Selenium Grid

Написан на Java командой Selenium.

### Как использовать:
```xml
<dependency>
  <groupId>com.codeborne</groupId>
  <artifactId>selenide-grid</artifactId>
  <version>{{site.SELENIDE_VERSION}}</version>
</dependency>
```

### Плюсы
* Работает без докера. Поддерживает все браузеры (для которых есть вебдрайвер) любых версий.
* Скалируется: можете запускать много нодов на разных ОС с разными версиями браузеров.
* Можете запускать на своих серверах и локально 

### Минусы
* Не поддерживает операции с буфером обмена

<a name="testcontainers"></a>
## TestContainers

Позволяет одной аннотацией запускать браузер на той же машине, но внутри докера. 

Рабочий пример: [selenide-examples/testcontainers](https://github.com/selenide-examples/testcontainers/).

Плюсы:
1. Позволяет запускать разные версии браузеров
2. Умеет записывать видео с тестов (и ещё куча фич TestContainers)
3. Большинство фич селенида продолжают работать (скриншоты, прокси, CDP и т.д.)

Минусы:
1. Некоторые фичи селенида могут не работать (clipboard)
2. Поддерживаются только те браузеры, что в принципе способны работать в докере (Internet Explorer точно нет, насчёт Safari не уверен)

<br>

<a name="testmu-ai"></a>
## TestMu AI (ex. LambdaTest)

Рабочий пример: [selenide-examples/selenide-lambdatest](https://github.com/selenide-examples/selenide-lambdatest).  
Сайт: [testmu.ai](https://www.testmu.ai/blog/selenium-testing-with-selenide-using-intellij-maven/?utm_source=selenide&utm_medium=partnered).

Это рабочий пример тестов на селениде, которые запускают браузер на серверах TestMu AI (ex. LambdaTest).  
Как видно, настройка там минимальная:

```java
  Configuration.remote = "https://hub.lambdatest.com/wd/hub";
  Configuration.browserCapabilities.setCapability("LT:Options", Map.of(
    "user", "unclebob",
    "accessKey", "0123456789001234567890"
  ));
```

Плюсы:
1. Позволяет запускать разные версии браузеров

Минусы:
1. Некоторые фичи селенида могут не работать (clipboard, прокси)

<br>

<a name="browserstack"></a>
## BrowserStack

Рабочий пример: [selenide-examples/selenide-browserstack](https://github.com/selenide-examples/selenide-browserstack).  
Сайт: [BrowserStack.com](https://www.browserstack.com/?utm_source=selenide&utm_medium=partnered)

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
1. Некоторые фичи селенида могут не работать (clipboard, прокси)

<br> 

<a name="saucelabs"></a>
## Saucelabs

Компания Saucelabs тоже предлагает запуск браузеров и мобильников на их серверах. 

Рабочий пример: [selenide-examples/selenide-saucelabs](https://github.com/selenide-examples/selenide-saucelabs).  
Сайт: [saucelabs.com](https://saucelabs.com/)

Плюсы:
1. Позволяет запускать разные версии браузеров

Минусы:
1. Некоторые фичи селенида могут не работать (clipboard, прокси)

<br>

<a name="moon"></a>
## Moon

Как Selenium Grid, но в докере. И написано на Go, поэтому работает быстро и потребляет мало памяти. 

### Как использовать:
```xml
<dependency>
  <groupId>com.codeborne</groupId>
  <artifactId>selenide-moon</artifactId>
  <version>{{site.SELENIDE_VERSION}}</version>
</dependency>
```

* Исходники: [на гитхабе](https://github.com/selenide/selenide/tree/main/modules/moon).
* Рабочий пример: [на гитхабе](https://github.com/selenide/selenide/tree/main/modules/moon/src/test/java/it/moon)

### Плюсы:
1. Поддерживается Селенидом напрямую
2. Поддерживает скачивание файлов, операции с буфером обмена (фичи, которые не обязательно работают в других облаках).
3. Позволяет запускать разные версии браузеров
4. Умеет записывать видео с тестов

### Минусы:
1. Поддерживаются только те браузеры, что в принципе способны работать в докере (Internet Explorer точно нет, насчёт Safari не уверен)

<br>

<a name="selenoid"></a>
## Selenoid

Как Selenium Grid, но в докере. И написано на Go, поэтому работает быстро и потребляет мало памяти. 

### Как использовать:
```xml
<dependency>
  <groupId>com.codeborne</groupId>
  <artifactId>selenide-selenoid</artifactId>
  <version>{{site.SELENIDE_VERSION}}</version>
</dependency>
```

* Исходники: [на гитхабе](https://github.com/selenide/selenide/tree/main/modules/selenoid/).
* Рабочий пример: [на гитхабе](https://github.com/selenide/selenide/tree/main/modules/selenoid/src/test/java/it/selenoid)


### Плюсы:
1. Поддерживается Селенидом напрямую
2. Поддерживает скачивание файлов, операции с буфером обмена (фичи, которые не обязательно работают в других облаках).  
3. Позволяет запускать разные версии браузеров
4. Умеет записывать видео с тестов

### Минусы:
1. Поддерживаются только те браузеры, что в принципе способны работать в докере (Internet Explorer точно нет, насчёт Safari не уверен)

<br>

<a name="other"></a>
## Другие облачные провайдеры

Теоретически остальные облачные провайдеры должны интегрироваться так же легко. 

Какие ещё провайдеры пробовали вы? Плюсы, минусы, подводные камни?
Расскажите, поделитесь кодом. 

И самое главное, _стоило ли оно того_?
Расскажите, какие такие проблемы решает удалённый запуск браузер, ради чего стоило поступиться скоростью, удобством и некоторыми фичами?

<br/>
<br/>
