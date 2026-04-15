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

  function setupUkraineBanner() {
    const DAYS_MS = 14 * 24 * 60 * 60 * 1000;
    const MAX_VIEWS = 4;
    const DISMISS_KEY = 'ukraineBannerDismissedAt';
    const COUNT_KEY = 'ukraineBannerShownCount';

    const banner = document.getElementById('donate_banner');
    const restoreBtn = document.getElementById('donate_restore_btn');
    const closeBtn = document.getElementById('donate_close_btn');
    if (!restoreBtn) return;

    function setState(dismissed) {
      if (banner) banner.style.display = dismissed ? 'none' : 'block';
      restoreBtn.style.display = dismissed ? 'inline-block' : 'none';
    }

    let dismissed = false;
    try {
      const dismissedAt = parseInt(localStorage.getItem(DISMISS_KEY) || '0', 10);
      const now = Date.now();
      if (dismissedAt && (now - dismissedAt) < DAYS_MS) {
        dismissed = true;
      } else {
        if (dismissedAt) {
          localStorage.removeItem(DISMISS_KEY);
          localStorage.removeItem(COUNT_KEY);
        }
        if (banner) {
          const count = parseInt(localStorage.getItem(COUNT_KEY) || '0', 10) + 1;
          localStorage.setItem(COUNT_KEY, String(count));
          if (count > MAX_VIEWS) {
            localStorage.setItem(DISMISS_KEY, String(now));
            localStorage.removeItem(COUNT_KEY);
            dismissed = true;
          }
        }
      }
    } catch (e) {}

    setState(dismissed);

    closeBtn?.addEventListener('click', () => {
      try {
        localStorage.setItem(DISMISS_KEY, String(Date.now()));
        localStorage.removeItem(COUNT_KEY);
      } catch (e) {}
      setState(true);
    });

    restoreBtn.addEventListener('click', () => {
        localStorage.removeItem(DISMISS_KEY);
        localStorage.removeItem(COUNT_KEY);
      setState(false);
    });
  }

  setupDocumentationMenu();
  setupUkraineBanner();
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
