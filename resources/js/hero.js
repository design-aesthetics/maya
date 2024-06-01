import Swiper from 'swiper';
import 'swiper/css';
import { gsap } from 'gsap';

export const heroAppear = () => {
    const one = document.querySelector(".show-1");
    const two = document.querySelector(".show-2");
    const btn = document.querySelector(".btn");
    const featuredImage = document.querySelector(".featured-image");

    const tl = gsap.timeline({
        ease: "power3", duration: .6
    });
    tl.from(one, {
        opacity: 0,
        y: "-100",
    })

    tl.from(two, {
        opacity: 0,
        y: -100,
    })
    tl.from(btn, {
        opacity: 0,
        y: 50,
    })
    tl.from(featuredImage, {
        opacity: 0,
        scale: 0,
        ease: "circ.in"
    })


}

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

