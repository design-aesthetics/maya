require('./bootstrap');
import { initializeHeroSwiper } from './hero.js';
import { initLocomotiveScroll } from './loco_init.js';
import { initStickyNavbar } from './nav.js';
import { accordions } from './accordion.js';
import { heroAppear } from './hero.js';
import { treatmentsDropdown } from './nav.js';

document.addEventListener('DOMContentLoaded', () => {
    initLocomotiveScroll();
    initializeHeroSwiper();
    initStickyNavbar();
    accordions();
    heroAppear();
    treatmentsDropdown();
});
