import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initStickyNavbar() {
    const navbar = document.getElementById('navbar');

    ScrollTrigger.create({
        trigger: navbar,
        start: 'top top',
        end: '+=1000',
        onEnter: () => {
            navbar.classList.add('fixed', 'top-0', 'left-0', 'right-0', 'z-100', 'bg-white');
        },
        onLeaveBack: () => {
            navbar.classList.remove('fixed', 'top-0', 'left-0', 'right-0', 'z-100', 'bg-white');
        },
    });
}