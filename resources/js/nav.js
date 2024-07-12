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

            const showMenu = () => {
                if (window.innerWidth >= 1024) {
                    clearTimeout(timeoutId);
                    gsap.to(submenuElement, {
                        opacity: 1,
                        duration: 0.3,
                        ease: 'power2.out',
                        onStart: () => {
                            submenuElement.classList.remove('hidden');
                        },
                    });
                }
            };

            const hideMenu = () => {
                if (window.innerWidth >= 1024) {
                    timeoutId = setTimeout(() => {
                        gsap.to(submenuElement, {
                            opacity: 0,
                            duration: 0.3,
                            ease: 'power2.out',
                            onComplete: () => {
                                submenuElement.classList.add('hidden');
                            },
                        });
                    }, 300);
                }
            };


            parentElement.addEventListener('mouseenter', showMenu);
            parentElement.addEventListener('mouseleave', hideMenu);
            submenuElement.addEventListener('mouseenter', () => clearTimeout(timeoutId));
            submenuElement.addEventListener('mouseleave', hideMenu);

        }
    } catch (error) {
        console.error('Error in initSubmenu:', error);
    }
};

// * mobile menu
export const initMobileMenu = () => {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenuClose = document.getElementById('mobile-menu-close');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    const mobileSubmenuToggles = document.querySelectorAll('.mobile-submenu-toggle, .mobile-submenu-toggle-secondary');

    let scrollPosition = 0;

    const lockScroll = () => {
        scrollPosition = window.scrollY;
        document.body.style.overflow = 'hidden';
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollPosition}px`;
        document.body.style.width = '100%';
    };

    const unlockScroll = () => {
        document.body.style.removeProperty('overflow');
        document.body.style.removeProperty('position');
        document.body.style.removeProperty('top');
        document.body.style.removeProperty('width');
        window.scrollTo(0, scrollPosition);
    };

    const toggleMenu = () => {
        const isMenuOpen = !mobileMenu.classList.contains('-translate-x-full');
        mobileMenu.classList.toggle('-translate-x-full');
        mobileMenuOverlay.classList.toggle('hidden');

        if (isMenuOpen) {
            unlockScroll();
        } else {
            lockScroll();
        }
    };

    const toggleSubmenu = (toggle, isSecondary = false) => {
        const submenu = toggle.nextElementSibling;
        const plusMinus = toggle.querySelector('.plus-minus');

        submenu.classList.toggle('hidden');
        plusMinus.classList.toggle('opened');
        plusMinus.classList.toggle('closed');

        // Toggle aria-expanded
        const isExpanded = !submenu.classList.contains('hidden');
        toggle.setAttribute('aria-expanded', isExpanded);

        if (!isSecondary) {
            // Close all secondary submenus when closing a primary submenu
            if (!isExpanded) {
                submenu.querySelectorAll('.mobile-submenu-secondary').forEach(secondarySubmenu => {
                    secondarySubmenu.classList.add('hidden');
                });
                submenu.querySelectorAll('.mobile-submenu-toggle-secondary').forEach(secondaryToggle => {
                    secondaryToggle.setAttribute('aria-expanded', 'false');
                    const secondaryPlusMinus = secondaryToggle.querySelector('.plus-minus');
                    secondaryPlusMinus.classList.remove('opened');
                    secondaryPlusMinus.classList.add('closed');
                });
            }
        }
    };

    if (mobileMenuToggle && mobileMenuClose && mobileMenu && mobileMenuOverlay) {
        mobileMenuToggle.addEventListener('click', toggleMenu);
        mobileMenuClose.addEventListener('click', toggleMenu);
        mobileMenuOverlay.addEventListener('click', toggleMenu);

        mobileSubmenuToggles.forEach((toggle) => {
            toggle.addEventListener('click', (e) => {
                e.preventDefault();
                toggleSubmenu(toggle, toggle.classList.contains('mobile-submenu-toggle-secondary'));
            });
        });
    }
};

const handleResize = () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    const desktopSubmenus = document.querySelectorAll('.sub-nav-dropdown-container');

    if (window.innerWidth >= 1024) {
        if (mobileMenu) {
            mobileMenu.classList.add('-translate-x-full');
        }
        if (mobileMenuOverlay) {
            mobileMenuOverlay.classList.add('hidden');
        }
        document.body.classList.remove('overflow-hidden');
        document.documentElement.classList.remove('overflow-hidden');
    } else {
        desktopSubmenus.forEach(submenu => {
            submenu.classList.add('hidden');
        });
    }
};

document.addEventListener('DOMContentLoaded', () => {
    initStickyNavbar();
    initMovingBannerText();
    initSubmenu('#treatment-full-dropdown-button', '#treatment-menu-full-dropdown');
    initSubmenu('#product-full-dropdown-button', '#product-menu-full-dropdown');
    initSubmenu('#blog-full-dropdown-button', '#blog-menu-full-dropdown');
    initMobileMenu();

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check
});
