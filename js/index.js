let menuButton = document.getElementById('menu-button');
menuButton.addEventListener('click', () => {
    let menu = document.getElementById('menu-list');
    if(menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        menu.classList.add('visible');
    } else {
        menu.classList.remove('visible');
         menu.classList.add('hidden');
    }
});

let carouselIndex = 0;
const slideImage = () => {
    let elements = document.querySelectorAll('.carousel-element');
    if (carouselIndex >= elements.length)   carouselIndex = 0;
    if (carouselIndex < 0)  carouselIndex = elements.length - 1;
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.display = 'none';
    }
    elements[carouselIndex].style.display = 'block';
};

const createInterval = () => {
    return setInterval(() => {
            carouselIndex++;
            slideImage();
        }, 5000);
};

let sliderInterval = createInterval()

let arrowPrevious = document.getElementById('arrow-previous');
arrowPrevious.addEventListener('click', () => {
    carouselIndex--;
    slideImage();
    clearInterval(slideInterval);
    sliderInterval = createInterval();
});

let arrowNext = document.getElementById('arrow-next');
arrowNext.addEventListener('click', () => {
    carouselIndex++;
    slideImage();
    clearInterval(slideInterval);
    sliderInterval = createInterval();
});

