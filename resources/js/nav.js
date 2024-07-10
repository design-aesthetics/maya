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

// * top bar slide animation
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

// * treatment logic for sub nav bar
export const initSubmenu = (parentSelector, submenuSelector) => {
    try {
        const parentElement = document.querySelector(parentSelector);
        const submenuElement = document.querySelector(submenuSelector);

        if (parentElement && submenuElement) {
            let timeoutId;

            submenuElement.classList.add('hidden');

            const showMenu = () => {
                if (window.innerWidth >= 1024) {
                    gsap.to(submenuElement, {
                        opacity: 1,
                        duration: 0.3,
                        ease: 'power2.out',
                        onStart: () => {
                            submenuElement.classList.remove('hidden');
                            submenuElement.classList.remove('mt-1');
                        },
                    });
                }
            };

            const hideMenu = () => {
                gsap.to(submenuElement, {
                    opacity: 0,
                    duration: 0.3,
                    ease: 'power2.out',
                    onComplete: () => {
                        submenuElement.classList.add('hidden');
                        submenuElement.classList.add('mt-1');
                    },
                });
            };

            const handleResize = () => {
                if (window.innerWidth < 1024) {
                    hideMenu();
                }
            };

            parentElement.addEventListener('mouseenter', () => {
                clearTimeout(timeoutId);
                timeoutId = setTimeout(showMenu, 300);
            });

            parentElement.addEventListener('mouseleave', () => {
                clearTimeout(timeoutId);
                timeoutId = setTimeout(hideMenu, 300);
            });

            submenuElement.addEventListener('mouseenter', () => {
                clearTimeout(timeoutId);
            });

            submenuElement.addEventListener('mouseleave', () => {
                timeoutId = setTimeout(hideMenu, 300);
            });

            parentElement.addEventListener('click', () => {
                if (window.innerWidth >= 1024) {
                    if (submenuElement.classList.contains('hidden')) {
                        showMenu();
                    } else {
                        hideMenu();
                    }
                }
            });
            window.addEventListener('resize', handleResize);

            // Initial check
            handleResize();
        }
    } catch (error) {
        console.error('Error in initSubmenu:', error);
    }
};


document.addEventListener('DOMContentLoaded', () => {
    initStickyNavbar();
    initMovingBannerText();
    initSubmenu('#treatment-full-dropdown-button', '#treatment-menu-full-dropdown');
    initSubmenu('#product-full-dropdown-button', '#product-menu-full-dropdown');
    initSubmenu('#blog-full-dropdown-button', '#blog-menu-full-dropdown');

});
