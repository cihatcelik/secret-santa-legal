// Dil seçimi: ?lang=tr|en, yoksa tarayıcı dili. JS kapalıysa iki dil de görünür.
(function () {
  var SUPPORTED = ['tr', 'en'];
  var params = new URLSearchParams(location.search);
  var browser = (navigator.language || 'en').slice(0, 2).toLowerCase();
  var initial = params.get('lang');
  if (SUPPORTED.indexOf(initial) < 0) initial = browser === 'tr' ? 'tr' : 'en';

  function apply(lang) {
    document.documentElement.lang = lang;
    document.querySelectorAll('body [lang]').forEach(function (el) {
      el.classList.toggle('active', el.getAttribute('lang') === lang);
    });
    document.querySelectorAll('[data-set-lang]').forEach(function (button) {
      button.setAttribute('aria-pressed', String(button.dataset.setLang === lang));
    });
    var title = document.querySelector('meta[name="title-' + lang + '"]');
    if (title) document.title = title.content;
  }

  document.documentElement.classList.add('js');
  document.addEventListener('DOMContentLoaded', function () {
    apply(initial);
    document.querySelectorAll('[data-set-lang]').forEach(function (button) {
      button.addEventListener('click', function () {
        var lang = button.dataset.setLang;
        apply(lang);
        var url = new URL(location.href);
        url.searchParams.set('lang', lang);
        history.replaceState(null, '', url);
      });
    });
  });
})();
