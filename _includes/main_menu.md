<ul class="gray-boxes">
  <li><a href="https://github.com/codeborne/selenide" target="_blank">Заглянуть на <strong>GitHub</strong></a></li>
  <li><a href="http://search.maven.org/#search%7Cgav%7C1%7Cg%3A%22com.codeborne%22%20AND%20a%3A%22selenide%22" target="_blank">Искать в <strong>Maven</strong></a></li>
  <li><a href="http://twitter.com/jselenide" target="_blank">Следить в <strong>Twitter</strong></a></li>
</ul>

<a class="right" title="Subscribe to this blog" href="{{ BASE_PATH }}/rss.xml">
  <abbr title="Really Simple Syndication">RSS</abbr>
</a>

<ul class="main-menu-pages">
  <li><a href="{{ BASE_PATH }}/quick-start.html">С чего начать?</a></li>
  <li><a href="{{ BASE_PATH }}/documentation.html">Документация</a></li>
  <li><a href="http://selenide.org/javadoc/2.3" target="_blank">Javadoc</a></li>
  <li><a href="{{ BASE_PATH }}/users.html">Кто использует Selenide?</a></li>
  <li><a href="{{ BASE_PATH }}/contacts.html">Расскажи о себе!</a></li>
</ul>

<h3>Блог</h3>
<div class="archive">
  {% assign posts_collate = site.posts %}
  {% include JB/posts_collate %}
  <a href="{{ BASE_PATH }}/archive.html" class="right small">Весь архив блога</a>
</div>
