import { gsap } from 'gsap';

export const heroAnimations = () => {
    const one = document.querySelector(".show-1");
    const two = document.querySelector(".show-2");
    const btn = document.querySelector(".btn");
    const featuredImage = document.querySelector(".featured-image");

    if (one && two && btn && featuredImage) {
        const tl = gsap.timeline({
            ease: "power3", duration: .6
        });
        tl.from(one, {
            opacity: 0,
            y: "-100",
        });

        tl.from(two, {
            opacity: 0,
            y: -100,
        });

        tl.from(btn, {
            opacity: 0,
            y: 50,
        });

        tl.from(featuredImage, {
            opacity: 0,
            scale: 0,
            ease: "circ.in"
        });
    }
}
