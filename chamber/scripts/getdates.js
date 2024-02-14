document.addEventListener("DOMContentLoaded", function () {
    // Get the current year
    const currentYear = new Date().getFullYear();

    // Get the last modified date
    const lastModifiedDate = new Date(document.lastModified);
    const lastModifiedYear = lastModifiedDate.getFullYear();

    // Display the information
    document.getElementById("copyright").innerText = `© ${currentYear} Ithaca Chamber | Kelvin Green | WDD 230 Project | `;
    document.getElementById("lastModified").innerText = `Last Modified: ${lastModifiedDate.toDateString()}`;
});