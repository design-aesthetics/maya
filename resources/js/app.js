require('./bootstrap');
import { initializeHeroSwiper } from './hero.js';
import { initLocomotiveScroll } from './loco_init.js';
import { initStickyNavbar } from './nav.js';
import { accordions } from './accordion.js';

document.addEventListener('DOMContentLoaded', () => {
    initLocomotiveScroll();
    initializeHeroSwiper();
    initStickyNavbar();
    accordions();

});
