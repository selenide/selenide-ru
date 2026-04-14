(() => {

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
    document.getElementById('lang_eng').setAttribute("href", window.location.href);
    document.getElementById('lang_rus').setAttribute("href", window.location.href.replace(/\/\//, '//ru.'));
  }

  function toggleDocumentation() {
    const documentationMenu = document.querySelector('.left-menu')
    documentationMenu.classList.toggle('shown')
  }

  function setupDocumentationMenu() {
    document.querySelector('.left-menu-icon')?.addEventListener('click', toggleDocumentation);
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

  function forEachUser(handler) {
    forEach('#selenide-users .user', handler)
  }

  function on(eventName, selector, handler) {
    document.addEventListener(eventName, (event) => {
      const element = event.target.closest(selector)
      if (element) {
        handler(element)
      }
    })
  }

  function showUser(element) {
    element.classList.remove("hidden")
    const logo = element.querySelector('img')
    logo.setAttribute('src', logo.getAttribute('data-src'))
  }

  function hideUser(element) {
    element.classList.add("hidden")
  }

  let timeouts = []
  function filterUsersByTag(tag) {
    let i = 0
    timeouts.forEach(timeout => clearTimeout(timeout))
    timeouts = []

    forEachUser(element => {
      hideUser(element)
      if (element.id === tag) {
        showUser(element)
      }
      else if (element.classList.contains(tag)) {
        timeouts.push(setTimeout(() => showUser(element), i))
        i = Math.min(i + 100, 1000)
      }
    })
  }

  function resetUsersFilter() {
    forEachUser(showUser)
  }

  function setupUserFilter() {
    on('click', '.tag', (element) => {
      filterUsersByTag(element.text)
    })
    on('click', '#user-tags .reset-filter', resetUsersFilter)
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

    const users = Array.from(document.querySelectorAll('#selenide-users .user:not(.russia)'))
    if (users.length) {
      const index = Math.floor(Math.random() * users.length);
      showUser(users[index])
      setTimeout(() => hideUser(users[index]), 5050)
      setTimeout(showRandomUser, 5000)
    }
  }

  function redirectToDomainPage() {
    console.log(window.location.href, ' : ', window.location.pathname)
    if (window.location.href.startsWith('https://test.selenide.org') && !window.location.pathname.startsWith('/test-page')) {
      window.location = 'https://test.selenide.org/test-page'
    }
  }

  setupLanguageSelector();
  setupDocumentationMenu();
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
  redirectToDomainPage();
})();
