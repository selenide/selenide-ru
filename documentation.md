---
layout: page
title :
header : Документация
group: navigation
---
{% include JB/setup %}



<div class="short docs">
<div class="wrapper-color-content">

<h3>Документация</h3>
<h4>Плохой софт <span class="bold">не имеет</span> документации.
Отличный софт <span class="bold">не нуждается</span> в документации.</h4>

Мы с гордостью заявляем, что Selenide настолько прост, что вам не нужно читать тонны документации, чтобы начать с ним работать.<br/>
Вся работа с Selenide состоит всего из трёх простых вещей:<br>
</div></div>

<div class="quicklinks">
<div class="wrapper-color-content">
<ul class="gray-boxes">
  <li><a href="https://github.com/codeborne/selenide" target="_blank"><span class="ql"><h3>View on</h3> <strong><h4>GitHub</h4></strong></span></a></li>
  <li><a href="http://search.maven.org/#search%7Cgav%7C1%7Cg%3A%22com.codeborne%22%20AND%20a%3A%22selenide%22" target="_blank"><span class="ql"><h3>Search in</h3> <strong><h4>Maven</h4></strong></span></a></li>
  <li><a href="{{ BASE_PATH }}/archive.html"><span class="ql"><h3>Read our</h3> <strong><h4>Blog</h4></strong></span></a></li>
  <li><a href="http://twitter.com/jselenide" target="_blank"><span class="ql"><h3>Follow at</h3><strong><h4>Twitter</h4></strong></span></a></li>
  <li><a href="{{ BASE_PATH }}/rss.xml"><span class="ql"><h3>Subscribe to</h3><strong><h4>RSS</h4></strong></span></a></li>
</ul>
</div>
</div>
<div class="wrapper-content">
## Три простые вещи:
<strong>1.</strong>  Открыть страницу   <br>
<strong>2.</strong>  $(элемент).совершитьДействие()<br>
<strong>3.</strong>  $(элемент).проверитьУсловие()<br>

```java
  open("/login");
  $("#submit").click();
  $(".message").shouldHave(text("Привет"));
```

## Используй мощь IDE!

Весь Selenide API состоит из небольшого числа классов. Мы предлагаем прекратить читать, открыть вашу любимую IDE и просто начать печатать.

Просто набери: `$(selector).` - и IDE предложит все возможные опции.

<img src="{{ BASE_PATH }}/images/ide-just-start-typing.png" alt="Selenide API: Просто начни писать"/>

Используй всю мощь современных средств разработки вместо того, чтобы забивать себе голову документацией!

<br/>

## Selenide API

Здесь можно найти <a href="http://selenide.org/javadoc/2.4" target="_blank">Selenide javadoc</a>.

Для справки, ниже приведены некоторые классы Selenide, которые вам, возможно, придётся использовать:

<h3>com.codeborne.selenide.Selenide
  <a target="_blank" href="https://github.com/codeborne/selenide/blob/master/src/main/java/com/codeborne/selenide/Selenide.java">[src]</a>
  <a target="_blank" href="http://selenide.org/javadoc/2.4/com/codeborne/selenide/Selenide.html">[javadoc]</a>
</h3>

Ядро библиотеки Selenide. Два основных метода - это `open` и `доллар`:
<ul>
  <li><a href="http://selenide.org/javadoc/2.4/com/codeborne/selenide/Selenide.html#open(java.lang.String)">open(URL)</a>, и</li>
  <li><a href="http://selenide.org/javadoc/2.4/com/codeborne/selenide/Selenide.html#$(java.lang.String)">$(String cssSelector)</a>   - возвращает первый SelenideElement</li>
  <li><a href="http://selenide.org/javadoc/2.4/com/codeborne/selenide/Selenide.html#$(org.openqa.selenium.By)">$(By)</a>   - возвращает первый SelenideElement</li>
  <li><a href="http://selenide.org/javadoc/2.4/com/codeborne/selenide/Selenide.html#$$(java.lang.String)">$$(String cssSelector)</a>   - возвращает список элементов</li>
  <li><a href="http://selenide.org/javadoc/2.4/com/codeborne/selenide/Selenide.html#$$(org.openqa.selenium.By)">$$(By)</a>   - возвращает список элементов</li>
</ul>

Обычно, когда вы получаете с помощью доллара объект SelenideElement, вы можете либо
совершить с ним какое-то действие (click, setValue), либо проверить какое-то условие: `shouldHave(text("abc"))`.

И есть ещё несколько методов, которые тоже иногда нужны:
<a href="http://selenide.org/javadoc/2.4/com/codeborne/selenide/Selenide.html#sleep(long)">sleep()</a>,
<a href="http://selenide.org/javadoc/2.4/com/codeborne/selenide/Selenide.html#refresh()">refresh()</a>,
<a href="http://selenide.org/javadoc/2.4/com/codeborne/selenide/Selenide.html#title()">title()</a>.

<h3>com.codeborne.selenide.SelenideElement
  <a target="_blank" href="https://github.com/codeborne/selenide/blob/master/src/main/java/com/codeborne/selenide/SelenideElement.java">[src]</a>
  <a target="_blank" href="http://selenide.org/javadoc/2.4/com/codeborne/selenide/SelenideElement.html">[javadoc]</a>
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
  <a target="_blank" href="http://selenide.org/javadoc/2.4/com/codeborne/selenide/Condition.html">[javadoc]</a>
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
  <a target="_blank" href="http://selenide.org/javadoc/2.4/com/codeborne/selenide/Selectors.html">[javadoc]</a>
</h3>

Класс содержит некоторые `By` селекторы для поиска элементов по тексту или атрибуту (которых не хватает в стандартном Selenium WebDriver API):

*   <a href="http://selenide.org/javadoc/2.4/com/codeborne/selenide/Selectors.html#byText(java.lang.String)">byText</a>     - поиск элемента по тексту (подстроке)
*   <a href="http://selenide.org/javadoc/2.4/com/codeborne/selenide/Selectors.html#withText(java.lang.String)">withText</a>   - поиск элемента по точному тексту
*   <a href="http://selenide.org/javadoc/2.4/com/codeborne/selenide/Selectors.html#by(java.lang.String, java.lang.String)">by</a>    - поиск элемента по атрибуту
*   <a href="http://selenide.org/javadoc/2.4/com/codeborne/selenide/Selectors.html#byTitle(java.lang.String)">byTitle</a>   - поиск по атрибуту "title"
*   <a href="http://selenide.org/javadoc/2.4/com/codeborne/selenide/Selectors.html#byValue(java.lang.String)">byValue</a>   - поиск по атрибуту "value"

<h3>com.codeborne.selenide.ElementsCollection
  <a target="_blank" href="https://github.com/codeborne/selenide/blob/master/src/main/java/com/codeborne/selenide/ElementsCollection.java">[src]</a>
  <a target="_blank" href="http://selenide.org/javadoc/2.4/com/codeborne/selenide/ElementsCollection.html">[javadoc]</a>
</h3>

Этот класс, который возвращает метод `$$`. Содержит список веб-элементов и несколько полезных методов::

*   <a href="http://selenide.org/javadoc/2.4/com/codeborne/selenide/ElementsCollection.html#shouldBe(com.codeborne.selenide.CollectionCondition)">shouldBe</a>     - e.g. `$$(".errors").shouldBe(empty)`
*   <a href="http://selenide.org/javadoc/2.4/com/codeborne/selenide/ElementsCollection.html#shouldHave(com.codeborne.selenide.CollectionCondition)">shouldHave</a>     - e.g. `$$("#mytable tbody tr").shouldHave(size(2))`
*   <a href="http://selenide.org/javadoc/2.4/com/codeborne/selenide/ElementsCollection.html#find(com.codeborne.selenide.Condition)">find</a>     - e.g. `$$("#multirowTable tr").findBy(text("Norris"))`
*   <a href="http://selenide.org/javadoc/2.4/com/codeborne/selenide/ElementsCollection.html#filter(com.codeborne.selenide.Condition)">filter</a>     - e.g. `$$("#multirowTable tr").filterBy(text("Norris"))`
*   <a href="http://selenide.org/javadoc/2.4/com/codeborne/selenide/ElementsCollection.html#exclude(com.codeborne.selenide.Condition)">exclude</a>     - e.g. `$$("#multirowTable tr").excludeWith(text("Chack"))`

Продолжение следует...

<h3>com.codeborne.selenide.CollectionCondition
  <a target="_blank" href="https://github.com/codeborne/selenide/blob/master/src/main/java/com/codeborne/selenide/CollectionCondition.java">[src]</a>
  <a target="_blank" href="http://selenide.org/javadoc/2.4/com/codeborne/selenide/CollectionCondition.html">[javadoc]</a>
</h3>

<h3>com.codeborne.selenide.WebDriverRunner
  <a target="_blank" href="https://github.com/codeborne/selenide/blob/master/src/main/java/com/codeborne/selenide/WebDriverRunner.java">[src]</a>
  <a target="_blank" href="http://selenide.org/javadoc/2.4/com/codeborne/selenide/WebDriverRunner.html">[javadoc]</a>
</h3>

<h3>com.codeborne.selenide.WebDriverProvider
  <a target="_blank" href="https://github.com/codeborne/selenide/blob/master/src/main/java/com/codeborne/selenide/WebDriverProvider.java">[src]</a>
  <a target="_blank" href="http://selenide.org/javadoc/2.4/com/codeborne/selenide/WebDriverProvider.html">[javadoc]</a>
</h3>

<h3>com.codeborne.selenide.Configuration
  <a target="_blank" href="https://github.com/codeborne/selenide/blob/master/src/main/java/com/codeborne/selenide/Configuration.java">[src]</a>
  <a target="_blank" href="http://selenide.org/javadoc/2.4/com/codeborne/selenide/Configuration.html">[javadoc]</a>
</h3>


Не переключайтесь!