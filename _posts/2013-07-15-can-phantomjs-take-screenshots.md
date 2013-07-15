---
layout: post
title: "Может ли PhantomJS делать скриншоты?"
description: ""
category: 
tags: []
---
{% include JB/setup %}

Многие думают, что PhantomJS как headless-браузер не умеет делать снимки экрана.

А вот и неправда!

Согласно [документации PhantomJS](https://github.com/ariya/phantomjs/wiki/Screen-Capture), он умеет делать скриншоты.

Давайте-ка попробуем.

```java
import static com.codeborne.selenide.Selenide.*;

public class TestPhantomScreenshot {
  public static void main(String[] args) {
    System.setProperty("browser", "phantomjs");
    open("http://google.com");
    screenshot("google-com-screenshot");
    close();
  }
}
```

Это работает!

Впрочем, работает неидеально. Скриншоты [google.com]({{ BASE_PATH }}/images/2013/07/google-com-screenshot.png),
[habrahabr.ru]({{ BASE_PATH }}/images/2013/07/habrahabr-ru-screenshot.png) и
[skype.com]({{ BASE_PATH }}/images/2013/07/skype-com-screenshot.png) выглядят неплохо, но вот скриншот
[selenide.org]({{ BASE_PATH }}/images/2013/07/selenide-org-screenshot.png) смотрится весьма странно.

Значит ли это, что PhantomJS ещё недостаточно зрелый продукт?
Не знаю. Но всяком случае теперь мы знаем точно, что PhantomJS умеет делать скриншоты.

[![google.com]({{ BASE_PATH }}/images/2013/07/google-com-screenshot.thumb.png)]({{ BASE_PATH }}/images/2013/07/google-com-screenshot.png)
[![habrahabr.ru]({{ BASE_PATH }}/images/2013/07/habrahabr-ru-screenshot.thumb.png)]({{ BASE_PATH }}/images/2013/07/habrahabr-ru-screenshot.png)
[![skype.com]({{ BASE_PATH }}/images/2013/07/skype-com-screenshot.thumb.png)]({{ BASE_PATH }}/images/2013/07/skype-com-screenshot.png)
[![selenide.org]({{ BASE_PATH }}/images/2013/07/selenide-org-screenshot.thumb.png)]({{ BASE_PATH }}/images/2013/07/selenide-org-screenshot.png)
