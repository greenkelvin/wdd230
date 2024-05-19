const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData(url) {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets);
    displayProphets(data.prophets); // note that we reference the prophets array of the JSON data object, not just the object
  }

const prophets = getProphetData(url);

  const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
      // Create elements to add to the div.cards element
      let card = document.createElement('section');
      card.classList.add('card'); // Add 'card' class to the card element
      let fullName = document.createElement('h2'); // fill in the blank
      let birthdate = document.createElement('p'); // Birthdate element
      let birthplace = document.createElement('p'); // Birthplace element
      let portrait = document.createElement('img');
  
      // Build the h2 content out to show the prophet's full name
      fullName.textContent = `${prophet.name} ${prophet.lastname}`; // fill in the blank
      birthdate.textContent = `Date of Birth: ${prophet.birthdate}`;
      birthplace.textContent = `Place of Birth: ${prophet.birthplace}`;
      // Build the image portrait by setting all the relevant attributes
      portrait.setAttribute('src', prophet.imageurl);
      portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`); // fill in the blank
      portrait.setAttribute('loading', 'lazy');
      portrait.setAttribute('width', '340');
      portrait.setAttribute('height', '440');
  
      // Append the section(card) with the created elements
      card.appendChild(fullName); //fill in the blank
      card.appendChild(birthdate);
      card.appendChild(birthplace);
      card.appendChild(portrait);
  
      cards.appendChild(card);
    }); // end of arrow function and forEach loop
  }

  document.addEventListener('DOMContentLoaded', () => {
    getProphetData(url);
})