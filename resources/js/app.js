require('./bootstrap');
import { treatmentsDropdown, initMovingBannerText, initStickyNavbar } from './nav.js';
import { initializeHeroSwiper } from './hero.js';
import { initLocomotiveScroll } from './loco_init.js';
import { accordions } from './accordion.js';
import { heroAnimations } from './animations.js';


document.addEventListener('DOMContentLoaded', () => {
    heroAnimations();
    initLocomotiveScroll();
    initializeHeroSwiper();
    initStickyNavbar();
    accordions();
    treatmentsDropdown();
    initMovingBannerText();
});
