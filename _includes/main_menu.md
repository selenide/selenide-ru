<ul class="main-menu-pages">
  <li><a href="{{ BASE_PATH }}/quick-start.html">С чего начать?</a></li>
  <li><a href="{{ BASE_PATH }}/documentation.html">Док</a></li>
  <li><a href="{{ BASE_PATH }}/faq.html">ЧАВО</a></li>
  <li><a href="{{ BASE_PATH }}/blog.html">Блог</a></li>
  <li><a href="{{ BASE_PATH }}/javadoc.html">Javadoc</a></li>
  <li><a href="{{ BASE_PATH }}/users.html">Пользователи</a></li>
  <li><a href="{{ BASE_PATH }}/quotes.html">Отзывы</a></li>
  <li style="display:none;"><a href="{{ BASE_PATH }}/thanks.html">Мы говорим спасибо</a></li>
</ul>

<div class="news">
  <div class="news-line"><a href="htttp://selenide.org/2017/01/26/selenide-4.2.1/">Вышла Selenide 4.2.1</div>
  <div class="news-line"><a href="/2016/12/30/selenide-4.2/">Вышла Selenide 4.2</a></div>
  <!--
  <div class="news-line"><a href="/2016/12/01/selenide-4.1/">Вышла Selenide 4.1</a></div>
  <div class="news-line"><a href="https://www.surveymonkey.com/r/RWPN56G">Заполните опросник про Selenide!</a></div>
  -->
</div>

<h3 style="display:none">Блог</h3>
<div class="archive" style="display:none">
  {% assign posts_collate = site.posts %}
  {% include JB/posts_collate %}
  <a href="{{ BASE_PATH }}/archive.html" class="right small">Блог</a>
</div>
