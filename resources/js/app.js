require('./bootstrap');
import { initLocomotiveScroll } from './loco_init.js';
import { accordions } from './accordion.js';
import { heroAnimations } from './animations.js';


document.addEventListener('DOMContentLoaded', () => {
    heroAnimations();
    initLocomotiveScroll();
    accordions();
});
