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


// * treatment logic for sub nav bar
class TreatmentNavigation {
    constructor() {
        this.menuContainer = document.querySelector('#treatment-menu-full-dropdown .services-dropdown');
        this.init();
    }

    async init() {
        if (!this.menuContainer) {
            console.error('Treatment menu container not found');
            return;
        }
        await this.fetchMenuData();
        this.renderMenu();
        this.addEventListeners();
        this.showDefaultCategory();
    }

    async fetchMenuData() {
        try {
            const response = await fetch('/api/treatments-menu');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            this.menuData = await response.json();
        } catch (error) {
            console.error('Error fetching menu data:', error);
        }
    }

    renderMenu() {
        if (!this.menuData) {
            console.error('Menu data not available');
            return;
        }
        const menuHtml = this.generateMenuHtml(this.menuData);
        this.menuContainer.innerHTML = menuHtml;
    }

    generateMenuHtml(categories) {
        return `
            <div class="categories-column">
                ${categories.map((category, index) => `
                    <div class="category-item ${index === 0 ? 'active' : ''}" data-category="${category.slug}">
                        <span class="line-clamp-1 text-sm text-gray-600 hover:text-gray-900">${category.name}</span>
                        <svg class="arrow" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                        </svg>
                    </div>
                `).join('')}
            </div>
            <div class="services-column"></div>
            <div class="subservices-column"></div>
        `;
    }

    addEventListeners() {
        const categoryItems = this.menuContainer.querySelectorAll('.category-item');
        categoryItems.forEach(item => {
            item.addEventListener('mouseenter', () => this.showServices(item));
        });
    }

    showServices(categoryItem) {
        const categoryItems = this.menuContainer.querySelectorAll('.category-item');
        categoryItems.forEach(item => {
            const isActive = item === categoryItem;
            item.classList.toggle('active', isActive);
            if (isActive) {
                this.animateArrow(item.querySelector('.arrow'), true);
            } else if (item.classList.contains('was-active')) {
                this.animateArrow(item.querySelector('.arrow'), false);
                item.classList.remove('was-active');
            }
        });
        categoryItem.classList.add('was-active');

        const categorySlug = categoryItem.dataset.category;
        const category = this.menuData.find(cat => cat.slug === categorySlug);

        if (category && category.services) {
            const servicesColumn = this.menuContainer.querySelector('.services-column');
            servicesColumn.innerHTML = `
                ${category.services.map(service => `
                    <div class="service-item" data-service="${service.slug}">
                        <span class="line-clamp-1 text-sm text-gray-600 hover:text-gray-900">${service.name}</span>
                        ${service.children && service.children.length > 0 ? `
                            <svg class="arrow" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                            </svg>
                        ` : ''}
                    </div>
                `).join('')}
            `;

            this.addServiceListeners();

            // Activate the first service and show its subservices by default
            const firstService = servicesColumn.querySelector('.service-item');
            if (firstService) {
                firstService.classList.add('active');
                this.showSubservices(firstService);
            }
        }
    }

    addServiceListeners() {
        const serviceItems = this.menuContainer.querySelectorAll('.service-item');
        serviceItems.forEach(item => {
            item.addEventListener('mouseenter', () => this.showSubservices(item));
            item.addEventListener('click', (e) => {
                if (!item.querySelector('.arrow')) {
                    const categorySlug = this.menuContainer.querySelector('.category-item.active').dataset.category;
                    const serviceSlug = item.dataset.service;
                    window.location.href = `/treatments/${categorySlug}/${serviceSlug}`;
                }
            });
        });
    }

    showSubservices(serviceItem) {
        const serviceItems = this.menuContainer.querySelectorAll('.service-item');
        serviceItems.forEach(item => {
            const isActive = item === serviceItem;
            item.classList.toggle('active', isActive);
            const arrow = item.querySelector('.arrow');
            if (arrow) {
                if (isActive) {
                    this.animateArrow(arrow, true);
                } else if (item.classList.contains('was-active')) {
                    this.animateArrow(arrow, false);
                    item.classList.remove('was-active');
                }
            }
        });
        serviceItem.classList.add('was-active');

        const serviceSlug = serviceItem.dataset.service;
        const category = this.menuData.find(cat => cat.services.some(service => service.slug === serviceSlug));
        const service = category.services.find(service => service.slug === serviceSlug);

        const subservicesColumn = this.menuContainer.querySelector('.subservices-column');
        if (service.children && service.children.length > 0) {
            subservicesColumn.innerHTML = `
                ${service.children.map(subservice => `
                    <div class="subservice-item" data-subservice="${subservice.slug}" data-url="${subservice.url}">
                        <div class="flex flex-grow items-center">
                            <span class="line-clamp-1 text-sm text-gray-600 hover:text-gray-900">${subservice.name}</span>
                        </div>
                    </div>
                `).join('')}
            `;
            this.addSubserviceListeners();
        } else if (service.main_image) {
            subservicesColumn.innerHTML = `
                <div class="service-image-container max-h-[250px]">
                    <img src="${service.main_image}" alt="${service.name}" class="service-image">
                </div>
            `;
        } else {
            subservicesColumn.innerHTML = '';
        }
    }

    addSubserviceListeners() {
        const subserviceItems = this.menuContainer.querySelectorAll('.subservice-item');
        subserviceItems.forEach(item => {
            item.addEventListener('click', () => {
                window.location.href = item.dataset.url;
            });
        });
    }

    showDefaultCategory() {
        const firstCategory = this.menuContainer.querySelector('.category-item');
        if (firstCategory) {
            this.showServices(firstCategory);
        }
    }

    animateArrow(arrow, isActive) {
        if (arrow) {
            const timeline = gsap.timeline();

            if (isActive) {
                timeline.to(arrow, {
                    scaleY: 0.1,
                    duration: 0.08,
                    ease: "power2.in"
                })
                    .to(arrow, {
                        rotationY: 180,
                        duration: 0.15,
                        ease: "power2.inOut"
                    })
                    .to(arrow, {
                        scaleY: 1,
                        duration: 0.08,
                        ease: "power2.out"
                    });
            } else {
                timeline.to(arrow, {
                    scaleY: 0.1,
                    duration: 0.08,
                    ease: "power2.in"
                })
                    .to(arrow, {
                        rotationY: 0,
                        duration: 0.15,
                        ease: "power2.inOut"
                    })
                    .to(arrow, {
                        scaleY: 1,
                        duration: 0.08,
                        ease: "power2.out"
                    });
            }
        }
    }
}


document.addEventListener('DOMContentLoaded', () => {
    initStickyNavbar();
    initMovingBannerText();
    initSubmenu('#treatment-full-dropdown-button', '#treatment-menu-full-dropdown');
    initSubmenu('#product-full-dropdown-button', '#product-menu-full-dropdown');
    initSubmenu('#blog-full-dropdown-button', '#blog-menu-full-dropdown');
    initMobileMenu();
    new TreatmentNavigation();

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check
});
