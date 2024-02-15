const slider = document.getElementById('slider');
const cards = document.querySelectorAll('.card');
const body = document.body;
const myCheckbox = document.getElementById('myCheckbox');


slider.addEventListener('click', function() {
    if (myCheckbox.checked) {
    body.style.backgroundColor = 'black';
    cards.forEach(card => {
        card.style.backgroundColor = '#333';
        card.style.color = 'white';
      });
    } else {
    body.style.backgroundColor = '#364156';
    cards.forEach(card => {
        card.style.backgroundColor = '#CDCDCD';
        card.style.color = 'black';
      });
    }
});