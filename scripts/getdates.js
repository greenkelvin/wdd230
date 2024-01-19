document.addEventListener("DOMContentLoaded", function () {
    // Get the current year
    const currentYear = new Date().getFullYear();

    // Get the last modified date
    const lastModifiedDate = new Date(document.lastModified);
    const lastModifiedYear = lastModifiedDate.getFullYear();

    // Display the information
    document.getElementById("copyright").innerText = `© ${currentYear} \nKelvin Green \nIdaho`;
    document.getElementById("lastModified").innerText = `Last Modified: ${lastModifiedDate.toDateString()}`;
});