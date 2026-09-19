/* ==========================================================================
   DANIEL KUMAR M · UX PORTFOLIO
   site.js, the only script on the site.

     1. Theme control   light/dark utility, remembered in localStorage
     2. Current page    marks the active nav item from <body data-page="...">
     3. In-page anchors smooth scroll for #footer and #s-... section links
     4. Figure plates    a plate that has to scroll sideways becomes focusable,
                         so it can be reached and scrolled from the keyboard

   Nothing here is needed to read the site. With JavaScript off, every page,
   link and image still works.
   ========================================================================== */
(function () {
  'use strict';

  /* --- 1. THEME CONTROL -------------------------------------------------- */
  var ICONS = { light: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>', dark: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>' };
  var KEY = 'dk-portfolio-theme';
  var btn = document.getElementById('themeBtn');

  function saved(v) {
    try { return v === undefined ? localStorage.getItem(KEY) : localStorage.setItem(KEY, v); }
    catch (e) { return null; }   /* file:// or private mode, session only */
  }

  var theme = saved() ||
    (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  function applyTheme() {
    document.documentElement.setAttribute('data-theme', theme);
    document.getElementById('themeIcon').innerHTML = ICONS[theme];
    document.getElementById('themeLabel').textContent = theme === 'light' ? 'Light' : 'Dark';
    var next = theme === 'light' ? 'dark' : 'light';
    btn.setAttribute('aria-label', 'Theme: ' + theme + '. Switch to ' + next + ' theme.');
    btn.setAttribute('title', 'Switch to ' + next + ' theme');
  }

  if (btn) {
    btn.addEventListener('click', function () {
      theme = theme === 'light' ? 'dark' : 'light';
      applyTheme();
      saved(theme);
    });
    applyTheme();
  }

  /* --- 2. CURRENT PAGE ---------------------------------------------------
     Each page sets <body data-page="home|work|about|case-study">.
     A case study belongs to Work, so Work stays marked while reading one.   */
  var page = document.body.getAttribute('data-page');
  var section = page === 'case-study' ? 'work' : page;
  var links = document.querySelectorAll('.nav a[data-nav]');
  for (var i = 0; i < links.length; i++) {
    if (links[i].getAttribute('data-nav') === section) links[i].setAttribute('aria-current', 'page');
    else links[i].removeAttribute('aria-current');
  }

  /* --- 3. IN-PAGE ANCHORS ------------------------------------------------
     #footer and the #s-... case-study section links scroll smoothly and do
     not change the address, so a reload lands back on the same page.        */
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href^="#"]');
    if (!a) return;
    var href = a.getAttribute('href');
    if (href === '#') return;
    var el = document.getElementById(href.slice(1));
    if (!el) return;
    e.preventDefault();
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    /* Move focus to the target as a normal anchor would. Without this the skip
       link scrolls but leaves focus in the header, and the next Tab returns the
       keyboard user to the top of the page. */
    if (!el.hasAttribute('tabindex')) el.setAttribute('tabindex', '-1');
    el.focus({ preventScroll: true });
  });

  /* ---------------------------------------------------------------------
     4. Figure plates
     Interface reconstructions are dense desktop drawings. On a narrow screen
     the plate scrolls sideways instead of shrinking the labels to nothing.
     A region that scrolls has to be reachable from the keyboard, but one that
     does not should not sit in the tab order for no reason, so the attribute
     is set from the measurement rather than written into the markup.
     --------------------------------------------------------------------- */
  function figurePlates() {
    var plates = document.querySelectorAll('.fig');
    for (var i = 0; i < plates.length; i++) {
      var f = plates[i];
      if (f.scrollWidth > f.clientWidth + 1) {
        f.setAttribute('tabindex', '0');
        f.setAttribute('role', 'group');
      } else {
        f.removeAttribute('tabindex');
        f.removeAttribute('role');
      }
    }
  }
  figurePlates();
  var figTimer;
  window.addEventListener('resize', function () {
    clearTimeout(figTimer);
    figTimer = setTimeout(figurePlates, 150);
  });

})();
