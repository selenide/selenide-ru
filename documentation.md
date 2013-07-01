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

Здесь можно найти <a href="http://selenide.org/javadoc/2.3" target="_blank">Selenide javadoc</a>.

Для справки, ниже приведены некоторые классы Selenide, которые вам, возможно, придётся использовать:


<h3>com.codeborne.selenide.Selenide
  <a target="_blank" href="https://github.com/codeborne/selenide/blob/master/src/main/java/com/codeborne/selenide/Selenide.java">[src]</a>
  <a target="_blank" href="{{ BASE_PATH }}/javadoc/2.3/com/codeborne/selenide/Selenide.html">[javadoc]</a>
</h3>

Ядро библиотеки Selenide. Два основных метода - это `open` и `доллар`:
<ul>
  <li><a href="{{BASE_PATH}}/javadoc/2.3/com/codeborne/selenide/Selenide.html#open(java.lang.String)">open(URL)</a>, и</li>
  <li><a href="{{BASE_PATH}}/javadoc/2.3/com/codeborne/selenide/Selenide.html#$(java.lang.String)">$(String cssSelector)</a>   - возвращает первый SelenideElement</li>
  <li><a href="{{BASE_PATH}}/javadoc/2.3/com/codeborne/selenide/Selenide.html#$(org.openqa.selenium.By)">$(By)</a>   - возвращает первый SelenideElement</li>
  <li><a href="{{BASE_PATH}}/javadoc/2.3/com/codeborne/selenide/Selenide.html#$$(java.lang.String)">$$(String cssSelector)</a>   - возвращает список элементов</li>
  <li><a href="{{BASE_PATH}}/javadoc/2.3/com/codeborne/selenide/Selenide.html#$$(org.openqa.selenium.By)">$$(By)</a>   - возвращает список элементов</li>
</ul>

Обычно, когда вы получаете с помощью доллара объект SelenideElement, вы можете либо
совершить с ним какое-то действие (click, setValue), либо проверить какое-то условие: `shouldHave(text("abc"))`.

И есть ещё несколько методов, которые тоже иногда нужны:
<a href="{{BASE_PATH}}/javadoc/2.3/com/codeborne/selenide/Selenide.html#sleep(long)">sleep()</a>,
<a href="{{BASE_PATH}}/javadoc/2.3/com/codeborne/selenide/Selenide.html#refresh()">refresh()</a>,
<a href="{{BASE_PATH}}/javadoc/2.3/com/codeborne/selenide/Selenide.html#title()">title()</a>.


<h3>com.codeborne.selenide.SelenideElement
  <a target="_blank" href="https://github.com/codeborne/selenide/blob/master/src/main/java/com/codeborne/selenide/SelenideElement.java">[src]</a>
  <a target="_blank" href="{{ BASE_PATH }}/javadoc/2.3/com/codeborne/selenide/SelenideElement.html">[javadoc]</a>
</h3>

Класс SelenideElement - обёртка вокруг Selenium WebElement, добавляющая ему несколько весьма полезных методов:

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

<h3>com.codeborne.selenide.Condition
  <a target="_blank" href="https://github.com/codeborne/selenide/blob/master/src/main/java/com/codeborne/selenide/Condition.java">[src]</a>
  <a target="_blank" href="{{ BASE_PATH }}/javadoc/2.3/com/codeborne/selenide/Condition.html">[javadoc]</a>
</h3>

*   visible | appear   // например, $("input").shouldBe(visible)
*   present | exist
*   hidden | disappear | not(visible)
*   readonly           // например, $("input").shouldBe(readonly)
*   attribute(String)
*   name               // например, $("input").shouldHave(name("fname"))
*   value              // например, $("input").shouldHave(value("John"))
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

Вы можете легко добавлять свои условие, реализовав интерфейс `com.codeborne.selenide.Condition`.

<h3>com.codeborne.selenide.Selectors
  <a target="_blank" href="https://github.com/codeborne/selenide/blob/master/src/main/java/com/codeborne/selenide/Selectors.java">[src]</a>
  <a target="_blank" href="{{ BASE_PATH }}/javadoc/2.3/com/codeborne/selenide/Selectors.html">[javadoc]</a>
</h3>

Класс содержит некоторые `By` селекторы для поиска элементов по тексту или атрибуту (которых не хватает в стандартном Selenium WebDriver API):

*   <a href="{{BASE_PATH}}/javadoc/2.3/com/codeborne/selenide/Selectors.html#byText(java.lang.String)">byText</a>     - поиск элемента по тексту (подстроке)
*   <a href="{{BASE_PATH}}/javadoc/2.3/com/codeborne/selenide/Selectors.html#withText(java.lang.String)">withText</a>   - поиск элемента по точному тексту
*   <a href="{{BASE_PATH}}/javadoc/2.3/com/codeborne/selenide/Selectors.html#by(java.lang.String, java.lang.String)">by</a>    - поиск элемента по атрибуту
*   <a href="{{BASE_PATH}}/javadoc/2.3/com/codeborne/selenide/Selectors.html#byTitle(java.lang.String)">byTitle</a>   - поиск по атрибуту "title"
*   <a href="{{BASE_PATH}}/javadoc/2.3/com/codeborne/selenide/Selectors.html#byValue(java.lang.String)">byValue</a>   - поиск по атрибуту "value"


<h3>com.codeborne.selenide.ElementsCollection
  <a target="_blank" href="https://github.com/codeborne/selenide/blob/master/src/main/java/com/codeborne/selenide/ElementsCollection.java">[src]</a>
  <a target="_blank" href="{{ BASE_PATH }}/javadoc/2.3/com/codeborne/selenide/ElementsCollection.html">[javadoc]</a>
</h3>

Этот класс, который возвращает метод `$$`. Содержит список веб-элементов и несколько полезных методов::

*   <a href="{{BASE_PATH}}/javadoc/2.3/com/codeborne/selenide/ElementsCollection.html#shouldBe(com.codeborne.selenide.CollectionCondition)">shouldBe</a>     - например, `$$(".errors").shouldBe(empty)`
*   <a href="{{BASE_PATH}}/javadoc/2.3/com/codeborne/selenide/ElementsCollection.html#shouldHave(com.codeborne.selenide.CollectionCondition)">shouldHave</a>     - например, `$$("#mytable tbody tr").shouldHave(size(2))`
*   <a href="{{BASE_PATH}}/javadoc/2.3/com/codeborne/selenide/ElementsCollection.html#find(com.codeborne.selenide.Condition)">find</a>     - например, `$$("#multirowTable tr").findBy(text("Norris"))`
*   <a href="{{BASE_PATH}}/javadoc/2.3/com/codeborne/selenide/ElementsCollection.html#filter(com.codeborne.selenide.Condition)">filter</a>     - например, `$$("#multirowTable tr").filterBy(text("Norris"))`
*   <a href="{{BASE_PATH}}/javadoc/2.3/com/codeborne/selenide/ElementsCollection.html#exclude(com.codeborne.selenide.Condition)">exclude</a>     - например, `$$("#multirowTable tr").excludeWith(text("Chack"))`

Продолжение следует...

<h3>com.codeborne.selenide.CollectionCondition
  <a target="_blank" href="https://github.com/codeborne/selenide/blob/master/src/main/java/com/codeborne/selenide/CollectionCondition.java">[src]</a>
  <a target="_blank" href="{{ BASE_PATH }}/javadoc/2.3/com/codeborne/selenide/CollectionCondition.html">[javadoc]</a>
</h3>

<h3>com.codeborne.selenide.WebDriverRunner
  <a target="_blank" href="https://github.com/codeborne/selenide/blob/master/src/main/java/com/codeborne/selenide/WebDriverRunner.java">[src]</a>
  <a target="_blank" href="{{ BASE_PATH }}/javadoc/2.3/com/codeborne/selenide/WebDriverRunner.html">[javadoc]</a>
</h3>

<h3>com.codeborne.selenide.WebDriverProvider
  <a target="_blank" href="https://github.com/codeborne/selenide/blob/master/src/main/java/com/codeborne/selenide/WebDriverProvider.java">[src]</a>
  <a target="_blank" href="{{ BASE_PATH }}/javadoc/2.3/com/codeborne/selenide/WebDriverProvider.html">[javadoc]</a>
</h3>

<h3>com.codeborne.selenide.Configuration
  <a target="_blank" href="https://github.com/codeborne/selenide/blob/master/src/main/java/com/codeborne/selenide/Configuration.java">[src]</a>
  <a target="_blank" href="{{ BASE_PATH }}/javadoc/2.3/com/codeborne/selenide/Configuration.html">[javadoc]</a>
</h3>


Не переключайтесь!