(function () {

  function showNewsLine(newsLine, delayMs) {
    setTimeout(function () {
      newsLine.effect('slide', 'slow');
      newsLine.effect('shake', 'slow');
    }, delayMs);
  }

  function showNews() {
    const slogan = $("header .news .news-line.news-link");
    const title = $("header .news .news-line.news-title");
    const newsUrl = $("header .news .news-line.news-title a").attr("href");
    const alreadyShowed = localStorage.getItem('showed-' + newsUrl);

    if (!alreadyShowed) {
      showNewsLine(title, 500);
      showNewsLine(slogan, 1500);
      localStorage.setItem('showed-' + newsUrl, new Date().toLocaleString());
    }
    else {
      title.show();
      slogan.show();
    }
  }

  function setupLanguageSelector() {
    document.getElementById('lang_eng').setAttribute("href", window.location.href.replace(/\/\/ru./, '//'));
    document.getElementById('lang_rus').setAttribute("href", window.location.href);
  }

  function showVideosInPopup() {
    $('.video').magnificPopup({
      type: 'iframe',
      enableEscapeKey: true
    });
  }

  setupLanguageSelector();
  showNews();
  showVideosInPopup();
})();
