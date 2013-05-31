---
layout: page
title : С чего начать?
header : С чего начать?
group: navigation
---
{% include JB/setup %}

Начать использовать Selenide очень просто. Не нужно читать тонны документации. Не нужно покупать тренинг.

Просто добавь в проект <a href="http://search.maven.org/remotecontent?filepath=com/codeborne/selenide/2.2/selenide-2.2.jar">selenide.jar</a> и начинай писать тест.

### Для пользователей Maven:

Добавь в файл pom.xml:

```xml
<dependency>
    <groupId>com.codeborne</groupId>
    <artifactId>selenide</artifactId>
    <version>2.2</version>
</dependency>
```

### Для пользователей Ivy:

Добавь в файл ivy.xml:

```xml
<ivy-module>
  <dependencies>
    <dependency org="com.codeborne" name="selenide" rev="2.2"/>
  </dependencies>
</ivy-module>
```

### Для пользователей Gradle:

Добавь в файл build.gradle:

```groovy
dependencies {
  testCompile 'com.codeborne:selenide:2.2'
}
```

## Начинай писать тест

Вот так просто! Больше никакой волокиты, начинай писать тест.

Импортируй нужный класс:

```java
import static com.codeborne.selenide.Selenide.*
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

Есть небольшой эталонный open-source проект, в котором используется Selenide: [игра Виселица](https://github.com/asolntsev/hangman).

А также мы создали проект [Selenide examples](https://github.com/codeborne/selenide_examples), где мы храним примеры использования
Selenide для тестирования [Gmail](https://github.com/codeborne/selenide_examples/tree/master/gmail/test/org/selenide/examples/gmail),
[Github](https://github.com/codeborne/selenide_examples/tree/master/github/test/org/selenide/examples/github)
и других классических примеров.

### Поделитесь с нами своими примерами!

Если у вас есть свои примеры использования Selenide, смело присылайте их нам!
Нам было бы очень интересно на них взглянуть.
