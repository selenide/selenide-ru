---
slug: "can-phantomjs-take-screenshots"
date: 2013-07-15
title: "Может ли PhantomJS делать скриншоты?"
description: ""
category: 
tags: []
---
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

Впрочем, работает неидеально. Скриншоты [google.com](/images/2013/07/google-com-screenshot.png),
[habrahabr.ru](/images/2013/07/habrahabr-ru-screenshot.png) и
[skype.com](/images/2013/07/skype-com-screenshot.png) выглядят неплохо, но вот скриншот
[selenide.org](/images/2013/07/selenide-org-screenshot.png) смотрится весьма странно.

Значит ли это, что PhantomJS ещё недостаточно зрелый продукт?
Не знаю. Но всяком случае теперь мы знаем точно, что PhantomJS умеет делать скриншоты.

[![google.com](/images/2013/07/google-com-screenshot.thumb.png)](/images/2013/07/google-com-screenshot.png)
[![habrahabr.ru](/images/2013/07/habrahabr-ru-screenshot.thumb.png)](/images/2013/07/habrahabr-ru-screenshot.png)
[![skype.com](/images/2013/07/skype-com-screenshot.thumb.png)](/images/2013/07/skype-com-screenshot.png)
[![selenide.org](/images/2013/07/selenide-org-screenshot.thumb.png)](/images/2013/07/selenide-org-screenshot.png)
