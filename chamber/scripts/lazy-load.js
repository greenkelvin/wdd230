document.addEventListener("DOMContentLoaded", function () {
    const pictureElements = document.querySelectorAll('picture');

    pictureElements.forEach(picture => {
        const imgElements = picture.querySelectorAll('img');

        imgElements.forEach(img => {
            img.setAttribute('loading', 'lazy');
        });
    });
});