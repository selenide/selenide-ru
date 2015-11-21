---
layout: page
title :
header : 
group: navigation
cssClass: docs
header-text: <h4>Сравнение Selenide и Selenium</h4>
  
  Почему обычного Selenium webdriver недостаточно?
  
---
{% include JB/setup %}

{% include documentation-menu.md %}

## Мотивация

Selenium WebDriver - отличный инструмент. Но это не инструмент для тестирования. Это инструмент для управления браузером. 

А Selenide - удобный инструмент для автоматических тестов, построенный на базе Selenium WebDriver.

### Почему понадобился ещё один враппер для Selenium?

Да, есть и другие "обёртки" для Selenium webdriver. Но нам кажется, что все они не решают главные проблемы UI тестов.
А именно, нестабильность тестов, веб-приложения с динамическим контентом, JavaScript, Ajax, таймауты и т.д.
Selenide был создан для решения этих проблем.

А ещё Selenide очень простой для изучения. С ним каждый может начать писать автоматические тесты буквально за 5 минут, 
даже те, кто не имеет никакого опыта в тестировании. И даже разработчики!

## Какие преимущества даёт Selenide по сравнению с голым Selenium WebDriver?

Прежде всего, Selenide помогает вам делать стабильные тесты, решая (почти) все проблемы с таймаутами и аяксом.

Selenide предлагает лаконичный API для использования Selenium WebDriver в UI тестах:

* Умные ожидания
* Автоматическое управление браузером (открытие, закрытие - вам больше не придётся об этом думать)
* Удобные методы
* Поддержка Ajax
* Автоматические скриншоты

Подробности ниже.

### Автоматическое управление браузером
Вам больше не надо явно открывать браузер и думать о том, где его хранить и когда закрывать.
Selenide сам откроет браузер, когда он впервые понадобится, и закроет, когда он больше не будет нужен. 

### Удобные методы
Selenide предлагает лаконичный и мощный API, который поможет вам писать короткие и хорошо читаемые тесты. 
Selenide есть масса удобных методов для заполнения полей, выбора чекбоксов, выпадающих списков, поиска элементов по тексту и т.д.

```java
@Test
public void canFillComplexForm() {
  open("/client/registration");
  $(By.name("user.name")).val("johny");
  $(By.name("user.gender")).selectRadio("male");
  $("#user.preferredLayout").selectOption("plain");
  $("#user.securityQuestion").selectOptionByText("What is my first car?");
}
```

### Поддержка Ajax
При тестировании современных динамичных приложений, полных аякса и яваскрипта, нам часто нужно подождать, пока
 изменится состояние какого-либо элемента. Selenide делает это из коробки. Автоматически. Вам даже не нужно задумываться
 о том, требуется ли ожидание в том или ином месте. 

Все нижеследующие методы могут немножко подождать, если условие не выполнено сразу (по умолчанию до 4 секунд):

```java
 $("#topic").should(appear);
 $("#topic").shouldBe(visible);

 $("#topic").should(disappear);
 $("h1").shouldHave(text("Hello"));
 $(".message").shouldNotHave(text("Wait for loading..."));
 $(".password").shouldNotHave(cssClass("errorField"));
 
 $(".error").should(disappear);
```

### Автоматические скриншоты

Когда тест падает, Selenide автоматически делает скриншот. Вам ничего не нужно для этого делать. 

## Больше преимуществ!

Это лишь краткий обзор. В этом видео можно узнать узнать больше о преимуществах Selenide:

<div class="wrapper-content center">
<iframe width="840" height="473" src="https://www.youtube.com/embed/fR8CyLcxBZ0" frameborder="0" allowfullscreen></iframe>
</div>

<div class="wrapper-content center">
<iframe src="https://docs.google.com/presentation/d/1ZksjuL2vPN_pkhMuon0HH4gm7KNmjU50pByRRGzgVko/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
</div>

<br/>



