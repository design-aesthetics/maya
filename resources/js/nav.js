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
class treatmentNavigation {
    constructor() {
        this.menuContainer = document.querySelector('#treatment-menu-full-dropdown .services-dropdown');
        this.init();
    }

    init() {
        if (!this.menuContainer) {
            console.error('Treatment menu container not found');
            return;
        }
        this.renderMenu();
        this.addEventListeners();
        this.showDefaultSubcategories();
    }
    renderMenu() {
        const menuData = JSON.parse(this.menuContainer.dataset.menu);
        const menuHtml = this.generateMenuHtml(menuData);
        this.menuContainer.innerHTML = menuHtml;
    }

    generateMenuHtml(items) {
        return `
            <div class="categories-column">
                ${items.map((category, index) => `
                    <div class="category-item ${index === 0 ? 'active' : ''}" data-category="${category.title}">
                        ${category.title}
                        <svg class="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
                            <path d="M139.9 50.01c-.14-4.66 3.45-9.06 8.02-9.89 3.53-.76 7.22.66 9.62 3.28 66.2 66.14 132.35 132.34 198.53 198.5 2.54 2.33 4.37 5.68 3.83 9.22-.32 4.07-3.66 6.79-6.32 9.48-65.53 65.48-130.98 131.03-196.53 196.47-3.34 3.6-9.33 4.06-13.2 1.05-4.81-3.42-5.35-11.17-.95-15.15C207.21 378.63 271.55 314.33 335.85 250 271.73 185.86 207.6 121.73 143.46 57.6c-2.09-1.96-3.6-4.66-3.56-7.59Z"/>
                        </svg>
                    </div>
                `).join('')}
            </div>
            <div class="subcategories-column"></div>
            <div class="details-column"></div>
        `;
    }

    addEventListeners() {
        const categoryItems = this.menuContainer.querySelectorAll('.category-item');
        categoryItems.forEach(item => {
            item.addEventListener('mouseenter', () => this.showSubcategories(item));
        });
    }

    animateArrow(arrow, isActive) {
        if (isActive) return; // Don't animate if already active

        gsap.to(arrow, {
            scaleY: 0.5, // Shrink height
            scaleX: 0,
            duration: 0.15,
            ease: "power2.inOut",
            onComplete: () => {
                gsap.set(arrow, { scaleX: isActive ? 1 : -1 });
                gsap.to(arrow, {
                    scaleY: 1, // Restore height
                    scaleX: isActive ? 1 : -1,
                    duration: 0.15,
                    ease: "power2.inOut"
                });
            }
        });
    }

    showSubcategories(categoryItem) {
        const categoryItems = this.menuContainer.querySelectorAll('.category-item');
        categoryItems.forEach(item => {
            if (item !== categoryItem) {
                item.classList.remove('active');
                this.animateArrow(item.querySelector('.arrow'), false);
            }
        });

        if (!categoryItem.classList.contains('active')) {
            categoryItem.classList.add('active');
            this.animateArrow(categoryItem.querySelector('.arrow'), true);
        }

        const categoryTitle = categoryItem.dataset.category;
        const menuData = JSON.parse(this.menuContainer.dataset.menu);
        const category = menuData.find(cat => cat.title === categoryTitle);

        if (category && category.items) {
            const subcategoriesColumn = this.menuContainer.querySelector('.subcategories-column');
            subcategoriesColumn.innerHTML = `
                <h3 class="subcategory-title">${categoryTitle}</h3>
                ${category.items.map((item, index) => `
                    <div class="subcategory-item ${index === 0 ? 'active' : ''}" data-subcategory="${item.label}">
                        ${item.label}
                        <svg class="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
                            <path d="M139.9 50.01c-.14-4.66 3.45-9.06 8.02-9.89 3.53-.76 7.22.66 9.62 3.28 66.2 66.14 132.35 132.34 198.53 198.5 2.54 2.33 4.37 5.68 3.83 9.22-.32 4.07-3.66 6.79-6.32 9.48-65.53 65.48-130.98 131.03-196.53 196.47-3.34 3.6-9.33 4.06-13.2 1.05-4.81-3.42-5.35-11.17-.95-15.15C207.21 378.63 271.55 314.33 335.85 250 271.73 185.86 207.6 121.73 143.46 57.6c-2.09-1.96-3.6-4.66-3.56-7.59Z"/>
                        </svg>
                    </div>
                `).join('')}
            `;

            this.addSubcategoryListeners();

            // Animate the first subcategory arrow
            const firstSubcategory = subcategoriesColumn.querySelector('.subcategory-item');
            if (firstSubcategory) {
                this.animateArrow(firstSubcategory.querySelector('.arrow'), true);
            }
        }
    }

    addSubcategoryListeners() {
        const subcategoryItems = this.menuContainer.querySelectorAll('.subcategory-item');
        subcategoryItems.forEach(item => {
            item.addEventListener('mouseenter', () => this.showDetails(item));
        });
    }

    showDetails(subcategoryItem) {
        const subcategoryItems = this.menuContainer.querySelectorAll('.subcategory-item');
        subcategoryItems.forEach(item => {
            if (item !== subcategoryItem) {
                item.classList.remove('active');
                this.animateArrow(item.querySelector('.arrow'), false);
            }
        });

        if (!subcategoryItem.classList.contains('active')) {
            subcategoryItem.classList.add('active');
            this.animateArrow(subcategoryItem.querySelector('.arrow'), true);
        }

        // This is where you'd add logic to show details for the selected subcategory
        const detailsColumn = this.menuContainer.querySelector('.details-column');
        detailsColumn.innerHTML = `
            <h3 class="details-title">${subcategoryItem.dataset.subcategory}</h3>
            <p>Details for ${subcategoryItem.dataset.subcategory} go here.</p>
        `;
    }

    showDefaultSubcategories() {
        const firstCategory = this.menuContainer.querySelector('.category-item');
        if (firstCategory) {
            this.showSubcategories(firstCategory);

            // Select the first subcategory by default
            const firstSubcategory = this.menuContainer.querySelector('.subcategory-item');
            if (firstSubcategory) {
                this.showDetails(firstSubcategory);
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
    new treatmentNavigation();

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check
});
