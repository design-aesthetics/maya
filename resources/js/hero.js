import EmblaCarousel from 'embla-carousel'
import { addPrevNextBtnsClickHandlers } from './EmblaCarouselArrowButtons'
import { addDotBtnsAndClickHandlers } from './EmblaCarouselDotButton'
import '../css/embla.css'
import { gsap } from 'gsap';
import Autoplay from 'embla-carousel-autoplay'

document.addEventListener('DOMContentLoaded', () => {

    const OPTIONS = { align: 'start', loop: false, containScroll: 'trimSnaps' }
    const emblaNode = document.querySelector('.embla')

    if (!emblaNode) {
        console.error('Embla container not found')
        return
    }

    const viewportNode = emblaNode.querySelector('.embla__viewport')
    const prevBtnNode = document.querySelector('.embla__button--prev')
    const nextBtnNode = document.querySelector('.embla__button--next')
    const dotsNode = document.querySelector('.embla__dots')
    const slides = emblaNode.querySelectorAll('.embla__slide')

    console.log({
        emblaNode,
        viewportNode,
        prevBtnNode,
        nextBtnNode,
        dotsNode
    })


    if (!viewportNode) {
        console.error('Viewport not found')
        return
    }

    const emblaApi = EmblaCarousel(viewportNode, OPTIONS, [Autoplay()])

    // Check for force animation parameter
    const urlParams = new URLSearchParams(window.location.search);
    const forceAnimation = urlParams.get('forceAnimation') === 'true';

    // Clear localStorage if force animation is set
    if (forceAnimation) {
        localStorage.removeItem('heroAnimationsShown');
    }


    // Check if animations have been shown before
    let animationsShown = localStorage.getItem('heroAnimationsShown');

    const animateSlide = (index) => {
        console.log('animateSlide function called for index:', index);

        if (animationsShown && !forceAnimation) {
            console.log('Animations already shown and not forced, returning early');
            return;
        }

        console.log('Proceeding with animation');

        const slide = slides[index];
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        const h1 = slide.querySelector('h1');
        const p = slide.querySelector('p');
        const buttons = Array.from(slide.querySelectorAll('*')).filter(el =>
            el.tagName === 'BUTTON' ||
            el.tagName === 'A' ||
            (typeof el.className === 'string' && el.className.includes('button')) ||
            el.getAttribute('role') === 'button'
        );
        const ratings = slide.querySelectorAll('.py-5');
        const img = slide.querySelector('img');

        console.log('Elements found:', {
            h1: !!h1,
            p: !!p,
            buttons: buttons.length,
            ratings: ratings.length,
            img: !!img
        });

        if (h1) tl.from(h1, { opacity: 0, y: 50, duration: 1 });
        if (p) tl.from(p, { opacity: 0, y: 30, duration: 1 }, '-=0.5');
        if (buttons.length) tl.from(buttons, { opacity: 0, y: 20, stagger: 0.2, duration: 0.8 }, '-=0.5');
        if (ratings.length) tl.from(ratings, { opacity: 0, x: -30, stagger: 0.2, duration: 0.8 }, '-=0.5');
        if (img) tl.from(img, { opacity: 0, scale: 0.9, duration: 1 }, '-=1');

        console.log('Animation timeline created');

        // Mark animations as shown
        localStorage.setItem('heroAnimationsShown', 'true');
    };

    // Animate the initial slide only if not shown before
    if (!animationsShown || forceAnimation) {
        console.log('Running animation');
        animateSlide(0);
        animationsShown = true;
    } else {
        console.log('Animations already shown, skipping');
    }


    const onNavButtonClick = (emblaApi) => {
        // const autoplay = emblaApi?.plugins()?.autoplay
        // if (!autoplay) return

        // const resetOrStop =
        //     autoplay.options.stopOnInteraction === false
        //         ? autoplay.reset
        //         : autoplay.stop

        // resetOrStop()
    }

    if (prevBtnNode && nextBtnNode) {
        const removePrevNextBtnsClickHandlers = addPrevNextBtnsClickHandlers(
            emblaApi,
            prevBtnNode,
            nextBtnNode,
            onNavButtonClick
        )
        emblaApi.on('destroy', removePrevNextBtnsClickHandlers)
    } else {
        console.warn('Previous or Next button not found')
    }

    if (dotsNode) {
        const removeDotBtnsAndClickHandlers = addDotBtnsAndClickHandlers(
            emblaApi,
            dotsNode,
            onNavButtonClick
        )
        emblaApi.on('destroy', removeDotBtnsAndClickHandlers)
    } else {
        console.warn('Dots container not found')
    }

})
