---
layout: page
title :
header : С чего начать?
group: navigation
---
{% include JB/setup %}

<div class="short howto">
<div class="wrapper-color-content">

<h3>С чего начать?</h3>
<h4>Начать использовать Selenide очень просто. Не нужно читать тонны документации. Не нужно покупать тренинг.</h4>

Просто добавь в проект <a href="http://search.maven.org/remotecontent?filepath=com/codeborne/selenide/2.4/selenide-2.4.jar">selenide.jar</a> и начинай писать тест.<br>
Ниже чуть больше деталей.</div></div>

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

### Для пользователей Maven:

Добавь в файл pom.xml:

```xml
<dependency>
    <groupId>com.codeborne</groupId>
    <artifactId>selenide</artifactId>
    <version>2.4</version>
</dependency>
```

### Для пользователей Ivy:

Добавь в файл ivy.xml:

```xml
<ivy-module>
  <dependencies>
    <dependency org="com.codeborne" name="selenide" rev="2.4"/>
  </dependencies>
</ivy-module>
```

### Для пользователей Gradle:

Добавь в файл build.gradle:

```groovy
dependencies {
  testCompile 'com.codeborne:selenide:2.4'
}
```

## Начинай писать тест

Вот так просто! Больше никакой волокиты, начинай писать тест.

Импортируй нужный класс:

```java
import static com.codeborne.selenide.Selenide.*
import static com.codeborne.selenide.Condition.*
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

Есть небольшой эталонный open-source проект, в котором используется Selenide: [игра Виселица](https://github.com/asolntsev/hangman/blob/master/test/uitest/selenide/HangmanSpec.java).

А также мы создали проект [Selenide examples](https://github.com/codeborne/selenide_examples), где мы храним примеры использования
Selenide для тестирования [Gmail](https://github.com/codeborne/selenide_examples/tree/master/gmail/test/org/selenide/examples/gmail),
[Github](https://github.com/codeborne/selenide_examples/tree/master/github/test/org/selenide/examples/github)
и других классических примеров.

### Поделитесь с нами своими примерами!

Если у вас есть свои примеры использования Selenide, смело присылайте их нам!
Нам было бы очень интересно на них взглянуть.
