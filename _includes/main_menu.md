<ul class="main-menu-pages">
  <li><a href="{{ BASE_PATH }}/quick-start.html">С чего начать?</a></li>
  <li><a href="{{ BASE_PATH }}/documentation.html">Док</a></li>
  <li><a href="{{ BASE_PATH }}/faq.html">ЧАВО</a></li>
  <li><a href="{{ BASE_PATH }}/blog.html">Блог</a></li>
  <li><a href="{{ BASE_PATH }}/javadoc.html">Javadoc</a></li>
  <li><a href="{{ BASE_PATH }}/users.html">Пользователи</a></li>
  <li><a href="{{ BASE_PATH }}/quotes.html">Отзывы</a></li>
  <li><a href="{{ BASE_PATH }}/contacts.html">Кто ты?</a></li>
  <li style="display:none;"><a href="{{ BASE_PATH }}/thanks.html">Мы говорим спасибо</a></li>
</ul>

<div class="news">
  <div class="news-line"><a class="video" href="//www.youtube.com/watch?v=MTHhflyh8Ck">Selenide: лаконичные и стабильные UI тесты на Java</a></div>
  <div class="news-line"><a class="video" href="//vimeo.com/106867878">Как написать UI тест за 10 минут</a></div>
</div>

<h3 style="display:none">Блог</h3>
<div class="archive" style="display:none">
  {% assign posts_collate = site.posts %}
  {% include JB/posts_collate %}
  <a href="{{ BASE_PATH }}/archive.html" class="right small">Блог</a>
</div>
