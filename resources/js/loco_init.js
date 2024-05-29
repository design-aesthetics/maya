import LocomotiveScroll from 'locomotive-scroll';

export function initLocomotiveScroll() {
    const locomotiveScroll = new LocomotiveScroll({
        lerp: 0.1, // Lerp intensity, increase for more smoothing (0.1 - 1)
        smooth: true,
        orientation: 'vertical',
        smoothWheel: true,
        smoothTouch: true,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    return locomotiveScroll;
}
