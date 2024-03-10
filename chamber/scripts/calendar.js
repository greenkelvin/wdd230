document.addEventListener('DOMContentLoaded', function() {
    const tbody = document.querySelector('.calendar tbody');
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();
    
    // Get the number of days in the current month
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  
    // Get the first day of the month (0-6, where 0 is Sunday and 6 is Saturday)
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  
    // Generate calendar days
    let date = 1;
    for (let i = 0; i < 6; i++) { // Assuming maximum of 6 weeks in a month
      const row = document.createElement('tr');
      for (let j = 0; j < 7; j++) { // 7 days in a week
        const cell = document.createElement('td');
        if (i === 0 && j < firstDayOfMonth) {
          cell.textContent = '';
        } else if (date > daysInMonth) {
          cell.textContent = '';
        } else {
          cell.textContent = date;
          if (date === today.getDate() && currentMonth === today.getMonth() && currentYear === today.getFullYear()) {
            cell.classList.add('today');
          }
          date++;
        }
        row.appendChild(cell);
      }
      tbody.appendChild(row);
    }
  });