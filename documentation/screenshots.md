---
layout: page
title :
header : Скриншоты
group: navigation
cssClass: docs
header-text: >
  <h4>Документация</h4>
  
  Скриншоты
---
{% include JB/setup %}

{% include documentation-menu.md %}

## Как сделать скриншот в тесте?

Обычно это не нужно, так как Selenide сама автоматически делает скриншоты при падении тестов. Это очень удобно для анализа ошибки.

Для пользователей JUnit и TestNG мы сделали дополнительную поддержку.

### Для JUnit:

Чтобы автоматически делать скриншот после каждого упавшего теста:

```java
import com.codeborne.selenide.junit.ScreenShooter;

@Rule
public ScreenShooter makeScreenshotOnFailure = ScreenShooter.failedTests();
```

В общем-то это рудимент, Selenide уже давно делает это автоматически. 

А вот чтобы автоматически делать скриншот после вообще каждого теста (в т.ч. зелёного), можно использовать следующую команду:

```java
@Rule
public ScreenShooter makeScreenshotOnFailure = ScreenShooter.failedTests().succeededTests();
```

### Для TestNG:

```java
import com.codeborne.selenide.testng.ScreenShooter;

@Listeners({ ScreenShooter.class})
```

Чтобы делать скриншоты после зелёных тестов, нужно вызвать такую команду перед запуском тестов:
```java
ScreenShooter.captureSuccessfulTests = true;
```

### В любом месте
Вы также можете сделать скриншот в любом месте теста одной строчкой:

```java
import static com.codeborne.selenide.Selenide.screenshot;

screenshot("my_file_name");
```

При этом Selenide создаст два файла: `my_file_name.png` и `my_file_name.html`
