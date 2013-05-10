---
layout: page
title:
tagline: Лаконичные UI тесты на Java
---
{% include JB/setup %}

<h4>{{ site.tagline }}</h4>

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

## Что даёт Selenide?
Selenide - это обёртка вокруг <a href="http://seleniumhq.org/projects/webdriver/">Selenium WebDriver</a>, дающая:

+  Изящный API для тестов
+  Автоматическое управление жизненным циклом бразера (открыть/закрыть/рестартануть)
+  Селекторы для элементов в стиле jQuery
+  Поддержка Ajax

Вот так Selenide позволяет писать лаконичные тесты. Вам больше не нужно заботиться о
том, как открыть и закрыть браузер, не надо беспокоиться о таймаутах, не надо писать монструозный код для
ожидания наступления событий - **сконцентрируйтесь на бизнес-логике**!

## С чего начать?
Просто добавьте <a href="http://search.maven.org/remotecontent?filepath=com/codeborne/selenide/2.1/selenide-2.1.jar">selenide.jar</a> в ваш проект. Для пользователей Maven, Ivy, Gradle и т.п.:
```xml
<dependency org="com.codeborne" name="selenide" revision="2.1"/>
```

Дальше смотри [Quick Start guide]({{ BASE_PATH }}/quick-start.html), там немножко больше деталей.
