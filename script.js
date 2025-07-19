// Simple search/filter for cheat sheet cards
const searchInput = document.getElementById('searchInput');
const cards = document.querySelectorAll('.cheatsheet-card');

searchInput.addEventListener('input', function () {
  const query = this.value.toLowerCase();
  cards.forEach(card => {
    const text = card.textContent.toLowerCase();
    card.style.display = text.includes(query) ? '' : 'none';
  });
});
