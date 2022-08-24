const Element_change = document.querySelector('#ScrollEvent');

    window.addEventListener('scroll', () => {
        const scroll_value = window.scrollY;
        Element_change.style.marginLeft = `${scroll_value - 500}px`;

        if(scroll_value >= 1400) {
            const scroll_value = 0;
            Element_change.style.marginLeft = `${scroll_value - 500}px`;
        } else{
            Element_change.innerHTML = "ABOUT ME";
        }
    });
