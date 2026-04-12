(function () {
  var pill = document.getElementById('pill-nav');
  var overlay = document.getElementById('pill-overlay');
  if (!pill || !overlay) return;

  var detail = pill.querySelector('.pill-nav__detail');
  var closeBtn = pill.querySelector('.pill-nav__close');
  var nameEl = pill.querySelector('.pill-nav__detail-name');
  var descEl = pill.querySelector('.pill-nav__detail-desc');
  var stackEl = pill.querySelector('.pill-nav__detail-stack');
  var featuresEl = pill.querySelector('.pill-nav__detail-features');

  if (!detail || !nameEl || !descEl || !stackEl || !featuresEl) return;

  // Index project data by id
  var dataMap = {};
  var rawData = window.__PROJECT_DATA || [];
  for (var i = 0; i < rawData.length; i++) {
    dataMap[rawData[i].id] = rawData[i];
  }

  var isOpen = false;
  var triggerCard = null;

  // Tracks any in-flight close cleanup so we can cancel it if a new open fires first
  var closeCleanup = null;

  function clearCloseCleanup() {
    if (!closeCleanup) return;
    pill.removeEventListener('transitionend', closeCleanup.fn);
    clearTimeout(closeCleanup.timer);
    closeCleanup = null;
  }

  function doCloseCleanup() {
    // Guard against double-call (transitionend + setTimeout race)
    clearCloseCleanup();
    detail.style.display = '';
    detail.style.overflowY = '';
    pill.style.borderRadius = '';
    nameEl.textContent = '';
    descEl.textContent = '';
    stackEl.innerHTML = '';
    featuresEl.innerHTML = '';
    overlay.classList.remove('pill-overlay--active'); // safety: ensure overlay is gone
    pill.removeAttribute('data-island-open');
    window.dispatchEvent(new Event('scroll'));
  }

  function openIsland(projectId, trigger) {
    var project = dataMap[projectId];
    if (!project || isOpen) return;

    // Cancel any stale close cleanup that hasn't fired yet —
    // without this, the stale transitionend listener fires mid-open and corrupts state.
    clearCloseCleanup();

    isOpen = true;
    triggerCard = trigger;

    // Populate detail content
    nameEl.textContent = project.name;
    descEl.textContent = project.description;

    stackEl.innerHTML = '';
    var stack = project.stack || [];
    for (var j = 0; j < stack.length; j++) {
      var tag = document.createElement('span');
      tag.className = 'pill-nav__detail-stack-tag';
      tag.textContent = stack[j];
      stackEl.appendChild(tag);
    }

    featuresEl.innerHTML = '';
    var features = project.features || [];
    for (var k = 0; k < features.length; k++) {
      var li = document.createElement('li');
      li.textContent = features[k];
      featuresEl.appendChild(li);
    }

    // Signal hero-morph.js to stop manipulating pill opacity
    pill.setAttribute('data-island-open', '');
    pill.style.opacity = '1';
    pill.style.pointerEvents = 'auto';

    // Hide scrollbar during the drop; restore after transition
    detail.style.overflowY = 'hidden';

    // Expand — height grows downward
    pill.classList.add('pill-nav--expanded');
    overlay.classList.add('pill-overlay--active');

    // Restore overflowY after open transition (with fallback)
    var openTimer;
    function onOpen(e) {
      if (e.propertyName !== 'height') return;
      pill.removeEventListener('transitionend', onOpen);
      clearTimeout(openTimer);
      detail.style.overflowY = '';
    }
    pill.addEventListener('transitionend', onOpen);
    openTimer = setTimeout(function () {
      pill.removeEventListener('transitionend', onOpen);
      detail.style.overflowY = '';
    }, 600);

    // Lock scroll
    document.documentElement.style.overflow = 'hidden';

    // ARIA
    pill.setAttribute('role', 'dialog');
    pill.setAttribute('aria-modal', 'true');
    pill.setAttribute('aria-hidden', 'false');
    pill.setAttribute('aria-label', 'Project details: ' + project.name);

    if (closeBtn) closeBtn.focus();
  }

  function closeIsland() {
    if (!isOpen) return;
    isOpen = false;

    // Keep detail visible during collapse so content shows while curtain rises
    detail.style.display = 'flex';
    detail.style.overflowY = 'hidden';

    // Hold border-radius at 28px — clears after transition to avoid shape glitch
    pill.style.borderRadius = '28px';

    // Collapse — height goes back to 48px
    pill.classList.remove('pill-nav--expanded');
    overlay.classList.remove('pill-overlay--active');

    // Unlock scroll immediately — don't wait for transition
    document.documentElement.style.overflow = '';

    // Remove dialog ARIA immediately
    pill.removeAttribute('role');
    pill.removeAttribute('aria-modal');
    pill.removeAttribute('aria-label');

    // Clean up after collapse (transitionend + setTimeout fallback)
    function onTransitionEnd(e) {
      if (e.propertyName !== 'height') return;
      doCloseCleanup();
    }
    var timer = setTimeout(doCloseCleanup, 600);
    closeCleanup = { fn: onTransitionEnd, timer: timer };
    pill.addEventListener('transitionend', onTransitionEnd);

    // Return focus to trigger card
    if (triggerCard) {
      triggerCard.focus();
      triggerCard = null;
    }
  }

  // Close button
  if (closeBtn) {
    closeBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      closeIsland();
    });
  }

  // Overlay click
  overlay.addEventListener('click', closeIsland);

  // Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && isOpen) {
      closeIsland();
    }
  });

  // Focus trap inside expanded pill
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Tab' || !isOpen) return;

    var focusable = pill.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (focusable.length === 0) return;

    var first = focusable[0];
    var last = focusable[focusable.length - 1];

    if (e.shiftKey) {
      if (document.activeElement === first) {
        e.preventDefault();
        last.focus();
      }
    } else {
      if (document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });

  // Attach click/keyboard handlers to all project cards
  var cards = document.querySelectorAll('.project-card[data-project-id]');
  for (var ci = 0; ci < cards.length; ci++) {
    (function (card) {
      card.addEventListener('click', function () {
        openIsland(card.getAttribute('data-project-id'), card);
      });
      card.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openIsland(card.getAttribute('data-project-id'), card);
        }
      });
    })(cards[ci]);
  }
})();
