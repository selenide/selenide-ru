---
layout: post
title: "Как получить логи браузера"
description: ""
category:
header-text: "Selenide Advent Calendar<br/>День 16"
tags: []
---
{% include JB/setup %}

Привет!

Мы продолжаем наш рождественский календарь.  
На сей раз мы посмотрим, как можно взглянуть хрому под вкладку "developer tools".  
Это на случай, если вы хотите понять, какие ошибки писались и какие сетевые запросы летели из тестируемого приложения во время прогона тестов. 

Chromedriver предлагает следующий рецепт. 

### 1. Добавить щепотку строк при открытии браузера:

```java
LoggingPreferences logPrefs = new LoggingPreferences();
logPrefs.enable(LogType.BROWSER, Level.ALL);
logPrefs.enable(LogType.PERFORMANCE, Level.ALL);
capabilities.setCapability("goog:loggingPrefs", logPrefs);
```

До какой-то версии эта _капабилитя_ называлась "loggingPrefs", потом переименовали в "goog:loggingPrefs".  
Не знаю, как в других браузерах. 

Кстати, помимо `BROWSER` и `PERFORMANCE`, есть и другие типы логов, но у меня они как-то нестабильно работали, да я
 и пользы в них не увидел. Знаете больше? Делитесь!   
 

### 2. В конце теста снять пенку с логов:

```java
Logs logs = getWebDriver().manage().logs();
printLog(logs.get(LogType.BROWSER));

void printLog(LogEntries entries) {
    logger.info("{} log entries found", entries.getAll().size());
    for (LogEntry entry : entries) {
      logger.info("{} {} {}",
        new Date(entry.getTimestamp()), entry.getLevel(), entry.getMessage()
      );
    }
  }
```

### 3. Блюдо подаётся к отчёту примерно в таком виде:

```java
BROWSER logs:

Mon Dec 16 19:29:42 EET 2019 SEVERE http://localhost:9126/page/image/payment-promo-capaign-ozon.png - Failed to load resource: the server responded with a status of 404 (Not Found)
Mon Dec 16 19:49:14 EET 2019 INFO console-api 19:16 "start loading loans"
Mon Dec 16 19:49:14 EET 2019 INFO console-api 21:18 "loaded loans"
```

Здесь видны все логи, что есть обычно в Developer Tools -> Console. В том числе сообщения `console.log` и ошибки JavaScript.  


### 4. Для гурманов можно подать десерт

```json
PERFORMANCE logs:

{"message":{"method":"Network.loadingFinished","params":{"encodedDataLength":0,"requestId":"2C9E49BC49DCD3CA6EA9644255E34DE5","shouldReportCorbBlocking":false,"timestamp":141439.076528}},"webview":"FF1A4E4EAAD7143749CD3740DF9BB95F"}
{"message":{"method":"Page.loadEventFired","params":{"timestamp":141439.234207}},"webview":"FF1A4E4EAAD7143749CD3740DF9BB95F"}
{"message":{"method":"Page.frameStoppedLoading","params":{"frameId":"FF1A4E4EAAD7143749CD3740DF9BB95F"}},"webview":"FF1A4E4EAAD7143749CD3740DF9BB95F"}
{"message":{"method":"Page.domContentEventFired","params":{"timestamp":141439.234834}},"webview":"FF1A4E4EAAD7143749CD3740DF9BB95F"}
{"message":{"method":"Page.frameResized","params":{}},"webview":"FF1A4E4EAAD7143749CD3740DF9BB95F"}
...
{"message":{"method":"Network.dataReceived","params":{"dataLength":0,"encodedDataLength":327,"requestId":"58583.71","timestamp":141474.021635}},"webview":"FF1A4E4EAAD7143749CD3740DF9BB95F"}
{"message":{"method":"Network.loadingFinished","params":{"encodedDataLength":586,"requestId":"58583.71","shouldReportCorbBlocking":false,"timestamp":141473.994219}},"webview":"FF1A4E4EAAD7143749CD3740DF9BB95F"}
```

### Плюс

Каждая запись - это валидный JSON, его вполне можно парсить и анализировать прямо в тестах.

Вот так выглядит отформатированная первая запись:

```json
{ 
   "message":{ 
      "method":"Network.loadingFinished",
      "params":{ 
         "encodedDataLength":0,
         "requestId":"2C9E49BC49DCD3CA6EA9644255E34DE5",
         "shouldReportCorbBlocking":false,
         "timestamp":141439.076528
      }
   },
   "webview":"FF1A4E4EAAD7143749CD3740DF9BB95F"
}
``` 

### Мунус:

* Что-то понять из этих логов сложно. Нужно строить поверх какие-то анализаторы. 
* Здесь нет тела запроса. 



## Что теперь?

В следующий раз вы изучим другие возможности получить логи - со статусами и телами запросов. 

<br> 

[Андрей Солнцев](http://asolntsev.github.io/)

ru.selenide.org
