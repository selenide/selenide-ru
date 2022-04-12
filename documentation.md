---
layout: page
title :
header : Документация
group: navigation
cssClass: docs
header-text: >
  <h4>Плохой софт <span class="bold">не имеет</span> документации.
  Отличный софт <span class="bold">не нуждается</span> в документации.</h4>

  <div>
    Мы с гордостью заявляем, что Selenide настолько прост, что не нужно читать тонны документации, чтобы начать с ним работать.
  </div>
  <div class="mt-1">
    Вся работа с Selenide состоит всего из трёх простых шагов:
  </div>
---
{% include JB/setup %}

{% include documentation-menu.md %}

## Три простых шага:
<strong>1.</strong>  открыть(страницу)   <br/>
<strong>2.</strong>  $(элемент).совершитьДействие()<br/>
<strong>3.</strong>  $(элемент).проверитьУсловие()<br/>

```java
  open("/login");
  $("#submit").click();
  $(".message").shouldHave(text("Привет"));
```

## Используй мощь IDE!

Весь Selenide API состоит из небольшого числа классов. Мы предлагаем прекратить читать, открыть твою любимую IDE и просто начать печатать.

Просто набери: `$(selector).` - и IDE предложит все возможные опции.

<img src="{{ BASE_PATH }}/images/ide-just-start-typing.png" alt="Selenide API: Просто начни писать"/>

Используй всю мощь современных средств разработки вместо того, чтобы забивать себе голову документацией!

<br/>

## Selenide API

Здесь можно найти <a href="{{ BASE_PATH }}/javadoc.html" target="_blank">Selenide javadoc</a>.

Для справки, ниже приведены некоторые классы Selenide с описанием основных определенных в них методов, которые тебе, возможно, понадобятся:

<h3>com.codeborne.selenide.Selenide
  <a target="_blank" href="https://github.com/selenide/selenide/blob/master/statics/src/main/java/com/codeborne/selenide/Selenide.java">[src]</a>
  <a target="_blank" href="https://selenide.org/javadoc/current/com/codeborne/selenide/Selenide.html">[javadoc]</a>
</h3>

Ядро библиотеки Selenide. Основные методы - это `open`, `$` и `$$`:
<ul>
  <li><a href="https://selenide.org/javadoc/current/com/codeborne/selenide/Selenide.html#open(java.lang.String)">open(URL)</a></li>
  <li><a href="https://selenide.org/javadoc/current/com/codeborne/selenide/Selenide.html#$(java.lang.String)">$(String cssSelector)</a>   - возвращает объект типа SelenideElement, который представляет первый найденный по CSS селектору элемент на странице</li>
  <li><a href="https://selenide.org/javadoc/current/com/codeborne/selenide/Selenide.html#$(org.openqa.selenium.By)">$(By)</a>   - возвращает "первый SelenideElement" по локатору типа By</li>
  <li><a href="https://selenide.org/javadoc/current/com/codeborne/selenide/Selenide.html#$$(java.lang.String)">$$(String cssSelector)</a>   - возвращает объект типа ElementsCollection, который представляет коллекцию всех элементов найденных по CSS селектру</li>
  <li><a href="https://selenide.org/javadoc/current/com/codeborne/selenide/Selenide.html#$$(org.openqa.selenium.By)">$$(By)</a>   - возвращает "коллекцию элементов" по локатору типа By</li>
</ul>

Обычно, когда ты получаешь с помощью доллара объект SelenideElement, ты можешь либо
совершить с ним какое-то действие:

* `$(byText("Sign in")).click();`

и даже несколько действий сразу:

* `$(byName("password")).setValue("qwerty").pressEnter();`

либо проверить какое-то условие:

* `$(".wellcome-message").shouldHave(text("Welcome, user!"))`.

"Два доллара" же может быть удобно использовать когда нужный элемент является одним из группы однотипных элементов. Например вместо:

```java
$(byXpath("//*[@id='search-results']//a[contains(text(),'selenide.org')]")).click();
```
можно использовать более читабельный и лаконичный вариант:

```java
$$("#search-results a").findBy(text("selenide.org")).click();
```

Большинство операций над элементами полученными с помощью `$` и `$$` имеют встроенные неявные ожидания в зависимости от контекста. Это позволяет в большинстве случаев не отвлекаться на явные ожидания загрузки элементов при тестировании динамических веб приложений.

Не стесняйся поискать и найти намного больше методов внутри класса Selenide, которые могут тебе понадобиться;), просто набрав в любимом IDE `Selenide.`,

Вот лишь несколько примеров:
<a href="http://selenide.org/javadoc/current/com/codeborne/selenide/Selenide.html#sleep(long)">sleep(long milliseconds)</a>, <a href="http://selenide.org/javadoc/current/com/codeborne/selenide/Selenide.html#refresh()">refresh()</a>, <a href="http://selenide.org/javadoc/current/com/codeborne/selenide/Selenide.html#title()">title()</a>, <a href="http://selenide.org/javadoc/current/com/codeborne/selenide/Selenide.html#executeJavaScript()">executeJavaScript(String jsCode, Object... arguments)</a>.


Более подробная информация доступна в [Selenide gitbook](https://selenide.gitbooks.io/user-guide/content/ru/selenide-api/selenide.html)

<h3>com.codeborne.selenide.SelenideElement
  <a target="_blank" href="https://github.com/selenide/selenide/blob/master/src/main/java/com/codeborne/selenide/SelenideElement.java">[src]</a>
  <a target="_blank" href="https://selenide.org/javadoc/current/com/codeborne/selenide/SelenideElement.html">[javadoc]</a>
</h3>

Класс SelenideElement - описывает элемент найденный на странице. Его обьект можно например получить с помощью команды `$`.  В классе описанны следующие полезные методы.

<h4>
Методы поиска внутренних элементов
</h4>

* find(String cssSelector) / $(String cssSelector)
* find(By) / $(By)
* findAll(String cssSelector) / $$(String cssSelector)
* findAll(By) / $$(By)

Здесь $ и $$ просто лаконичные "алиасы" (синонимы) для соответствующих команд.

Таким образом, можно пошагово уточнять - какой внутренний элемент необходимо получить внутри внешнего элемента, строя цепочку последовательних вызовов, например:

```java
$("#header").find("#menu").findAll(".item")
```

<h4>
Методы-проверки состояния элемента - assertions
</h4>

*  should(Condition) / shouldBe(Condition) / shouldHave(Condition)
*  shouldNot(Condition) / shouldNotBe(Condition) / shouldNotHave(Condition)

Рекомендуется выбирать такой метод, чтобы строка кода легко воспринималась, как обычная фраза, например:

```java
$("input").should(exist);  
$("input").shouldBe(visible);
$("input").shouldHave(exactText("Some text"));
```

Проверки играют роль явных ожиданий (explicit waits) в Selenide. Они **ждут** до удовлетворения условия (visible, enabled, text("some text")) пока не истечет таймаут (значение `Configuration.timeout`, которое установлено по умолчанию в 4000 миллисекунд).

Можно использовать проверки явно - с целью ожиданий нужного состояния у элементов перед действием, например: `$("#submit").shouldBe(enabled).click();`

Есть версия явных ожиданий с указанием таймаута:

*  should(Condition, Duration.ofMillis(25_000))
*  shouldBe(Condition, Duration.ofSeconds(25))

<h4>
Методы-действия над элементом
</h4>

*  click()
*  doubleClick()
*  contextClick()
*  hover()
*  setValue(String) / val(String)
*  pressEnter()
*  pressEscape()
*  pressTab()
*  selectRadio(String value)
*  selectOption(String)
*  append(String)
*  dragAndDropTo(String)
*  ...

Большинство действий также возвращают обьект SelenideElement, позволяя использовать цепочки вызовов, например: `$("#edit").setValue("text").pressEnter();`.

<h4>
Методы получения статусов элементов и значений их атрибутов
</h4>

*  getValue() / val()
*  data()
*  attr(String)
*  text()        // возвращает "видимый текст на странице"
*  innerText()   // возвращает "текст элемента в DOM"
*  getSelectedOption()
*  getSelectedText()
*  getSelectedValue()
*  isDisplayed() //возвращает false, если элемент либо невидимый, либо его нет в DOM
*  exists() //возвращает true, если элемент есть в DOM, иначе - false 

<h4>
Другие полезные команды
</h4>

*  uploadFromClasspath(String fileName)
*  download()
*  toWebElement()
*  uploadFile(File...)

Более подробная информация доступна в [Selenide gitbook](https://selenide.gitbooks.io/user-guide/content/ru/selenide-api/selenide-element.html)

<h3>com.codeborne.selenide.Condition
  <a target="_blank" href="https://github.com/selenide/selenide/blob/master/src/main/java/com/codeborne/selenide/Condition.java">[src]</a>
  <a target="_blank" href="https://selenide.org/javadoc/current/com/codeborne/selenide/Condition.html">[javadoc]</a>
</h3>

Условия используются в конструкциях should / shouldNot. Мы рекомендуем статически импортировать используемые условия, чтобы получить все преимущества читаемого кода.

*   visible / appear   // e.g. $("input").shouldBe(visible)
*   present / exist    // условия присутствия элемента в DOM 
*   hidden / disappear // not(visible)
*   readonly           // e.g. $("input").shouldBe(readonly)
*   name               // e.g. $("input").shouldHave(name("fname"))
*   value              // e.g. $("input").shouldHave(value("John"))
*   type               // e.g. $("#input").shouldHave(type("checkbox"))
*   id                 // e.g. $("#input").shouldHave(id("myForm"))
*   empty              // e.g. $("h2").shouldBe(empty)
*   attribute(name)    // e.g. $("#input").shouldHave(attribute("required"))
*   attribute(name, value) // e.g. $("#list li").shouldHave(attribute("class", "active checked"))
*   cssClass(String)       // e.g. $("#list li").shouldHave(cssClass("checked"))
*   focused
*   enabled
*   disabled
*   selected
*   matchText(String regex)
*   text(String substring)
*   exactText(String wholeText)
*   textCaseSensitive(String substring)
*   exactTextCaseSensitive(String wholeText)

Более подробная информация доступна в [Selenide gitbook](https://selenide.gitbooks.io/user-guide/content/ru/selenide-api/condition.html)

<h3>com.codeborne.selenide.Selectors
  <a target="_blank" href="https://github.com/selenide/selenide/blob/master/src/main/java/com/codeborne/selenide/Selectors.java">[src]</a>
  <a target="_blank" href="https://selenide.org/javadoc/current/com/codeborne/selenide/Selectors.html">[javadoc]</a>
</h3>

Класс содержит некоторые `By` селекторы для поиска элементов по тексту или атрибуту (которых не хватает в стандартном Selenium WebDriver API):

*   <a href="https://selenide.org/javadoc/current/com/codeborne/selenide/Selectors.html#byText(java.lang.String)">byText</a>     - поиск элемента по точному тексту
*   <a href="https://selenide.org/javadoc/current/com/codeborne/selenide/Selectors.html#withText(java.lang.String)">withText</a>   - поиск элемента по тексту (подстроке)
*   <a href="https://selenide.org/javadoc/current/com/codeborne/selenide/Selectors.html#by(java.lang.String, java.lang.String)">by</a>    - поиск элемента по атрибуту
*   <a href="https://selenide.org/javadoc/current/com/codeborne/selenide/Selectors.html#byTitle(java.lang.String)">byTitle</a>   - поиск по атрибуту "title"
*   <a href="https://selenide.org/javadoc/current/com/codeborne/selenide/Selectors.html#byValue(java.lang.String)">byValue</a>   - поиск по атрибуту "value"

```java
// Пример использования:
$(byText("Login")).shouldBe(visible));
$(By.xpath("//div[text()='Login']")).shouldBe(visible); // можно использовать любой org.openqa.selenium.By.* селектор
$(byXpath("//div[text()='Login']")).shouldBe(visible); // или его аналог из Selectors
```

Более подробная информация доступна в [Selenide gitbook](https://selenide.gitbooks.io/user-guide/content/ru/selenide-api/selectors.html)


<h3>com.codeborne.selenide.ElementsCollection
  <a target="_blank" href="https://github.com/selenide/selenide/blob/master/src/main/java/com/codeborne/selenide/ElementsCollection.java">[src]</a>
  <a target="_blank" href="https://selenide.org/javadoc/current/com/codeborne/selenide/ElementsCollection.html">[javadoc]</a>
</h3>

Класс ElementsCollection - описывает коллекцию элементов на странице, которую обычно можно получить с помощью вызова `$$`. Класс предоставляет набор весьма полезных методов.

<h4>
Методы-проверки - assertions
</h4>

*   <a href="https://selenide.org/javadoc/current/com/codeborne/selenide/ElementsCollection.html#shouldBe(com.codeborne.selenide.CollectionCondition)">shouldBe</a>     - e.g. `$$(".errors").shouldBe(empty)`
*   <a href="https://selenide.org/javadoc/current/com/codeborne/selenide/ElementsCollection.html#shouldHave(com.codeborne.selenide.CollectionCondition)">shouldHave</a>     - e.g. `$$("#mytable tbody tr").shouldHave(size(2))`

Проверки играют роль явных ожиданий (explicit waits). Они **ждут** до удовлетворения условия (size, empty) пока не истечет таймаут (значение `Configuration.collectionsTimeout`, которое установлено по умолчанию в 6000 миллисекунд).

<h4>
Методы получения статусов и значений коллекции элементов
</h4>

*   size()
*   isEmpty()
*   getTexts()  // возвращает массив видимых текстов, e.g. для элементов `<li>a</li><li hidden>b</li><li>c</li>` вернет массив вида ["a", "", "c"]

<h4>
Методы выборки внутренних элементов
</h4>

*   <a href="https://selenide.org/javadoc/current/com/codeborne/selenide/ElementsCollection.html#filterBy(com.codeborne.selenide.Condition)">filterBy(Condition)</a>  возвращает коллекцию (как ElementsCollection) из только тех элементов оригинальной коллекции, которые удовлетворяют условию - например `$$("#multirowTable tr").filterBy(text("Norris"))`
*   <a href="https://selenide.org/javadoc/current/com/codeborne/selenide/ElementsCollection.html#excludeWith(com.codeborne.selenide.Condition)">excludeWith(Condition)</a>     - например `$$("#multirowTable tr").excludeWith(text("Chuck"))`
*   <a href="https://selenide.org/javadoc/current/com/codeborne/selenide/ElementsCollection.html#get(int)">get(int)</a> - возвращает n-ый элемент как `SelenideElement`
*   <a href="https://selenide.org/javadoc/current/com/codeborne/selenide/ElementsCollection.html#findBy(com.codeborne.selenide.Condition)">findBy(Condition)</a> - возвращает элемент коллекции как `SelenideElement` который удовлетворяет условию

Более подробная информация доступна в [Selenide gitbook](https://selenide.gitbooks.io/user-guide/content/ru/selenide-api/elements-collection.html)

<h3>com.codeborne.selenide.CollectionCondition
  <a target="_blank" href="https://github.com/selenide/selenide/blob/master/src/main/java/com/codeborne/selenide/CollectionCondition.java">[src]</a>
  <a target="_blank" href="https://selenide.org/javadoc/current/com/codeborne/selenide/CollectionCondition.html">[javadoc]</a>
</h3>

Условия используются в конструкциях shouldBe / shouldHave для коллекции - объекта ElementsCollection. Рекомендуется статически импортировать используемые условия, чтобы получить все преимущества читаемого кода.

*   empty   // e.g. $$("#list li").shouldBe(empty)
*   size(int)    // e.g. $$("#list li").shouldHave(size(10))
*   sizeGreaterThan(int)
*   sizeGreaterThanOrEqual(int)
*   sizeLessThan(int)
*   sizeLessThanOrEqual(int)
*   sizeNotEqual(int)
*   texts(String... substrings)
*   exactTexts(String... wholeTexts)

Более подробная информация доступна в [Selenide gitbook](https://selenide.gitbooks.io/user-guide/content/ru/selenide-api/collection-condition.html)


<h3>com.codeborne.selenide.WebDriverRunner
  <a target="_blank" href="https://github.com/selenide/selenide/blob/master/statics/src/main/java/com/codeborne/selenide/WebDriverRunner.java">[src]</a>
  <a target="_blank" href="https://selenide.org/javadoc/current/com/codeborne/selenide/WebDriverRunner.html">[javadoc]</a>
</h3>

Этот класс содержит некоторые функции, относящиеся к браузеру:

*  isChrome()
*  isFirefox()
*  isHeadless()
*  url() - возвращает текущий url
*  source() - возвращает исходный HTML текущего окна
*  getWebDriver() - возвращает обьект WebDriver (созданный Selenide автоматически или установленный пользователем), таким образом отдавая "чистый" интерфейс к Selenium, если нужно
*  setWebDriver(WebDriver) - указывает Selenide использовать драйвер, созданный пользователем. С этого момента пользователь сам ответственен за закрытие драйвера.


Более подробная информация доступна в [Selenide gitbook](https://selenide.gitbooks.io/user-guide/content/ru/selenide-api/webdriver-runner.html)

<h3>com.codeborne.selenide.Configuration
  <a target="_blank" href="https://github.com/selenide/selenide/blob/master/statics/src/main/java/com/codeborne/selenide/Configuration.java">[src]</a>
  <a target="_blank" href="https://selenide.org/javadoc/current/com/codeborne/selenide/Configuration.html">[javadoc]</a>
</h3>

Этот класс содержит конфигурации для запуска тестов, например:

*  timeout - время ожидания в миллисекундах, которое используется в явных (should/shouldNot) и неявных ожиданиях для SelenideElement, может быть изменено во время исполнения, e.g. `Configuration.timeout = 6000;`
*  browser (e.g. `"chrome"`, `"ie"`, `"firefox"`)
*  baseUrl
*  reportsFolder
* ...

Также можно передать конфигурационные параметры как system properties для использования в CI (continuous integration) задачах (например `-Dselenide.baseUrl=http://staging-server.com/start`)

Более подробная информация доступна в [Selenide gitbook](https://selenide.gitbooks.io/user-guide/content/ru/selenide-api/configuration.html)

Оставайся на связи!
