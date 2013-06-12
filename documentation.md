---
layout: page
title : Документация Selenide
header : Документация
group: navigation
---
{% include JB/setup %}

> Плохой софт <span class="red">не имеет</span> документации. <br/>
> Отличный софт <span class="green">не нуждается</span> в документации.

Мы с гордостью заявляем, что Selenide настолько прост, что вам не нужно читать тонны документации, чтобы начать с ним работать.

## Три простые вещи

Вся работа с Selenide состоит всего из трёх простых вещей:

1.  Открыть страницу
2.  $(найти элемент).совершитьДействие()
3.  $(найти элемент).проверитьУсловие()

```java
  open("/login");
  $("#submit").click();
  $(".message").shouldHave(text("Привет!"));
```

## Используй мощь IDE!

Весь Selenide API состоит из небольшого числа классов. Мы предлагаем прекратить читать, открыть вашу любимую IDE и просто начать печатать.

Просто набери: `$(selector).` - и IDE предложит все возможные опции.

<img src="{{ BASE_PATH }}/images/ide-just-start-typing.png" alt="Selenide API: Просто начни писать"/>

Используй всю мощь современных средств разработки вместо того, чтобы забивать себе голову!

<br/>
## Selenide API

Для справки, ниже приведены некоторые классы Selenide, которые вам, возможно, придётся использовать:


### com.codeborne.selenide.Selenide <a target="_blank" href="https://github.com/codeborne/selenide/blob/master/src/main/java/com/codeborne/selenide/Selenide.java">[src]</a>

*  open(URL | String relativeOrAbsoluteURL)
*  $(By | String cssSelector)   - returns SelenideElement
*  $$(By | String cssSelector)  - return collection of elements
*  refresh()
*  title()
*  sleep(long milliseconds)

Главный метод, конечно, `$` - у него может быть куча разных параметров, но возвращает он всегда SelenideElement.

### com.codeborne.selenide.SelenideElement <a target="_blank" href="https://github.com/codeborne/selenide/blob/master/src/main/java/com/codeborne/selenide/SelenideElement.java">[src]</a>

Класс SelenideElement - обёртка вокруг is a wrapper around Selenium WebElement, giving it some additional convenient method:

*  should(Condition)
*  shouldBe(Condition)
*  shouldHave(Condition)
*  shouldNot(Condition)
*  shouldNotBe(Condition)
*  shouldNotHave(Condition)<br/>
*  waitUntil(Condition, milliseconds)
*  waitWhile(Condition, milliseconds)<br/>
*  find(String | By)
*  findAll(String | By)<br/>
*  setValue(String)
*  val(String)
*  append(String)
*  pressEnter(String)<br/>
*  val()
*  data()
*  text()
*  isDisplayed()
*  exists()<br/>
*  selectOption(String text)
*  selectOptionByValue(String value)
*  getSelectedOption()
*  getSelectedText()
*  getSelectedValue()<br/>
*  uploadFromClasspath(String fileName)
*  toWebElement()

### com.codeborne.selenide.Condition <a target="_blank" href="https://github.com/codeborne/selenide/blob/master/src/main/java/com/codeborne/selenide/Condition.java">[src]</a>

*   visible | appear   // e.g. $("input").shouldBe(visible)
*   present | exist
*   hidden | disappear | not(visible)
*   readonly           // e.g. $("input").shouldBe(readonly)
*   attribute(String)
*   name               // e.g. $("input").shouldHave(name("fname"))
*   value              // e.g. $("input").shouldHave(value("John"))
*   type               // $("#input").shouldHave(type("checkbox"))
*   id                 // $("#input").shouldHave(id("myForm"))
*   empty              // $("h2").shouldBe(empty)
*   options
*   cssClass(String)
*   focused
*   enabled
*   disabled
*   selected
*   matchText(String regex)
*   text(String substring)
*   exactText(String wholeText)
*   textCaseSensitive(String substring)
*   exactTextCaseSensitive(String wholeText)

You can easily add your own conditions by implementing interface `com.codeborne.selenide.Condition`


To be continued...

### com.codeborne.selenide.Selectors <a target="_blank" href="https://github.com/codeborne/selenide/blob/master/src/main/java/com/codeborne/selenide/Selectors.java">[src]</a>
### com.codeborne.selenide.ElementsCollection <a target="_blank" href="https://github.com/codeborne/selenide/blob/master/src/main/java/com/codeborne/selenide/ElementsCollection.java">[src]</a>
### com.codeborne.selenide.CollectionCondition <a target="_blank" href="https://github.com/codeborne/selenide/blob/master/src/main/java/com/codeborne/selenide/CollectionCondition.java">[src]</a>
### com.codeborne.selenide.WebDriverRunner <a target="_blank" href="https://github.com/codeborne/selenide/blob/master/src/main/java/com/codeborne/selenide/WebDriverRunner.java">[src]</a>
### com.codeborne.selenide.WebDriverProvider <a target="_blank" href="https://github.com/codeborne/selenide/blob/master/src/main/java/com/codeborne/selenide/WebDriverProvider.java">[src]</a>
### com.codeborne.selenide.Configuration <a target="_blank" href="https://github.com/codeborne/selenide/blob/master/src/main/java/com/codeborne/selenide/Configuration.java">[src]</a>



Не переключайтесь!