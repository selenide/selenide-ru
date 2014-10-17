---
layout: default
title: "Selenide: лаконичные UI тесты на Java"
tagline:
---
{% include JB/setup %}

<script>
  $(function(){
    function showNewsLine(newsLine) {
      newsLine.effect( "slide", "slow" );
      newsLine.effect( "shake", "slow" );
    }

    $("header .news .news-line").each(function(i, newsLine) {
      setTimeout(function() {
        showNewsLine($(newsLine));
      }, 500 + i * 1000);
    });
  });
</script>

<div class="short wiki">
<div class="wrapper-color-content">

  <h3>Что такое Selenide?</h3>
  <h4>Selenide - это обёртка вокруг <a href="http://docs.seleniumhq.org/projects/webdriver/" target="_blank">Selenium WebDriver</a>, дающая:</h4>
  <div class="highlights">
    <a href="/documentation.html">Изящный API для тестов</a>
    <span>Поддержка Ajax</span>
    <a href="/documentation/page-objects.html">тру Page Objects</a>
    <span>Селекторы в стиле jQuery</span>
  </div>
  Selenide позволяет писать лаконичные тесты. Вам больше не нужно заботиться о
  том, как открыть и закрыть браузер, не надо беспокоиться о таймаутах, не надо писать монструозный код для
  ожидания наступления событий - <b>сконцентрируйтесь на бизнес-логике</b>!<br>
  
  <a href="/quick-start.html"> <img style="margin-top: 15px; margin-bottom: -33px" src="{{ BASE_PATH }}/images/arrow-down.png" width="30" height="55" border="0"/> </a>
</div>
</div>



<div class="quicklinks">
<div class="wrapper-color-content">
<ul class="gray-boxes">
  <li><a href="https://github.com/codeborne/selenide" target="_blank"><span class="ql"><h3>View on</h3> <strong><h4>GitHub</h4></strong></span></a></li>
  <li><a href="http://search.maven.org/#search%7Cgav%7C1%7Cg%3A%22com.codeborne%22%20AND%20a%3A%22selenide%22" target="_blank"><span class="ql"><h3>Search in</h3> <strong><h4>Maven</h4></strong></span></a></li>
  <li><a href="{{ BASE_PATH }}/blog.html"><span class="ql"><h3>Read our</h3> <strong><h4>Blog</h4></strong></span></a></li>
  <li><a href="https://twitter.com/jselenide" target="_blank"><span class="ql"><h3>Follow at</h3><strong><h4>Twitter</h4></strong></span></a></li>
  <li><a href="{{ BASE_PATH }}/rss.xml"><span class="ql"><h3>Subscribe to</h3><strong><h4>RSS</h4></strong></span></a></li>
</ul>
</div>
</div>

<div class="short howto">
<div class="wrapper-color-content">

<h3>С чего начать?</h3>
<h4>Начать использовать Selenide невероятно просто.</h4>

Просто добавьте <a href="http://search.maven.org/remotecontent?filepath=com/codeborne/selenide/{{site.SELENIDE_VERSION}}/selenide-{{site.SELENIDE_VERSION}}.jar">selenide.jar</a> в ваш проект. И начинайте писать тесты!<br>

<a href="{{ BASE_PATH }}/quick-start.html"> <img style="margin-top: 15px; margin-bottom: -33px" src="{{ BASE_PATH }}/images/arrow-down.png" width="30" height="55" border="0"/> </a>
</div></div>

<div class="short docs">
<div class="wrapper-color-content">

<h3>Документация</h3>
<h4>Плохой софт <span class="bold">не имеет</span> документации.
Отличный софт <span class="bold">не нуждается</span> в документации.</h4>

Мы с гордостью заявляем, что Selenide настолько прост, что вам не нужно читать тонны документации, чтобы начать с ним работать.<br/>
Вся работа с Selenide состоит всего из трёх простых вещей.<br>
<a href="{{ BASE_PATH }}/documentation.html"> <img style="margin-top: 15px; margin-bottom: -33px" src="{{ BASE_PATH }}/images/arrow-down.png" width="30" height="55" border="0"/> </a>
</div></div>

<div class="short testimonials">
  <div class="wrapper-color-content">
  
    <h3>Отзывы</h3>
    <h4>"Selenide - мощный инструмент для написания функциональных тестов. Рекомендую."</h4>
    
    KAUR MÄTAS, <br>
    Инженер LiveRebel в ZeroTurnaround<br>
    
    <a href="{{ BASE_PATH }}/users.html"> <img style="margin-top: 15px; margin-bottom: -33px" src="{{ BASE_PATH }}/images/arrow-down.png" width="30" height="55" border="0"/> </a>
  </div>
</div>

<div class="short">
  <a class="twitter-timeline" href="https://twitter.com/jselenide" data-widget-id="397446026996359168">Tweets by @jselenide</a>
  <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
</div>
