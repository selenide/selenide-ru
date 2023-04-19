---
layout: page
title :
header : Отчёты
group: navigation
cssClass: docs
header-text: >
  <h4>Документация</h4>
  
  Отчёты
---
{% include JB/setup %}

{% include documentation-menu.md %}

<br>

#### [&gt; YAGNI](#yagni)  
#### [&gt; Text report](#text-report)  
#### [&gt; Allure report](#allure-report)  
{: .blogpost-menu}

<a name="yagni"></a>
## YAGNI

Для начала хочу предупредить, что возможно, вам вовсем не нужны никакие отчёты.  

И Maven, и Gradle генерируют достаточно хороший отчёт о прохождении тестов, в который включены все ошибки.  
При падении теста Селенид генерирует подробное сообщение об ошибке (включая [скриншот](/documentation/screenshots.html) и html страницы). 
Как правило, этого достаточно, чтобы понять, почему тест упал:

```
Element should be hidden {#gameWin}
Element: '<img class="gameOver" id="gameWin" src="img/thumbs-up.jpeg"></img>'

Screenshot: file:/.../hangman/build/reports/tests/1510751914648.0.png
Page source: file:/.../hangman/build/reports/tests/1510751914648.0.html
Timeout: 4 s.
```
  
<br/>

Но если вы всё-таки очень хотите отчёты, можем предложить вам два варианта: "Text report" и "Allure report".  

<a name="text-report"></a>
## 1. Text report

Это встроенный в Селенид отчёт, который в простом текстовом виде показывает все шаги, сделанные в ходе теста:

```
+----------------------+---------------------------------------------+--------+----------+
|Element               |Subject                                      |Status  |ms.       |
+----------------------+---------------------------------------------+--------+----------+
|open                  |http://localhost:2070/                       |PASSED  |4669      |
|open                  |http://localhost:2070/fakeLogin?username=bob |PASSED  |1324      |
|By.linkText: Quicky   |click()                                      |PASSED  |793       |
|#btn-message-reply    |click()                                      |PASSED  |1002      |
|By.name: message.text |should be(focused)                           |PASSED  |57        |
|By.name: message.text |should have(text 'long thread')              |PASSED  |47        |
|By.name: message.text |set value(Hello world!)                      |PASSED  |69        |
|#send-button          |click()                                      |PASSED  |1051      |
|.alert-success        |should be(visible)                           |PASSED  |71        |
+--------------------+-----------------------------------------------+--------+----------+
```

Выглядит просто, но он содержит всю необходимую информацию.  
Чтобы включить такой отчёт, нужно 
1. [Настроить в своём проекте slf4j](https://github.com/selenide/selenide/wiki/slf4j) (де-факто стандартный инструмент логирования в Java).
2. Добавить экстенш/рул/листенер, как показано ниже. 

#### Для JUnit 5:

```java
  import com.codeborne.selenide.junit5.TextReportExtension;

  @ExtendWith({TextReportExtension.class})
  public class MyTest {
    // ...
  }
```

#### Для JUnit 4:

```java
import com.codeborne.selenide.junit.TextReport;

public class MyTest {
  @Rule
  public TextReport textReport = new TextReport();

  // ...
}
```

#### Для TestNG:

```java
import com.codeborne.selenide.testng.TextReport;

@Listeners({ TextReport.class})
public class MyTest {
  // ...
}
```


<a name="allure-report"></a>
## 2. Allure report

Часто автоматизаторы зачем-то хотят генерировать "красивые" отчёты. Говорят, для менеджмента. Хотя я уверен, что 
это лишнее, и менеджмент эти отчёты не читает.  

Но если вы всё-таки очень хотите "красивые" отчёты, можете настроить Allure. Это популярная бесплатная библиотека от 
компании [Qameta Software](https://qameta.io/), которая имеет встроенную интеграцию с Селенидом. И да, она генерирует действительно 
красивые отчёты.

Для этого вам нужно:
1. Добавить в проект зависимость `io.qameta.allure:allure-selenide:2.21.0` (или выше).
2. Добавить одну строчку в начале тестов:

```java
    @BeforeAll
    static void setupAllureReports() {
      SelenideLogger.addListener("AllureSelenide", new AllureSelenide());

       // либо для тонкой настройки:
      SelenideLogger.addListener("AllureSelenide", new AllureSelenide()
           .screenshots(false)
           .savePageSource(true)
      );
    }
```

См. пример проекта [Selenide+Allure](https://github.com/selenide-examples/selenide-allure-junit)


<br/>
<br/>

P.S. Умоляю, только не берите BDD ради красивых отчётов! 
[BDD вообще не для этого](https://www.youtube.com/watch?v=JnoZbbYZeeI&ab_channel=MikalaiAlimenkou). 
Только огребёте новых проблем, а свою не решите. 

<br/>
