function imgSlider(element) {
    const heroImage = document.getElementById('main-hero-image');
    heroImage.src = element.getAttribute('data-src');
}

document.getElementById('nav-toggle').addEventListener('click', () => {
    document.getElementById('nav-links').classList.toggle('show');
});
