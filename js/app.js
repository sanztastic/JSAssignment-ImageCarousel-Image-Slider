import Carousel from './Carousel.js';

document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelectorAll('.carousel-container');
    // let shift = 0;
    // let index = 0;
    // const imageArray = Array.from(carousel[0].children);
    // imageArray.forEach(element => {
    //     element.style.left = `${shift}px`;
    //     shift += 1000;
    // });
    // document.addEventListener('keyup', (e) => {
    //     if (e.key === 'ArrowRight') {
    //         imageArray[index].style.left = index + 1000 + 'px';
    //     } else if (e.key === 'ArrowLeft') {

    //     }
    // })
    carousel.forEach(container => {
        const slider = new Carousel(container);
        slider.init();
        slider.start();
    })
});