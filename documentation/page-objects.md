---
layout: page
title :
header : Page Objects
group: navigation
cssClass: docs
header-text: >
  <h4>Документация</h4>
  
  Page Objects
---
{% include JB/setup %}

<div class="left-menu">
  <div>✓ <a href="/documentation.html">API</a></div>
  <div>✓ <a href="/documentation/page-objects.html">Page Objects</a></div>
</div>

## Page Objects - это просто!

В мире тестирования очень популярен шаблон [Page Objects](https://code.google.com/p/selenium/wiki/PageFactory). 
Суть его в том, что для каждой страницы тестируемого приложения создаётся отдельный объект, методы которого инкапсулируют логику работы с отдельными элементами.
Считается, что Page Object позволяет избежать дублирования локаторов в тестах. 

А Selenide позволяет писать более короткие и читаемые Page Objects. 

Вот как выглядит Page Object с Selenide. 

```java
public class GoogleSearchPage {
  public GoogleResultsPage search(String query) {
    $(By.name("q")).setValue(query).pressEnter();
    return page(GoogleResultsPage.class);
  }
}

public class GoogleResultsPage {
  public ElementsCollection results() {
    return $$("#ires li.g");
  }
}
```

Как видите, никаких ```PageFactory```, никаких ```initElements``` и прочего мусора. Ваш Page Object содержит 
только вашу логику. 

А как же выглядит тест с использованием этих Page Objects? А вот так:

```java
  GoogleSearchPage searchPage = open("/login", GoogleSearchPage.class);
  GoogleResultsPage resultsPage = searchPage.search("selenide");
  resultsPage.results().shouldHave(size(10));
  resultsPage.results().get(0).shouldHave(text("Selenide: Concise UI Tests in Java"));
```

Кто скажет, что это не просто?

## Классический вариант Page Object

Многим полюбился шаблон написания тестов, согласно которому на каждый веб-элемент создаётся поле в page object.
У этого подхода есть недостатки, но Selenide позволяет делать и так:

```java
public class GoogleSearchPage {
  @FindBy(how = How.NAME, using = "q")
  private SelenideElement searchBox;
  
  public GoogleResultsPage search(String query) {
    searchBox.setValue(query).pressEnter();
    return page(GoogleResultsPage.class);
  }
}

public class GoogleResultsPage {
  @FindBy(how = How.CSS, using = "#ires li.g")
  public ElementsCollection results;
}
```

## И напоследок про ООП
Хочу напомнить, что изначальный смысл Page Objects состоял в том, чтобы инкапсулировать (то есть прятать!)
логику работы с элементами. Тесты не должны ничего знать о веб-элементах, не должны оперировать напрямую с 
XPath или другими селекторами. Тесты должны использовать публичные методы пэдж объекта. 

То есть если уж вы объявляете поля для элементов, то пусть они будут приватными, а все операции с ними пусть осуществляются через публичные методы.

Иначе зачем весь этот ООП?
