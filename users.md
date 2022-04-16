---
layout: default
title : Кто использует Selenide
header : Кто использует Selenide
group: navigation
cssClass: testimonials
header-text:
---
{% include JB/setup %}

{% include themes/ingmar/_title.html %}

<br/>
<br/>

<div class="wrapper-content">
  <section>

    {% for user in site.data.users %}
      {% if user.name != '' %}
        <div class="user">
          <div class="user-logo">
            <a href="{{ user.link }}" target="_blank">
              <img src="{{ BASE_PATH }}/images/{{ user.logo }}" alt="{{ user.name }}" {% if user.logoWidth %}width="{{ user.logoWidth }}"{% endif %}/>
            </a>
          </div>
          <div class="user-description">
            <a href="{{ user.link }}" target="_blank">{{ user.name }}</a> - {{ user.description }}
          </div>
        </div>
        <hr class="divider"/>
      {% endif %}
    {% endfor %}

  </section>
</div>

<div class="vspace"></div>

<a name="thanks"></a>

<div class="short feedback">
  <div class="wrapper-color-content">
    <h3>Мы говорим СПАСИБО:</h3>
  </div>
</div>

<div class="wrapper-content">
  <section>
    
    <h3>YourKit</h3>
    
    <div>YourKit поддерживает проект Selenide своим профилировщиком Java.</div>
    
    <div>
      YourKit, LLC - создатель инновационных профилировщиков для Java и .NET. Обратите внимание на два главных инструмента YourKit:
      <a href="https://www.yourkit.com/java/profiler/features/" target="_blank">YourKit Java Profiler</a> и 
      <a href="https://www.yourkit.com/.net/profiler/features/" target="_blank">YourKit .NET Profiler</a>.
    </div>
    
    <div class="center">
      <br/>
      <img src="{{BASE_PATH}}/images/yourkit.png" target="_blank" alt="YourKit" style="width: 150px;"/>
    </div>

    <h3>Selenium</h3>
    
    <div>И конечно, сам <a href="http://www.seleniumhq.org/" target="_blank">Selenium WebDriver</a>!</div>
    
    <div class="center">
      <br/>
      <img src="{{BASE_PATH}}/images/selenium-logo.png" alt="Selenium WebDriver" style="width: 150px;"/>
    </div>

  </section>
</div>

<div class="vspace"></div>


<a name="contact"></a>

<div class="short howto">
  <div class="wrapper-color-content">
    <h3>Сообщи о себе!</h3>
    <h4>Поделись с нами опытом!</h4>
  </div>
</div>

<div class="wrapper-content center">
  <section>
    <br/>
    <div>Хотите увидеть здесь и свой логотип? <a href="mailto:andrei.solntsev@gmail.com">Напишите нам!</a></div>
    <div>Нам чертовски интересно узнать про вас: что пробовали, что получилось, какие встретили проблемы.</div>
    <br/>
    <div>Задай свои вопросы или оставь отзыв!</div>
  </section>
</div>

<div class="quicklinks">
  <div class="wrapper-color-content">
    <ul class="gray-boxes">
      <li>
        <a href="mailto:selenide@googlegroups.com" target="_blank">
          <span class="ql"><h3>Спроси у</h3> <strong><h4>людей</h4></strong></span>
        </a>
      </li>
      <li>
        <a href="https://groups.google.com/forum/?fromgroups#!forum/selenide-ru" target="_blank" title="Архив гуглогруппы selenide-ru">
          <span class="ql"><h3>Читай</h3> <strong><h4>ГГруппу</h4></strong></span>
        </a>
      </li>
      <li>
        <a href="mailto:andrei.solntsev@gmail.com" target="_blank">
          <span class="ql"><h3>Напиши</h3> <strong><h4>мне</h4></strong></span>
        </a>
      </li>
      <li>
        <a href="https://twitter.com/selenide" target="_blank" title="Twitter #selenide">
          <span class="ql"><h3>Пиши в</h3> <h4>твиттер</h4></span>
        </a>
      </li>
    </ul>
  </div>
</div>


{% include JB/comments %}
