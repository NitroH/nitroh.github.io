const Element_change = document.querySelector('#ScrollEvent')

window.addEventListener('scroll', () => {
    const scroll_value = window.scrollY
    Element_change.style.marginLeft = `${scroll_value - 500}px`;
});