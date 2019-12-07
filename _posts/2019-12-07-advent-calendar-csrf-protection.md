---
layout: post
title: "Как протестировать защиту от CSRF атаки"
description: ""
category:
header-text: "Selenide Advent Calendar<br/>День 7"
tags: []
---
{% include JB/setup %}

Привет!

Сегодня 7 день рождественского календаря Selenide.  
И сегодня мы поговорим о тестировании безопасности.   

# Что такое CSRF?

Одна из самых распространённых атак - это CSRF (Cross-Site Request Forgery), или подделка межсайтовых запросов. 
Подробно о ней я рассказывал в видосике [WTF Security](https://www.youtube.com/watch?v=z-aEjd22BGU), а сейчас для нас 
важно то, что защиту от этой атаки легко протестировать вашими обычными автотестами. 

Для того, чтобы веб-приложение было защищено от CSRF-атак, с каждым его POST-запросом должен посылаться один хитрый 
параметр. Он обычно называется `authenticityToken` (хотя и не обязательно). Когда вы заходите в одной вкладке, скажем,
 в свой интернет-банк, а в другой вкладке на сайт с котиками, зловредный код на этом сайте может послать POST-запрос вашему
 банку для совершения платежа на счёт хакера. Хакер может послать счёт и сумму, а также все cookies из вашей вкладки, но
 он не сможет послать `authenticityToken` (потому, что он уникальный для каждой сессии и не хранится в cookies).

А типичная ошибка такая: веб-приложение либо не посылает `authenticityToken` на сервер с каким-то POST-запросом, 
либо на сервере не проверяет пришедший токен. 

<br/>

### Короче, как проверить защищённость?

У вас уже есть куча автотестов, покрывающих весь критичный функционал вашего веб-приложения.  
Мы убьём двух зайцев разом: во время запуска этих тестов мы будем перехватывать каждый POST-запрос и посылать точно такой
же, но с изменённым `authenticityToken`. И будем проверять, что сервер вернул ошибку. Обычно это ошибка 403 Forbidden. 

<br/>

### Звучит сложно. Как это закодить?

Не так уж сложно.   
Как вы знаете, селенид может запускать свой встроенный прокси-сервер. Изначально он использовался для скачивания файлов,
но к нему можно добавлять и свои "листенеры", которые могут перехватывать все запросы между браузером и тестируемым приложением.  
Это мы и сделаем.

<br/>

#### Шаг 1. Включаем селенидовский прокси-сервер 

```java
Configuration.proxyEnabled = true;
```

(это нужно сделать ДО открытия браузера)

<br/>

#### Шаг 2. Добавляем листенер для прокси-сервера

```java
abstract class BaseTest {
  private AuthenticityTokenChecker authenticityTokenChecker = new AuthenticityTokenChecker();

  // и где-то сразу после open("http://..."):
  getSelenideProxy().getProxy().addRequestFilter(authenticityTokenChecker);
}
```

На данный момент это можно сделать только ПОСЛЕ открытия браузера, что иногда не очень удобно.  
Я надеюсь, в следующей версии селенида мы сможем сделать так, чтобы листенеры для прокси-сервера можно было добавлять в любой момент.  

<br/>

#### Шаг 3. Реализуем AuthenticityTokenChecker

```java
import com.codeborne.selenide.Configuration;
import io.netty.handler.codec.http.*;
import net.lightbody.bmp.filters.*;
import net.lightbody.bmp.util.*;

public class AuthenticityTokenChecker implements RequestFilter {
  private final HttpClient httpClient = HttpClient.newBuilder().build();

  private final List<String> unprotectedUrls = new ArrayList<>(1);

  public void reset() {
    unprotectedUrls.clear();
  }

  public List<String> getUnprotectedUrls() {
    return unprotectedUrls;
  }

  @Override
  public HttpResponse filterRequest(HttpRequest httpRequest, HttpMessageContents contents, HttpMessageInfo httpMessageInfo) {
    if (httpRequest.getMethod() != HttpMethod.POST) return null;                   // игнорируем не-POST запросы
    if (!httpRequest.getUri().startsWith(Configuration.baseUrl)) return null;      // игнорируем запросы хрома к google.com и подобным ресурсами
    if (Этому урлу разрешено и без токена) return null;                            // некоторым post-запросам не требуется защита

    String body = contents.getTextContents();
    if (!body.contains("authenticityToken=")) {
      unprotectedUrls.add("No 'authenticityToken=' found for " + httpRequest.getUri() + " in " + body);
      return null;
    }

    sendHackedPostRequest(httpRequest, contents);
    return null;
  }
}
```

Обратите внимание: `return null;` значит "не изменяй запрос". То есть браузер пошлёт изначальный запрос на сервер без изменений, 
и нормальное течение вашего теста не будет нарушено.

<br/>

#### Шаг 4. Посылаем хакнутый POST-запрос

```java

  private void sendHackedPostRequest(HttpRequest httpRequest, HttpMessageContents contents) throws IOException, InterruptedException {
    // Над этой строчкой придётся поработать. 
    // Формат запроса (и даже имя параметра "authenticityToken") может зависеть от вашего приложения.
    // Обратите внимание, что параметров "authenticityToken" может быть несколько (сразу кидайте ошибку, если они разные).
    // Если в POST-запросе сабмитится форма, да ещё и с файлами, параметр "authenticityToken" придётся выцепить немножко по-другому. 
    String hackedBody = contents.getTextContents()
        .replace("authenticityToken=1234567890").на("authenticityToken=hack-me-if-you-can");

    java.net.http.HttpRequest.Builder builder = java.net.http.HttpRequest.newBuilder()
      .uri(URI.create(httpRequest.getUri()))
      .timeout(Duration.ofSeconds(1));

    for (Map.Entry<String, String> header : httpRequest.headers()) {
      if (!restrictedHeaders.contains(header.getKey().toLowerCase())) {
        builder.header(header.getKey(), header.getValue());
      }
    }

    java.net.http.HttpRequest request = builder
      .POST(java.net.http.HttpRequest.BodyPublishers.ofString(hackedBody))
      .build();

    log.info("Sending hacked request to {}", httpRequest.getUri());

    java.net.http.HttpResponse<String> httpResponse = httpClient.send(request, java.net.http.HttpResponse.BodyHandlers.ofString());

    if (httpResponse.statusCode() == 403) {
      log.info("Hacked request was rejected: {} {}", httpResponse.statusCode(), httpRequest.getUri());
    }
    else {
      log.error("HACK SUCCEEDED {} {}", httpResponse.statusCode(), httpRequest.getUri());
      unprotectedUrls.add("Detected URL without authenticity token check: " + httpRequest.getUri());
    }
  }

  private static final Set<String> restrictedHeaders = Set.of("connection", "content-length",
    "date", "expect", "from", "host", "upgrade", "via", "warning");

```
Конкретно эта реализация использует `HttpClient` из Java 11, но если вы из тех бедолаг, что до сих пор сидят на Java 8,
вы можете заменить его на OkHttp, Apache Http Client или что-то подобное. 

<br/>

#### Шаг 5. Валим тест, если нашлись незащищённые запросы

```java
abstract class BaseTest {
  @Before void resetChecker() {
    authenticityTokenChecker.reset();
  }

  @After
  public void verifyThatAllPostRequestsAreProtectedWithAuthenticityToken() {
    if (!authenticityTokenChecker.getUnprotectedUrls().isEmpty()) {
      fail(String.valueOf(authenticityTokenChecker.getUnprotectedUrls()));
    }
  }
}
```

<br/>

## Что теперь?

Мы убили двух зайцев и научились автоматически проверять защиту от CSRF-атак при запуске наших обычных автотестов.  
Это не фантазия, мы реально так сделали на одном проекте и нашли две серьёзных уязвимости в настоящем интернет-банке. 

Хорошо, но этого мало. На свете ещё куча атак.

Пересмотрите [WTF Security](https://www.youtube.com/watch?v=z-aEjd22BGU), почитывайте [OWASP 10](https://www.owasp.org/index.php/Category:OWASP_Top_Ten_Project)
и мыслите креативно, а как ещё можно убить третьего и четвёртого зайца вашими автотестами. 


<br>

[Андрей Солнцев](http://asolntsev.github.io/)

ru.selenide.org
