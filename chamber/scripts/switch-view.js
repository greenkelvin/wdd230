const gridBtn = document.getElementById('gridBtn');
const listBtn = document.getElementById('listBtn');
const container = document.getElementById('members');

// Function to fetch data from members.json and display companies as cards
async function displayGrid() {
    container.innerHTML = '';
    try {
      const response = await fetch('data/members.json');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      if (!Array.isArray(data.companies)) {
        throw new Error('Data does not contain an array of companies');
      }
      data.companies.forEach(company => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
        <img src="images/${company.image}" alt="${company.name} Logo">
        <h2>${company.name}</h2>
        <p>Address: ${company.address}</p>
        <p>Phone: ${company.phone}</p>
        <p>Website: <a href="${company.website}" target="_blank">${company.website}</a></p>
        <p>Membership Level: ${company.membershipLevel}</p>
        `;
        container.appendChild(card);
        container.classList.add('grid-view');
        container.classList.remove('list-view');
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

// Function to fetch data from members.json and display companies as a list
async function displayList() {
    container.innerHTML = '<ul class="list">';
    try {
      const response = await fetch('data/members.json');
      const jsonData = await response.json();
      const companies = jsonData.companies; // Access the companies array
      companies.forEach(company => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
          <strong>${company.name}</strong>
          <p>Address: ${company.address}</p>
          <p>Phone: ${company.phone}</p>
          <p>Website: <a href="${company.website}" target="_blank">${company.website}</a></p>
        `;
        container.appendChild(listItem);
        container.classList.remove('grid-view');
        container.classList.add('list-view');
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

// Event listeners for the buttons
gridBtn.addEventListener('click', () => {
  displayGrid();
});

listBtn.addEventListener('click', () => {
  displayList();
});

// Initial display (grid view by default)
displayGrid(); // Automatically display the grid with cards first
