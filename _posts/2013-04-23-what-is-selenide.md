---
layout: post
title: "Что такое Selenide"
description: ""
category: 
tags: []
---
{% include JB/setup %}

Многие слышали про [Selenium WebDriver](http://code.google.com/p/selenium/) - один из самых популярных инструментов для написания приёмочных/интеграционных тестов.

Используя Selenium, мы очень быстро заметили, что нам раз от раза приходится писать один и тот же код, чтобы инициализировать браузер вначале, закрыть его в конце, делать скриншоты после каждого упавшего теста и т.д. [пруфлинк](http://habrahabr.ru/post/114145/).

Поэтому мы решили выделить этот повторяющийся код в отдельную библиотеку. Так на свет появился [Selenide](http://selenide.org).

![right]({{ BASE_PATH }}/images/selenide-logo-100x100.png)

### Что такое Selenide
[Selenide](http://selenide.org) - это обёртка вокруг Selenium WebDriver, позволяющая быстро и просто его использовать при написании тестов, сосредоточившись на логике, а не суете с браузером.

Вот пример теста. Как видите, код минимален. Вызвал метод `open` - и браузер открылся.

```java
@Test
public void testLogin() {
  open("/login");
  $(By.name("user.name")).sendKeys("johny");
  $("#submitButton").click();
  $("#username").shouldHave(text("Hello, Johny!"));
  $("#username").shouldHave(cssClass("green-text"));
}
```

При вызове метода open Selenide сам запускает браузер и открывает страницу `http://localhost:8080/login` (порт и хост конфигурируется, естественно). А также заботится о том, чтобы в конце браузер закрылся.

### Дополнительные вкусности Selenide ###
Selenide предоставляет дополнительные методы для действий, которые невозможно сделать одной командой Selenium WebDriver. Это выбор радио-кнопки, выбор элемента из выпадающего списка, создание снимка экрана, очистка кэша браузера и т.п.

```java
@Test
public void canFillComplexForm() {
  open("/client/registration");
  setValue(By.name("user.name"), "johny");
  selectRadio("user.gender", "male");
  selectOption(By.name("user.preferredLayout"), "plain");
  selectOptionByText(By.name("user.securityQuestion"), "What is my first car?");
  followLink(By.id("submit"));
  takeScreenShot("complex-form.png");
}

@Before
public void clearCache() {
  clearBrowserCache();
}
```

И особняком стоит вопрос Ajax: при тестировании приложений, использующих Ajax, приходится изобретать код, который чего-то ждёт (когда кнопка станет зелёной). Selenide предоставляет богатый API для ожидания наступления различных событий:

```java
@Test
public void pageUsingAjax() {
  waitFor("#username");
  waitUntil("#username", hasText("Hello, Johny!"));
  waitUntil("#username", hasAttribute("name", "user.name"));
  waitUntil("#username", hasClass("green-button"));
  waitUntil("#username", hasValue("Carlson"));
  waitUntil("#username", appears);
  waitUntil("#username", disappears);
}
```

### Я хочу попробовать, с чего начать?

Добавь в свой проект зависимость Selenide:

```xml
<dependency>
    <groupId>com.codeborne</groupId>
    <artifactId>selenide</artifactId>
    <version>2.1</version>
</dependency>
```

Импортируй нужный класс:

```java
include static com.codeborne.selenide.Selenide.*
```

И готово! Пиши тесты, едрён-батон!

### Кто-нибудь это реально использует?
Да, мы <a href="http://ru.codeborne.com/" target="_blank">в фирме Codeborne</a> используем Selenide в нескольких реальных проектах:

*   Java + ANT + JUnit
*   Java + Gradle + JUnit
*   Scala + ANT + ScalaTest

Так что можете быть уверены, проект не сырой, реально используется и поддерживается.
Есть ещё небольшой эталонный open-source проект, в котором используется Selenide: [игра Виселица](https://github.com/asolntsev/hangman).

### Откуда такое название - Selenide?
Библиотека Selenium взяла своё название от химического элемента (Селен). А селениды - это соединения селена с  другими элементами.

Вот и у нас:

*   Selenide = Selenium + JUnit
*   Selenide = Selenium + TestNG
*   Selenide = Selenium + ScalaTest
*   Selenide = Selenium + что угодно

Химичьте на здоровье!
