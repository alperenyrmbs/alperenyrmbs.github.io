(() => {
  'use strict';
  if (window.portfolioAnalyticsInitialized) return;
  window.portfolioAnalyticsInitialized = true;
  const id = document.currentScript.dataset.measurementId;
  if (!/^G-[A-Z0-9]+$/.test(id)) return;
  const banner = document.getElementById('analytics-consent');
  const settings = document.getElementById('analytics-settings');
  const key = 'portfolio-analytics-consent-v1';
  const lifetime = 180 * 86400000;
  let loaded = false;
  function readChoice() {
    try {
      const saved = JSON.parse(localStorage.getItem(key));
      if (saved && ['granted', 'denied'].includes(saved.choice) &&
          Number.isFinite(saved.time) && saved.time <= Date.now() &&
          Date.now() - saved.time < lifetime) return saved.choice;
    } catch (_) { /* Missing or inaccessible storage means no consent. */ }
    return null;
  }
  function start() {
    if (loaded) return;
    loaded = true;
    window['ga-disable-' + id] = false;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('consent', 'default', {
      analytics_storage: 'granted', ad_storage: 'denied',
      ad_user_data: 'denied', ad_personalization: 'denied'
    });
    window.gtag('js', new Date());
    window.gtag('config', id, {
      allow_google_signals: false, allow_ad_personalization_signals: false
    });
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(id);
    document.head.appendChild(script);
  }
  function clearCookies() {
    const domains = ['', location.hostname, '.' + location.hostname];
    document.cookie.split(';').forEach((part) => {
      const name = part.split('=')[0].trim();
      if (name !== '_ga' && !name.startsWith('_ga_') && name !== '_gid' && !name.startsWith('_gat')) return;
      domains.forEach((domain) => {
        document.cookie = name + '=; Max-Age=0; path=/; SameSite=Lax' +
          (domain ? '; domain=' + domain : '');
      });
    });
  }
  function choose(choice) {
    try { localStorage.setItem(key, JSON.stringify({choice, time: Date.now()})); } catch (_) {}
    banner.hidden = true;
    settings.focus();
    if (choice === 'granted') start();
    else {
      window['ga-disable-' + id] = true;
      clearCookies();
      // Unload the already running library without sending a consent-update ping.
      if (loaded) location.reload();
    }
  }
  settings.hidden = false;
  settings.addEventListener('click', () => {
    banner.hidden = false;
    banner.querySelector('button').focus();
  });
  banner.querySelectorAll('[data-analytics-choice]').forEach((button) => {
    button.addEventListener('click', () => choose(button.dataset.analyticsChoice));
  });
  const choice = readChoice();
  window['ga-disable-' + id] = choice !== 'granted';
  if (choice === 'granted') start();
  else {
    clearCookies();
    banner.hidden = choice === 'denied';
  }
  window.addEventListener('storage', (event) => {
    if (event.key !== key) return;
    if (readChoice() !== 'granted') {
      window['ga-disable-' + id] = true;
      clearCookies();
      if (loaded) location.reload();
      else banner.hidden = readChoice() === 'denied';
    } else start();
  });
})();
