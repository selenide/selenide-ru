---
layout: page
title : ЧАВО
header : Часто задаваемые вопросы
group: navigation
cssClass: faq
header-text: Часто задаваемые вопросы
---
{% include JB/setup %}

## Мотивация

> Почему недостаточно Selenium webdriver

> Зачем понадобилась ещё одна обёртка над Selenium?

Подробный ответ [здесь](/documentation/selenide-vs-selenium.html)


## Page Objects
> Можно ли использовать Пэдж Обжекты с Selenide?
 
Да! Вы можете использовать Пэдж Обжекты с Selenide.

Более того, с Selenide ваши page objects станут **короче и читабельнее**. [Тут подробности](/documentation/page-objects.html).

## Настройки
> Где я могу найти все доступные настройки Selenide?

Описание всех настроек и значений по умолчанию можно найти в [javadoc](https://selenide.org/javadoc/current/com/codeborne/selenide/Configuration.html).
> Как задать настройки Selenide?

Selenide имеет очень разумные настройки по умолчанию, которые должны быть 
удобны для большинства "нормальных" проектов. 

Но если всё-таки захочется запустить тесты с другими настройками, это можно сделать либо через System property:

```
-Dselenide.timeout=6000
```

либо программно, прямо в тестах:

```java
public void setUp() {
  Configuration.timeout = 6000;
}
```

## Браузеры
>Можно ли запустить тесты Selenide на Internet Explorer? А headless-браузере?

Да.
Selenide можно запускать с любым браузером, для которого существует webdriver. Самые популярные браузеры
поддерживаются из коробки (chrome, firefox, edge, ie, safari, opera). 
Некоторые менее популярные тоже поддерживаются, но требуют пары строк конфигурации (phantomjs, htmlunit).
См. [Wiki](https://github.com/selenide/selenide/wiki/How-Selenide-creates-WebDriver).

Другие браузеры тоже можно использовать, передав имя класса вебдрайвера.

<br/>
Например, чтобы запустить тесты с браузером Firefox:
```-Dselenide.browser=firefox```

<br/>

>Как сказать Selenide использовать браузер с моим кастомным профайлом?

Вы можете подсунуть Selenide любой экземпляр webdriver, который вы можете создать с какими угодно параметрами.
Смотри примеры на [Wiki](https://github.com/selenide/selenide/wiki/How-Selenide-creates-WebDriver).

<br/>

>Можно ли использовать Selenide в связке с Selenium Grid?

Да, Selenide поддерживает Selenium Grid. Просто добавьте проперти `-Dselenide.remote=http://localhost:5678/wd/hub` при запуске тестов.

>Можно ли использовать Selenide в связке с Selenoid?

Да, Selenide поддерживает Selenoid. Просто добавьте проперти `-Dselenide.remote=http://localhost:5678/wd/hub` при запуске тестов.  
Мы также рекомендуем использовать селенидовский плагин [selenide-selenoid](https://github.com/selenide/selenide-selenoid).

<br/>

>Можно ли использовать Selenide для тестирования мобильных приложений?

Да, Selenide поддерживает тестирование мобильных приложений с помощью библиотеки Appium.
1. Мы рекомендуем использовать селенидовский плагин [selenide-appium](https://github.com/selenide/selenide-appium).
2. Вы можете найти рабочие примеры [на гитхабе](https://github.com/selenide-examples/selenide-appium)
3. Посмотрите презентацию [Selenide для мобилок](https://seleniumcamp.com/talk/selenide-for-web-android-and-ios/)


## Билд-скрипты

>Как запустить тесты Selenide на CI - сервере непрерывной интеграции?

Для этого нужно написать билд-скрипт. Скорее всего он у вас уже есть.
На [Wiki page](https://github.com/selenide/selenide/wiki/Build-script/) есть несколько примеров на Ant и Gradle.


## Скриншоты (снимок экрана)

> Как сделать скриншот в тесте?

См. [документация](/documentation.html) -> [Скриншоты](/documentation/screenshots.html)

> Как сказать Selenide сохранять скриншоты в другую папку?

См. [документация](/documentation.html) -> [Скриншоты](/documentation/screenshots.html)


## Вкладки/окна браузера

> Как переключаться между разными окошками / вкладками браузера?

Для этого можно использовать API самого Selenium WebDriver.

  * `getWebDriver().getWindowHandles()` - возвращает множество всех вкладок или окон
  * `getWebDriver().getWindowHandle()` - возвращает уникальный идентификатор активной вкладки или окна.

## Исходный код Selenide

> Могу ли я посмотреть исходный код Selenide?

Да. Исходный код Selenide выложен [на гитхабе](https://github.com/selenide/selenide/).

> Могу ли я вносить изменения в Selenide?

Конечно! На то он и open source. Если умеете кодить сами, смело создавайте Pull Request, если нет - оформляйте свои
пожелалки в виде [issue](https://github.com/selenide/selenide/issues).

## Лицензия

> Сколько стоит Selenide?

> Если наш заказчик потребует исходный код тестов, позволяет ли лицензия Selenide ему их передать?

Selenide - __бесплатный__ продукт с __открытым исходным кодом__, распространяемый [по лицензии MIT](https://github.com/selenide/selenide/blob/master/LICENSE).
Проще говоря, это значит, что вы можете делать с ним всё что угодно.

> А точно вы не сделаете Selenide платным?

Точно. Selenide всегда будет бесплатным. 

* Во-первых, потому, что мы верим в open-source. 
* Во-вторых, потому, что мы не верим, что на этом можно заработать. :)

## Полезно почитать

- Если у вас **Gradle**, **JUnit5**, **Allure** и **Selenide**, то вам стоит почитать [статью](https://medium.com/@rosolko/simple-allure-2-configuration-for-gradle-8cd3810658dd), где описан минимальный набор шагов и конфигураций для получения базового тестового окружения, так же можно посмотреть исходный код на [гитхабе](https://github.com/rosolko/allure-gradle-configuration).
- Так же советуем почитать [статью](https://medium.com/@rosolko/boost-you-autotests-with-fast-authorization-b3eee52ecc19) о том, как можно с помощью одного простого действия значительно ускорить ваши тесты.
- Тот же метод, только с [другой](https://medium.com/@rosolko/fast-authorization-level-local-storage-6c84e9b3cef1) реализацией.
- Хороший обзор [что лучше, явные или неявные ожидания](https://seleniumcamp.com/talk/deep-dive-into-selenium-waits/)  (спойлер: плохи и те, и те - используйте селенидовские)
- Вечно полезная статья [как прочитать много данных с веб-страницы?](http://barancev.github.io/read-data-from-web-page/) (спойлер: через JavaScript)
