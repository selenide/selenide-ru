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

Обычно это не нужно, так как **Selenide автоматически делает скриншоты** при падении тестов. Это очень удобно для анализа ошибки.

По умолчанию Selenide складывает скриншоты в папку `build/reports/tests`.


### Можно ли сказать Selenide сохранять скриншоты в другую папку?

Да. Для этого используйте ключик `-Dselenide.reportsFolder=test-result/reports` и укажите путь к нужной папке.
Для версии 4 и ниже используйте `-Dselenide.reports=test-result/reports`
Альтернативный вариант - установить путь к скриншотам прямо в своём коде:

```java
Configuration.reportsFolder = "test-result/reports";
```


## Поддержка JUnit и TestNG

Для пользователей JUnit и TestNG мы сделали дополнительную поддержку.  

Повторюсь: в большинстве случаев вам не надо ничего делать, т.к. Селенид сам делает скриншоты в случае падения 
проверок типа `$.shouldBe(..)`. 

А вот если вы хотите делать скриншоты
1. и в случае успешных тестов, или
2. при падении не-селенидовских проверок (какой-нибудь `assertEquals` или `assertThat`),

то придётся добавить пару строк. 

### Для JUnit 4:

Чтобы автоматически делать скриншот после каждого упавшего теста:

```java
import com.codeborne.selenide.junit.ScreenShooter;

public class MyTest {
  @Rule
  public ScreenShooter makeScreenshotOnFailure = ScreenShooter.failedTests();

  // ...
}
```

Чтобы автоматически делать скриншот после вообще каждого теста (в т.ч. зелёного):

```java
@Rule
public ScreenShooter makeScreenshotOnFailure = ScreenShooter.failedTests().succeededTests();
```

### Для TestNG:

```java
import com.codeborne.selenide.testng.ScreenShooter;

@Listeners({ ScreenShooter.class})
public class MyTest {
  // ...
}
```

Чтобы делать скриншоты после зелёных тестов, нужно вызвать такую команду перед запуском тестов:
```java
ScreenShooter.captureSuccessfulTests = true;
```

### Для JUnit 5:

#### Как использовать в Java:

```java
  @ExtendWith({ScreenShooterExtension.class})
  public class MyTest {
    // ...
  }
```

Как использовать в Java (с тонкими настройками):
```java
  public class MyTest {
    @RegisterExtension
    static ScreenShooterExtension screenshotEmAll = new ScreenShooterExtension(true).to("target/screenshots");
  }
```

#### Как использовать в Kotlin:
```kotlin
  @ExtendWith(ScreenShooterExtension::class)
  class MyTest {
    // ...
  }
``` 
 
Как использовать в Kotlin (с тонкими настройками):

```kotlin
  class MyTest {
    companion object {
      @JvmField
      @RegisterExtension
      val screenshotEmAll: ScreenShooterExtension = ScreenShooterExtension(true).to("target/screenshots");
    }
  }
```

### В любом месте
Вы также можете сделать скриншот в любом месте теста одной строчкой:

```java
import static com.codeborne.selenide.Selenide.screenshot;

String pngFileName = screenshot("my_file_name");
```

При этом Selenide создаст два файла: `my_file_name.png` и `my_file_name.html`

Позже появился альтернативный метод, возвращающий скриншот в желаемом формате (т.е. `BASE64`, `BYTES` или `FILE`):

```java
String screenshotAsBase64 = Selenide.screenshot(OutputType.BASE64);
byte[] decoded = Base64.getDecoder().decode(screenshotAsBase64);
```

