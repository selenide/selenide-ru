---
layout: post
title: "Actions"
description: ""
category:
header-text: "Selenide Advent Calendar<br/>День 12"
tags: []
---
{% include JB/setup %}

Привет!

В сегодняшнем выпуске рождественского календара мы рассмотрим, как можно использовать "действия" (Actions) в Selenide. 

Иногда при написании автотестов мы сталкиваемся со странными проблемами. Уверен на 100%, каждый из нас испытывал или 
будет испытывать необычные проблемы, которые блокируют нашу работу. 
Например, у нас часто не получается кликнуть на какой-то элемент, и стандартная селениумовская/селенидовская команда типа

```java
  element.click();
```

не работает. Причин, по которым клик может не срабатывать - множество. Но мы не можем сдаться просто так, мы должны 
найти какое-то решение. В Selenium для таких случаев есть класс `Actions`, который позволяет выполнить клик иначе:

```java
  WebElement element = <Some selector>;
  Actions actions = new Actions(driver);
  actions.moveToElement(element);
  actions.click();
  actions.build().perform();
```

Этот вариант иногда срабатывает там, где обычный клик бессилен.  

#### Но как сделать это в Selenide?  

Оказывается, в Selenide это ещё проще, чем в Selenium (как, собственно, и всё в Selenide :)).    
В Selenide тоже есть `Actions`:

```java
  SelenideElement element = $(<some selector>);
  actions().moveToElement(element).click(element).perform();
```

Здесь `actions()` - это один из тех методов, которые вы можете магически подключить волшебным импортом:

```java
  import static com.codeborne.selenide.Selenide.*;
```

Заметить, чтобы использовать `actions()`, не нужен wedriver! 
 
##### Чумачечий drag and drop

Если вы читали документацию, вы знаете, что в Selenide по умолчанию есть два типа операций "drag and drop":

1. `dragAndDropTo​(java.lang.String targetCssSelector);`
2. `dragAndDropTo​(org.openqa.selenium.WebElement target);` 

Первый метод перетаскивает элемент в цель по CSS локатору. Второй - в другой WebElement. 
 
Но что, если мы не знаем точно, в какой элемент нужно перетащить?  
Допустим, у нас есть просто пустая страница, и мы хотим перетащить несколько объектов в разные места на этой странице.  
И тут снова на помощь приходят `Actions`. В Selenium мы бы сделали это примерно так:

```java
  WebElement element = driver.findElement(By.some);
  Actions actions = new Actions(driver);
  actions.dragAndDropBy(element, xOffset, yOffset).perform();
```	

Где `xOffset` и `yOffset` - сдвиг по горизонтали и вертикали.

В Selenide это выглядит чуть короче:

```java
  SelenideElement element = <Some selector>;
  actions().dragAndDropBy(element, xOffset, yOffset).perform();
```

Таким образом мы можем перетащить элемент в любую точку, даже не зная локатора цели. 

## Что дальше?
 
Конечно же, это только пара примеров использования `actions()` в Selenide, и вы можете экспериментировать и находить другие варианты. 

Наслаждайтесь `actions()`!

Maciej Grymuza (figrym@gmail.com)

