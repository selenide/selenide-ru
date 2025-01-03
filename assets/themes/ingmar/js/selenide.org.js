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

  function showUser(element) {
    element.classList.remove("hidden")
  }
  function hideUser(element) {
    element.classList.add("hidden")
  }

  let timeouts = []
  function filterUsersByTag(tag) {
    let i = 0
    timeouts.forEach(timeout => clearTimeout(timeout))
    timeouts = []

    forEachTag(element => {
      hideUser(element)
      if (element.classList.contains(tag)) {
        timeouts.push(setTimeout(() => showUser(element), i))
        i += 100
      }
    })
  }

  function resetUsersFilter() {
    forEachTag(element => {
      showUser(element);
    })
  }

  function setupUserFilter() {
    forEach('#user-tags .tag', element => {
      element.addEventListener("click", (e) => {
        filterUsersByTag(element.text)
      })
    })
    forEach('#user-tags .reset-filter', element => {
      element.addEventListener("click", (e) => {
        resetUsersFilter()
      })
    })
  }

  function shuffleUsers() {
    const users = Array.from(document.querySelectorAll('#selenide-users .user'))
    for (let i = 2; i < users.length; i++) {
      const index = Math.floor(Math.random() * i);
      users[index].parentNode.insertBefore(users[index], users[i]);
    }
  }

  function showRandomUser() {
    if (timeouts.length > 0) return

    const users = Array.from(document.querySelectorAll('#selenide-users .user'))
    if (users.length) {
      const index = Math.floor(Math.random() * users.length);
      showUser(users[index])
      setTimeout(() => hideUser(users[index]), 5050)
      setTimeout(showRandomUser, 5000)
    }
  }

  setupLanguageSelector();
  showNews();
  showVideosInPopup();
  setupUserFilter();
  shuffleUsers();
  if (location.hash === '#all') {
    resetUsersFilter()
  }
  else if (location.hash) {
    filterUsersByTag(location.hash.substring(1));
  }
  else {
    showRandomUser();
  }
})();
