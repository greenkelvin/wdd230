const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('click', () => {
    const currentIndex = Array.from(cards).findIndex(c => c === card);
    const nextIndex = (currentIndex + 1) % cards.length;
    
    cards.forEach(c => c.classList.remove('center-card', 'blurred'));
    card.classList.remove('center-card');
    card.classList.add('blurred');
    cards[nextIndex].classList.add('center-card');
  });
});