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

  // Index project data by id
  var dataMap = {};
  var rawData = window.__PROJECT_DATA || [];
  for (var i = 0; i < rawData.length; i++) {
    dataMap[rawData[i].id] = rawData[i];
  }

  var isOpen = false;
  var triggerCard = null;

  function openIsland(projectId, trigger) {
    var project = dataMap[projectId];
    if (!project || isOpen) return;

    isOpen = true;
    triggerCard = trigger;

    // Populate detail content
    nameEl.textContent = project.name;
    descEl.textContent = project.description;

    // Stack badges
    stackEl.innerHTML = '';
    var stack = project.stack || [];
    for (var i = 0; i < stack.length; i++) {
      var tag = document.createElement('span');
      tag.className = 'pill-nav__detail-stack-tag';
      tag.textContent = stack[i];
      stackEl.appendChild(tag);
    }

    // Features list
    featuresEl.innerHTML = '';
    var features = project.features || [];
    for (var i = 0; i < features.length; i++) {
      var li = document.createElement('li');
      li.textContent = features[i];
      featuresEl.appendChild(li);
    }

    // Signal hero-morph.js to stop manipulating pill
    pill.setAttribute('data-island-open', '');
    pill.style.opacity = '1';
    pill.style.pointerEvents = 'auto';

    // Expand
    pill.classList.add('pill-nav--expanded');
    overlay.classList.add('pill-overlay--active');

    // Lock scroll
    document.documentElement.style.overflow = 'hidden';

    // ARIA
    pill.setAttribute('role', 'dialog');
    pill.setAttribute('aria-modal', 'true');
    pill.setAttribute('aria-hidden', 'false');
    pill.setAttribute('aria-label', 'Project details: ' + project.name);

    // Focus close button after transition
    setTimeout(function () {
      if (closeBtn) closeBtn.focus();
    }, 200);
  }

  function closeIsland() {
    if (!isOpen) return;
    isOpen = false;

    // Contract
    pill.classList.remove('pill-nav--expanded');
    overlay.classList.remove('pill-overlay--active');

    // Unlock scroll
    document.documentElement.style.overflow = '';

    // Remove dialog ARIA
    pill.removeAttribute('role');
    pill.removeAttribute('aria-modal');
    pill.removeAttribute('aria-label');

    // Let hero-morph.js resume after contraction completes
    function onTransitionEnd(e) {
      if (e.propertyName !== 'height') return;
      pill.removeEventListener('transitionend', onTransitionEnd);
      pill.removeAttribute('data-island-open');

      // Clear detail content
      nameEl.textContent = '';
      descEl.textContent = '';
      stackEl.innerHTML = '';
      featuresEl.innerHTML = '';

      // Trigger a scroll recalc so hero-morph.js re-evaluates opacity
      window.dispatchEvent(new Event('scroll'));
    }
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
  for (var i = 0; i < cards.length; i++) {
    (function (card) {
      card.addEventListener('click', function () {
        var id = card.getAttribute('data-project-id');
        openIsland(id, card);
      });

      card.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          var id = card.getAttribute('data-project-id');
          openIsland(id, card);
        }
      });
    })(cards[i]);
  }
})();
