(function () {
  // Hero fade + pill nav
  var hero = document.getElementById('hero-section');
  var pill = document.getElementById('pill-nav');
  var modeBtn = document.getElementById('mode');
  if (hero && pill) {
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
        modeBtn.style.pointerEvents = p > 0.5 ? 'none' : 'auto';
      }
    }, { passive: true });

    var pillMode = document.getElementById('pill-mode');
    if (pillMode) {
      pillMode.addEventListener('click', function () {
        var btn = document.getElementById('mode');
        if (btn) btn.click();
      });
    }
  }

  // GitHub contribution carousel
  var items = Array.from(document.querySelectorAll('.gc-item'));
  if (items.length) {
    var total = items.length;
    var current = total - 1; // start on current year (last item)

    function update() {
      var prev = (current - 1 + total) % total;
      var next = (current + 1) % total;
      items.forEach(function (item, i) {
        item.classList.remove('is-prev', 'is-next', 'is-hidden');
        if (i === current) {
          // active — no extra class, default styles apply
        } else if (i === prev) {
          item.classList.add('is-prev');
        } else if (i === next) {
          item.classList.add('is-next');
        } else {
          item.classList.add('is-hidden');
        }
      });
    }

    var prevBtn = document.querySelector('.gc-arrow--prev');
    var nextBtn = document.querySelector('.gc-arrow--next');

    if (prevBtn) prevBtn.addEventListener('click', function () {
      current = (current - 1 + total) % total;
      update();
    });
    if (nextBtn) nextBtn.addEventListener('click', function () {
      current = (current + 1) % total;
      update();
    });

    update();
  }
})();
