require('./bootstrap');
import { initializeHeroSwiper } from './hero.js';
import { initLocomotiveScroll } from './loco_init.js';
import { initStickyNavbar } from './nav.js';
import { accordions } from './accordion.js';
import { heroAnimations } from './animations.js';
import { treatmentsDropdown } from './nav.js';

document.addEventListener('DOMContentLoaded', () => {
    heroAnimations();
    initLocomotiveScroll();
    initializeHeroSwiper();
    initStickyNavbar();
    accordions();
    treatmentsDropdown();
});
