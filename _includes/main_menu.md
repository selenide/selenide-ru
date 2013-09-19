<ul class="main-menu-pages">
  <li><a href="{{ BASE_PATH }}/quick-start.html">С чего начать?</a></li>
  <li><a href="{{ BASE_PATH }}/documentation.html">Документация</a></li>
  <li><a href="https://github.com/codeborne/selenide/wiki" target="_blank">Wiki</a></li>
  <li><a href="{{ BASE_PATH }}/javadoc/2.4" target="_blank">Javadoc</a></li>
  <li><a href="{{ BASE_PATH }}/users.html">Отзывы</a></li>
  <li style="display:none;"><a href="{{ BASE_PATH }}/quotes.html">Что говорят о Selenide?</a></li>
  <li><a href="{{ BASE_PATH }}/contacts.html">Расскажи о себе!</a></li>
  <li style="display:none;"><a href="{{ BASE_PATH }}/thanks.html">Мы говорим спасибо</a></li>
</ul>

<h3 style="display:none">Блог</h3>
<div class="archive" style="display:none">
  {% assign posts_collate = site.posts %}
  {% include JB/posts_collate %}
  <a href="{{ BASE_PATH }}/archive.html" class="right small">Блог</a>
</div>
