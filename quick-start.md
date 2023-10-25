---
layout: page
title : С чего начать?
header : С чего начать?
group: navigation
cssClass: howto
header-text: >
  <h4>Начать использовать Selenide очень просто. Не нужно читать тонны документации. Не нужно покупать тренинг.</h4>

  Просто добавь в проект <a href="https://search.maven.org/remotecontent?filepath=com/codeborne/selenide/7.0.0/selenide-7.0.0.jar">selenide.jar</a> (и его зависимости) и начинай писать тест.<br>

---
{% include JB/setup %}
<a class="video right" href="https://vimeo.com/106867878">
  Как написать UI тест за 10 минут
</a>

### Для пользователей Maven:

Добавь в файл pom.xml:

```xml
<dependency>
    <groupId>com.codeborne</groupId>
    <artifactId>selenide</artifactId>
    <version>{{site.SELENIDE_VERSION}}</version>
    <scope>test</scope>
</dependency>
```

### Для пользователей Gradle:

Добавь в файл build.gradle:

```groovy
dependencies {
  testImplementation 'com.codeborne:selenide:{{site.SELENIDE_VERSION}}'
}
```

## Начинай писать тест

Вот так просто! Больше никакой волокиты, начинай писать тест.

Импортируй нужный класс:

```java
import static com.codeborne.selenide.Selenide.*;
import static com.codeborne.selenide.Condition.*;
```

и пиши тест:

```java
@Test
public void userCanLoginByUsername() {
  open("/login");
  $(By.name("user.name")).setValue("johny");
  $("#submit").click();
  $(".loading_progress").should(disappear); // Само подождёт, пока элемент исчезнет
  $("#username").shouldHave(text("Hello, Johny!")); // Само подождёт, пока у элемента появится нужный текст
}
```

И готово!

Можно использовать любой фреймворк по вкусу: JUnit, TestNG, Cucumber, ScalaTest, JBehave - что душа пожелает.

Запускать как обычные юнит-тесты. Можно из IDE, можно ANT скриптом, можно "mvn test".

### Хотите увидеть работающий пример?

Мы создали группу [Selenide examples](https://github.com/selenide-examples) на гитхабе, в которой будут различные примеры использования Selenide:

* для тестирования [почтовика Gmail](https://github.com/selenide-examples/gmail/tree/master/test/org/selenide/examples/gmail),
* для тестирования [поиска Google](https://github.com/selenide-examples/google/blob/master/test/org/selenide/examples/google/selenide_page_object/GoogleTest.java).
* для тестирования настоящего [интернет-банка](https://github.com/selenide-examples/selenide-allure-junit/blob/master/src/test/java/org/selenide/examples/InternetBankTest.java)
* [игра Виселица](https://github.com/selenide-examples/hangman/blob/main/test/uitest/selenide/HangmanSpec.java) - эталонный open-source проект, в котором используется Selenide

и т.д.

### Поделитесь с нами своими примерами!

Если у вас есть свои примеры использования Selenide, смело присылайте их нам!
Нам было бы очень интересно на них взглянуть.

### Видеоурок
<iframe src="//player.vimeo.com/video/106867878" width="800" height="450" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> <p><a href="https://vimeo.com/106867878">Как написать UI тест за 10 минут</a> from <a href="https://vimeo.com/user20427140">Selenide</a> on <a href="https://vimeo.com">Vimeo</a>.</p> <p>Туториал по Selenide</p>
