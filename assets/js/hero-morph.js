(function () {
  var hero = document.getElementById('hero-section');
  var pill = document.getElementById('pill-nav');
  var modeBtn = document.getElementById('mode');
  if (!hero || !pill) return;

  window.addEventListener('scroll', function () {
    var r = hero.getBoundingClientRect();
    var total = hero.offsetHeight;
    var gone = Math.max(0, -r.top);
    var p = Math.min(1, gone / (total * 0.6));

    hero.style.opacity = 1 - p;
    pill.style.opacity = p;
    pill.style.pointerEvents = p > 0.5 ? 'auto' : 'none';
    pill.setAttribute('aria-hidden', String(p < 0.5));

    if (modeBtn) {
      modeBtn.style.opacity = 1 - p;
      modeBtn.style.transform = 'translateY(' + (-p * 125) + 'px)';
      modeBtn.style.pointerEvents = p > 2 ? 'none' : 'auto';
    }
  }, { passive: true });

  var pillMode = document.getElementById('pill-mode');
  if (pillMode) {
    pillMode.addEventListener('click', function () {
      var btn = document.getElementById('mode');
      if (btn) btn.click();
    });
  }
})();
