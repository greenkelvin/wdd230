document.addEventListener("DOMContentLoaded", function () {
    const currentDate = new Date();

    const lastVisit = localStorage.getItem("lastVisit");

    if (!lastVisit) {
        document.getElementById("welcomeCard").innerText = "Welcome! Let us know if you have any questions.";
    } else {
        const lastVisitDate = new Date(lastVisit);

        const timeDiff = currentDate.getTime() - lastVisitDate.getTime();

        const daysSinceLastVisit = Math.floor(timeDiff / (1000 * 3600 * 24));
        if (daysSinceLastVisit === 0) {
            document.getElementById("welcomeCard").innerText = "Back so soon! Awesome!";
        } else {
            const message = daysSinceLastVisit === 1 ? `You last visited ${daysSinceLastVisit} day ago.` : `You last visited ${daysSinceLastVisit} days ago.`;
            document.getElementById("welcomeCard").innerText = message;
        }
    }

    localStorage.setItem("lastVisit", currentDate.toISOString());
});