<div class="main-menu">
  
  <div class="service-links">
    <div id="languages">
      <a id="lang_eng" href="https://selenide.org">EN</a>
      <a id="lang_rus" href="https://ru.selenide.org">RU</a>
    </div>
  </div>
  
  <div class="main-menu-pages">
    <a href="{{ BASE_PATH }}/quick-start.html">С чего начать?</a>
    <a href="{{ BASE_PATH }}/documentation.html">Док</a>
    <a href="{{ BASE_PATH }}/faq.html">ЧАВО</a>
    <a href="{{ BASE_PATH }}/blog.html">Блог</a>
    <a href="{{ BASE_PATH }}/javadoc.html">Javadoc</a>
    <a href="{{ BASE_PATH }}/users.html">Пользователи</a>
    <a href="{{ BASE_PATH }}/quotes.html">Отзывы</a>
    <a style="display:none;" href="{{ BASE_PATH }}/thanks.html">Мы говорим спасибо</a>
  </div>

  {% if page.show_news %}
    <div class="news">
      <div class="news-line news-title"><a href="/2023/03/23/selenide-6.12.4/">Вышла Selenide 6.12.4</a></div>
      <div class="news-line news-link">Точка отсчёта</div>
    </div>
  {% endif %}

</div>
