require('./bootstrap');
import { initializeHeroSwiper } from './hero.js';
import { initLocomotiveScroll } from './loco_init.js';
import { initStickyNavbar } from './nav.js';

document.addEventListener('DOMContentLoaded', () => {
    initLocomotiveScroll();
    initializeHeroSwiper();
    initStickyNavbar();

});
