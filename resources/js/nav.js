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
    try {
        const dropdownButton = document.querySelector('#mega-menu-full-dropdown-button');
        const dropdownMenu = document.querySelector('#mega-menu-full-dropdown');

        if (dropdownButton && dropdownMenu) {
            dropdownButton.addEventListener('click', function () {
                dropdownMenu.classList.toggle('hidden');
            });
        }
    } catch (error) {
        console.error('Error in treatmentsDropdown:', error);
    }
}

export const initMovingBannerText = () => {
    try {
        const bannerTextContainer = document.querySelector('#bnr');
        const container = document.querySelector('.topb-content');

        if (bannerTextContainer && container) {
            const bannerText = bannerTextContainer.querySelector('.banner-text');
            const bannerWidth = bannerText.offsetWidth;
            const containerWidth = container.clientWidth;
            const duration = 10000;

            // Calculate the number of times to duplicate the banner text
            const duplicateCount = Math.ceil(containerWidth / bannerWidth) + 1;

            // Duplicate the banner text
            for (let i = 1; i < duplicateCount; i++) {
                const clonedBannerText = bannerText.cloneNode(true);
                bannerTextContainer.appendChild(clonedBannerText);
            }

            const totalBannerWidth = bannerWidth * duplicateCount;

            const startMovingText = () => {
                gsap.to(bannerTextContainer, {
                    x: `-${totalBannerWidth / 2}px`,
                    duration: duration / 1000,
                    ease: 'none',
                    repeat: -1,
                });
            };

            container.style.overflow = 'hidden';
            startMovingText();
        }
    } catch (error) {
        console.error('Error in initMovingBannerText:', error);
    }
};
