const link_dark = document.getElementById("dark-link")
const link_light = document.getElementById("light-link")
const link_fr = document.getElementById("fr-link")
const link_en = document.getElementById("en-link")
const css_link = document.getElementById("css-link")

link_dark.addEventListener('click', function() {
    css_link.href = './src/color/dark.css';
});

link_light.addEventListener('click', function() {
    css_link.href = './src/color/style.css';
});