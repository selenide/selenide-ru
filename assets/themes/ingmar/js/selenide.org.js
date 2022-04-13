(function () {

  function showNewsLine(newsLine, delayMs) {
    setTimeout(function () {
      newsLine.effect('slide', 'slow');
      newsLine.effect('shake', 'slow');
    }, delayMs);
  }

  function showNews() {
    showNewsLine($("header .news .news-line.news-title"), 500);
    showNewsLine($("header .news .news-line.news-link"), 1500);
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
