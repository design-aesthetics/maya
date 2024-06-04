import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initStickyNavbar() {
    const navbar = document.getElementById('navbar');

    ScrollTrigger.create({
        trigger: navbar,
        start: 'top top',
        end: '+=1000',
        scrub: true,
        onEnter: () => {
            gsap.to(navbar, {
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 100,
                backgroundColor: 'white',
                duration: 0.1,
                ease: 'power2.out',
            });
        },
        onLeaveBack: () => {
            gsap.to(navbar, {
                position: 'static',
                zIndex: 'auto',
                backgroundColor: 'transparent',
                duration: 0.1,
                ease: 'power2.out',
            });
        },
    });
}

export const treatmentsDropdown = () => {
    const dropdownButton = document.querySelector('#mega-menu-full-dropdown-button');
    const dropdownMenu = document.querySelector('#mega-menu-full-dropdown');

    dropdownButton.addEventListener('click', function () {
        dropdownMenu.classList.toggle('hidden');
    });
}

export const initMovingBannerText = () => {
    const bannerTextContainer = document.querySelector('#bnr');
    const container = document.querySelector('.topb-content');

    if (bannerTextContainer && container) {
        const bannerWidth = bannerTextContainer.scrollWidth;
        const containerWidth = container.clientWidth;
        const duration = 10000;

        const startMovingText = () => {
            gsap.to(bannerTextContainer, {
                x: `-${bannerWidth / 2}px`,
                duration: duration / 1000,
                ease: 'none',
                repeat: -1,
            });
        };

        if (bannerWidth > containerWidth) {
            container.style.overflow = 'hidden';
            startMovingText();
        }
    }
};
