---
layout: post
title: "Простота кода"
description: ""
category:
header-text: "есть лютая благодать"
tags: []
---
{% include JB/setup %}

Давайте поговорим о простоте кода.
Наверное, все согласны с тем, что простой код - хороший код.
Только все понимают "простоту" по-разному.

Я хочу показать пример, всплывший в комментариях к нашему сайту, чтобы вы могли сравнить, что такое сложно, а что такое просто. 

### Задача
Есть некий список типа "Gmail" с чекбоксами и заголовками. Требуется пэджобжект, который позволил бы найти по заголовку и 
кликнуть один или несколько чекбоксов. 

### Структура HTML
не важна, но схематично выглядит она так:

```html
<div class="box">
  <div class="boxCheckbox">
    <input type="checkbox">...</input>  
  </div>
  <div class="boxLabel">
    Here is checkbox #1  
  </div>
</div>
<div class="box">
  ...
</div>
...
```

т.е. у нас есть несколько `<div class="box">`, внутри каждого пара `<div class="boxCheckbox">` + `<div class="boxLabel">`.

### Сложный код

Перед вами **типичный** код, который мне приходилось видеть примерно миллион раз. 

Это олицетворение современной автоматизации тестирования (так мне иногда кажется).

```java
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.util.ArrayList;
import java.util.List;

public class SeleniumPageObject {

  // Search for element index in the list by title
  public static List<Integer> findListIndexesByTitle(List<WebElement> elementList, String SearchText) {
    List<Integer> ints = new ArrayList<>();
    for (int i = 0; i < elementList.size(); i++) {
      if (elementList.get(i).getText().contains(SearchText)) {
        ints.add(i);
      }
    }
    return ints;
  }

  // Buttons in the boxes
  @FindBy(xpath = "//div[@class='boxCheckbox']")
  private List<WebElement> selectCheckBoxesInBoxes;

  // Titles for boxes
  @FindBy(xpath = "//div[@class='boxLabel']")
  private List<WebElement> listOfTitlesInBoxes;

  // Select Box by title
  public void selectBoxByTitle(String searchTitle) {
    int index = findListIndexesByTitle(listOfTitlesInBoxes, searchTitle).get(0);
    selectBoxByIndex(index);
  }

  // Select Box by index
  private void selectBoxByIndex(int elPosition) {
    selectCheckBoxesInBoxes.get(elPosition).click();
  }

  // Select All Boxes by title
  public void selectAllBoxesByTitle(String searchTitle) {
    List<Integer> ints = findListIndexesByTitle(listOfTitlesInBoxes, searchTitle);
    for (int i = 0; i < ints.size(); i++) {
      selectBoxByIndex(ints.get(i));
    }
  }
}
```

Не буду повторяться, [почему комментарии в коде не нужны](https://asolntsev.github.io/ru/2010/05/02/javadoc/), 
что [`@FindBy` обычно ничего не упрощает](https://asolntsev.github.io/ru/2016/07/09/true-page-object/) и т.д. 
Просто сравните эти два куска кода.   

### Простой код

А вот во что я смог превратить этот код, переписав на Selenide:

```java
import com.codeborne.selenide.SelenideElement;

import static com.codeborne.selenide.Condition.text;
import static com.codeborne.selenide.Selenide.$$;

public class SelenidePageObject {
  public void selectBoxByTitle(String title) {
    selectBox($$(".boxLabel").findBy(text(title)));
  }

  public void selectAllBoxesByTitle(String searchTitle) {
    $$(".boxLabel").filterBy(text(searchTitle)).forEach(this::selectBox);
  }

  private void selectBox(SelenideElement boxLabel) {
    boxLabel.closest(".box").find(".boxCheckbox").click();
  }
}
```

Правда, ПРОСТО?

Этот вариант тоже не идеален. Но главное - он гораздо короче и проще. Его проще поддерживать. 
Его проще понять. 
Его проще поменять.
Его проще переписать с нуля, в конце концов. 

P.S. Заметили трюк? Я сказал, что переписал код на Селенид, но на самом деле выигрыш получился не столько от Селенида,
сколько от упрощения селекторов, выкидывания лишнего, использования лямбд (т.е. более современных средств языка). 
В общем, вы все с этим справитесь. 

Цените простоту, друзья!

<br>

[Андрей Солнцев](http://asolntsev.github.io/)

ru.selenide.org
