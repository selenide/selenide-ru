---
layout: post
title: "Заметки об использовании Selenide"
description: ""
category:
header-text: "IE, один простой способ добавить скриншот Selenide в TestNG HTML репорт, один способ работать с кастомизированным Bootstrap HTML элементом"
tags: []
---
{% include JB/setup %}

Привет!

Меня зовут Сергей Шимкив, и я хочу поделиться с вами своими заметками об использовании Selenide/Selenium. <br/> <br/>

### Заметки об IE

IE 11 x32/x64. В некоторых случаях после действий с HTML элементами (например, `click()`) вы можете получить ошибку. <br />
Проблема в использовании синтетических событиях. Решение - использовать нативные события для IE:
 
 ```java
   capabilities.setCapability("nativeEvents", "true");
 ```
 
 См. https://code.google.com/p/selenium/wiki/InternetExplorerDriver

<br/>

### Один способ добавить скриншоты Selenide в TestNG HTML репорт

Иногда было бы неплохо добавить скриншоты Selenide от упавших тестов в ваш TestNG HTML отчёт.

К примеру:
Вы написали два теста (Test1 и Test2), которые должны быть связаны (Test2 зависит от результатов Test1).
Но вы знаете, что Test1 точно упадёт из-за ошибки приложения.

<br/>

Поэтому вы пишете нечто подобное:

 ```java
   @Test(...)
   public void Test1() {
    ...
    try {
      // Кусок теста с известным багом
    } catch(...) {
      // Некоторые действия
    } finally {
      // Действия, чтобы обеспечить корректные условия для запуска Test2
    }
   }
 ```

Допустим, вы используете свой тест листенер, который наследует `TestListenerAdapter`.
И вы переопределили метод `onTestFailure(ITestResult result)`, чтобы собирать дополнительную информацию в HTML отчёт - например, ваши собственные скриншоты.
В этом случае может статься, что ваш код будет собирать неправильную информацию о скриншотах, т.к. блок `finally` может быть выполнен ДО того, как Selenide сделает скриншот.

<br/>
Какой же выход?
<br/>
<br/>

Просто помните, что имя файла скриншота, который делает Selenide (после любой ошибки), доступно из `result.getThrowable().getMessage();`
<br/> 
<br/> 

### Один способ работать с кастомизированными Bootstrap HTML элементами

Тесты резко усложняются, когда приходится иметь дело с нетривиальными контролами.

К примеру, бутстраповский выпадающий список (dropdown) реализован как набор HTML элементов. 
Обычно это выглядит как-то так:

 ```html
  <div class="dropdown">
    <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown">
      Dropdown
      <span class="caret"></span>
    </button>
    <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">
      <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Действие</a></li>
      <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Другое действие</a></li>
      <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Что-то ещё</a></li>
      <li role="presentation" class="divider"></li>
      <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Отдельная ссылка</a></li>
    </ul>
  </div>
 ```

Проблема в том, что элемент `<ul>` изначально невидимый. 
Selenium (а значит, и Selenide) его не видит и поэтому не может кликнуть.
Чтобы выбрать элемент выпадающего списка, вам нужно:

 ```java
   SelenideElement parentDiv = $(".dropdown");
   
   // Найти элемент `<button>` и `click()` его
   parentDiv.find("button").scrollTo().click();
   
   // Теперь можете найти нужный элемент выпадаюшего списка по тексту
   parentDiv.find(".dropdown-menu").find(withText("Действие")).parent().click();
 ```

<br/>
В следующем посте я поделюсь опытом автоматической инсталляции а тестовую среду (основанной на Grid2).
<br/><br />
Спасибо авторам Selenide за отличный тул ;)
<br />
<br />

### Сергей Шимкив

<br />
