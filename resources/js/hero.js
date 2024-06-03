import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const initializeHeroSwiper = (sliderIdentifier) => {
    const swiper = new Swiper(`#swiper-container`, {
        navigation: {
            nextEl: `.swiper-button-next-${sliderIdentifier}`,
            prevEl: `.swiper-button-prev-${sliderIdentifier}`
        },
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
        },
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        on: {
            init: function () {
                const activeSlide = this.slides[this.activeIndex];
                activeSlide.classList.add('show');
            },
            slideChange: function () {
                const activeSlide = this.slides[this.activeIndex];
                const prevSlide = this.slides[this.previousIndex];

                prevSlide.classList.remove('show');
                activeSlide.classList.add('show');
            }
        }
    });

    return swiper;
};

export const heroSwiper = initializeHeroSwiper('1');
