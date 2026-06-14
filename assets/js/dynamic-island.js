(function () {
  var HIGHLIGHT_CLASS = 'contrib-row--highlight';
  var HIGHLIGHT_DURATION = 2000;

  function scrollToRow(projectId) {
    var row = document.querySelector('.project-contributions-table tr[data-project-id="' + projectId + '"]');
    if (!row) return;

    row.scrollIntoView({ behavior: 'smooth', block: 'center' });

    row.classList.remove(HIGHLIGHT_CLASS);
    // Force reflow so re-adding the class re-triggers the animation
    void row.offsetWidth;
    row.classList.add(HIGHLIGHT_CLASS);

    setTimeout(function () {
      row.classList.remove(HIGHLIGHT_CLASS);
    }, HIGHLIGHT_DURATION);
  }

  // Only attach to the first set of cards (not the aria-hidden duplicates)
  var cards = document.querySelectorAll('.project-card[data-project-id]:not([aria-hidden])');
  for (var i = 0; i < cards.length; i++) {
    (function (card) {
      card.style.cursor = 'pointer';
      card.addEventListener('click', function () {
        scrollToRow(card.getAttribute('data-project-id'));
      });
      card.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          scrollToRow(card.getAttribute('data-project-id'));
        }
      });
    })(cards[i]);
  }
})();
