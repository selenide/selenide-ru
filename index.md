---
layout: default
title: "Selenide: лаконичные и стабильные UI тесты на Java"
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
  <h4>Selenide - это фреймворк для автоматизированного тестирования веб-приложений на основе <a href="https://docs.seleniumhq.org/projects/webdriver/" target="_blank">Selenium WebDriver</a>, дающий следующие преимущества:</h4>
  <div class="highlights">
    <a href="/documentation.html">Изящный API</a>
    <span>Стабильные тесты</span>
    <span>Мощные селекторы</span>
    <span>Простая конфигурация</span>
  </div>
  <div class="mt-1">
    Вам больше не нужно заботиться о том, как закрыть браузер, обработать таймауты и StaleElement Exceptions 
    или искать соответствующую строку в логах, отлаживая свои тесты.
  </div>

  <div class="mt-1">
    <b> Просто сконцентрируйтесь на бизнес-логике и позвольте Selenide сделать все остальное</b>!
  </div>

  <a href="/quick-start.html">
    <img style="margin-top: 15px; margin-bottom: -33px" src="{{ BASE_PATH }}/images/arrow-down.png" width="30" height="55" alt="" border="0"/>
  </a>
</div>
</div>



<div class="quicklinks">
  <div class="wrapper-color-content">
    <ul class="gray-boxes">
      <li><a href="https://github.com/selenide/selenide" target="_blank"><span class="ql"><h3>View on</h3> <strong><h4>GitHub</h4></strong></span></a></li>
      <li><a href="https://search.maven.org/#search%7Cgav%7C1%7Cg%3A%22com.codeborne%22%20AND%20a%3A%22selenide%22" target="_blank"><span class="ql"><h3>Search in</h3> <strong><h4>Maven</h4></strong></span></a></li>
      <li><a href="{{ BASE_PATH }}/blog.html"><span class="ql"><h3>Read our</h3> <strong><h4>Blog</h4></strong></span></a></li>
      <li><a href="https://twitter.com/selenide" target="_blank"><span class="ql"><h3>Follow at</h3><strong><h4>Twitter</h4></strong></span></a></li>
      <li><a href="{{ BASE_PATH }}/rss"><span class="ql"><h3>Subscribe to</h3><strong><h4>RSS</h4></strong></span></a></li>
    </ul>
  </div>
</div>

<div class="short howto">
  <div class="wrapper-color-content">
  
    <h3>С чего начать?</h3>
    <h4>Начать использовать Selenide невероятно просто.</h4>
  
    <div>  
      Просто добавьте <a href="https://search.maven.org/remotecontent?filepath=com/codeborne/selenide/{{site.SELENIDE_VERSION}}/selenide-{{site.SELENIDE_VERSION}}.jar">selenide.jar</a> в ваш проект. И начинайте писать тесты!
    </div>
    
    <a href="{{ BASE_PATH }}/quick-start.html">
      <img style="margin-top: 15px; margin-bottom: -33px" src="{{ BASE_PATH }}/images/arrow-down.png" width="30" height="55" border="0"/>
    </a>
  </div>
</div>

<div class="short docs">
  <div class="wrapper-color-content">

    <h3>Документация</h3>
    <h4>
      Плохой софт <span class="bold">не имеет</span> документации.
      Отличный софт <span class="bold">не нуждается</span> в документации.
    </h4>
    
    <div>
      Мы с гордостью заявляем, что Selenide настолько прост, что вам не нужно читать тонны документации, чтобы начать с ним работать.
    </div>
    <div class="mt-1">
      Вся работа с Selenide состоит всего из трёх простых вещей.
    </div>
    <a href="{{ BASE_PATH }}/documentation.html">
      <img style="margin-top: 15px; margin-bottom: -33px" src="{{ BASE_PATH }}/images/arrow-down.png" width="30" height="55" border="0"/>
    </a>

  </div>
</div>

<div class="short feedback">
  <div class="wrapper-color-content">
  
    <h3>Контакты</h3>
    <h4>Ты хочешь поговорить об этом?</h4>
  
    <div>Где можно задать вопрос или обсудить любой вопрос насчёт Selenide на русском языке:</div>
    <div class="highlights">
      <a href="mailto:selenide-ru@googlegroups.com">Гуглогруппа</a>
      <a href="http://automated-testing.info/c/webdriver/selenide">раздел Selenide на automated-testing.info</a>
      <a href="mailto:info@selenide.org">Email</a>
    </div>
  
  </div>
</div>

<div class="short testimonials">
  <div class="wrapper-color-content">
  
    <h3>Отзывы</h3>
    <h4>"Selenide - мощный инструмент для написания функциональных тестов. Рекомендую."</h4>
    
    <div>KAUR MÄTAS,</div>
    <div>Инженер LiveRebel в ZeroTurnaround</div>
    
    <a href="{{ BASE_PATH }}/users.html">
      <img style="margin-top: 15px; margin-bottom: -33px" src="{{ BASE_PATH }}/images/arrow-down.png" width="30" height="55" border="0"/>
    </a>
  </div>
</div>

<div class="short">
  <a class="twitter-timeline" href="https://twitter.com/selenide" data-widget-id="397446026996359168">Tweets by @selenide</a>
  <script>
    $(function() {
      !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
    });
  </script>
</div>

<a name="thanks"></a>
<div class="short thanks">
  <h4>Большое спасибо:</h4>
  <a href="https://www.jetbrains.com/?from=selenide.org">
    <img src="{{BASE_PATH}}/images/jetbrains.svg" alt="JetBrains. Intellij IDEA - лучшая IDE для Java на Млечном Пути!"/>
  </a>
  <img src="{{BASE_PATH}}/images/yourkit.png" alt="YourKit" style="width: 150px;"/>
  <img src="https://www.browserstack.com/images/mail/browserstack-logo-footer.png" alt="BrowserStack"/>
</div>