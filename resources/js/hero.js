import Swiper from 'swiper';
import 'swiper/css';

export function initializeHeroSwiper() {
    new Swiper('.swiper-container', {
        direction: 'horizontal',
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    // * if (heroSwiper) {
    // *     console.log('Swiper Initialized:', heroSwiper);
    // * }
}

