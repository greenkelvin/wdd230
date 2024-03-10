document.addEventListener("DOMContentLoaded", function () {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();

    const lastModifiedDate = new Date(document.lastModified);
    const lastModifiedYear = lastModifiedDate.getFullYear();

    document.getElementById("copyright").innerText = `© ${currentYear} Ithaca Chamber | Kelvin Green | WDD 230 Project | `;
    document.getElementById("lastModified").innerText = `Last Modified: ${lastModifiedDate.toDateString()}`;
    document.getElementById("currentDate").innerText = `${currentMonth}/${currentDay}/${currentYear}`;
});