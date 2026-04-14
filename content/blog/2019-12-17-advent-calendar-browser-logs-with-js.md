---
slug: "advent-calendar-browser-logs-with-js"
date: 2019-12-17
title: "Как получить логи браузера через JavaScript"
description: ""
category:
headerText: "Selenide Advent Calendar<br/>День 17"
tags: []
---
Привет!

В прошлом посте нашего рождественского календаря мы пробовали получить логи хрома с помощью _капабилити_ "goog:loggingPrefs".  

> UPD Позже был реализован метод, который работает и в Firefox, и в Chromium браузерах:  
> [Собираем логи браузера с помощью DevTools/BiDi](/2025/10/29/selenide-7.12.0/#browser-logs-with-bidi)

<br>
<br>


А сегодня попробуем другой способ - с помощью JavaScript.

Итак, надо всего лишь в конце теста дёрнуть такой вот JavaScript:

```java
String js = 
   "var performance = window.performance || window.mozPerformance" +
                   " || window.msPerformance || window.webkitPerformance || {};" +
   " return performance.getEntries() || {};";
String netData = executeJavaScript(js).toString();
logger.info("Network traffic: {}", netData);
```

Результат получается примерно такой: 

```json
Network traffic: [
  {name=https://selenide.org/quick-start.html, connectEnd=0, connectStart=0, decodedBodySize=32582, domComplete=724, domContentLoadedEventEnd=119, domContentLoadedEventStart=115, domInteractive=104, domainLookupEnd=0, domainLookupStart=0, duration=724, encodedBodySize=32582, entryType=navigation, fetchStart=0, initiatorType=navigation, loadEventEnd=724, loadEventStart=724, nextHopProtocol=http/1.1, redirectCount=0, redirectEnd=0, redirectStart=0, requestStart=0, responseEnd=0, responseStart=0, secureConnectionStart=0, serverTiming=[], startTime=0, transferSize=0, type=navigate, unloadEventEnd=10, unloadEventStart=9, workerStart=0},
  {name=https://selenide.org/assets/themes/ingmar/css/styles.css?001, connectEnd=12, connectStart=12, decodedBodySize=8177, domainLookupEnd=12, domainLookupStart=12, duration=29, encodedBodySize=8177, entryType=resource, fetchStart=12, initiatorType=link, nextHopProtocol=http/1.1, redirectEnd=0, redirectStart=0, requestStart=12, responseEnd=41, responseStart=21, secureConnectionStart=0, serverTiming=[], startTime=12, transferSize=0, workerStart=0},
  {name=https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js, connectEnd=13, connectStart=13, decodedBodySize=84245, domainLookupEnd=13, domainLookupStart=13, duration=28, encodedBodySize=84245, entryType=resource, fetchStart=13, initiatorType=script, nextHopProtocol=http/1.1, redirectEnd=0, redirectStart=0, requestStart=13, responseEnd=41, responseStart=21, secureConnectionStart=0, serverTiming=[], startTime=13, transferSize=0, workerStart=0}
]
```

### Плюсы:

* Не нужно никак настраивать браузер. Оно работает из коробки. 
* Работает во всех браузерах (кажется?)

### Минусы:

* Здесь всё ещё нет тела запроса.
* Это невалидный JSON. Распарсить его стандартным парсером не получится. Придётся придумывать какой-то свой обработчик.  


Но этот способ вполне подходит, чтобы просто посмотреть глазами и прикинуть, что происходит. 


## Что теперь?

Наша последняя надежда - получить запросы и ответы с помощью встроенного прокси-сервера. Этот способ мы рассмотрим в следующем посте.  

<br> 

[Андрей Солнцев](http://asolntsev.github.io/)

ru.selenide.org
