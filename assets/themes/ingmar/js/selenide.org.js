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

  function forEach(selector, handler) {
    Array.from(document.querySelectorAll(selector)).forEach((element, index) => {
      handler(element, index)
    })
  }

  function forEachTag(handler) {
    forEach('#selenide-users .user', handler)
  }

  let timeouts = []
  function filterUsersByTag(tag) {
    resetUsersFilter()
    let i = 0
    timeouts.forEach(timeout => clearTimeout(timeout))
    timeouts = []

    forEachTag(element => {
      element.classList.add("hidden")
      if (element.classList.contains(tag)) {
        timeouts.push(setTimeout(() => element.classList.remove("hidden"), i))
        i += 100
      }
    })
  }

  function resetUsersFilter() {
    forEachTag(element => {
      element.classList.remove("hidden");
    })
  }

  function setupUserFilter() {
    forEach('#user-tags .tag', element => {
      element.addEventListener("click", (e) => {
        e.preventDefault()
        filterUsersByTag(element.text)
      })
    })
    forEach('#user-tags .reset-filter', element => {
      element.addEventListener("click", (e) => {
        e.preventDefault()
        resetUsersFilter(element.text)
      })
    })
  }

  setupLanguageSelector();
  showNews();
  showVideosInPopup();
  setupUserFilter();
})();
