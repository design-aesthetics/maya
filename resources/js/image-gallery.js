import PhotoSwipeLightbox from 'photoswipe/lightbox';
import PhotoSwipe from 'photoswipe';
import 'photoswipe/style.css';

document.addEventListener('DOMContentLoaded', function () {
    const lightbox = new PhotoSwipeLightbox({
        gallery: '#gallery',
        children: 'a',
        pswpModule: PhotoSwipe,
        closeOnVerticalDrag: true,
        clickToCloseNonZoomable: true,

        // Add these options to ensure UI elements are shown
        showHideAnimationType: 'fade',
        showAnimationDuration: 300,
        hideAnimationDuration: 300,

        // Ensure close button is visible
        showCloseButton: true,

        // Enable default UI
        baseClass: 'pswp--ui--fit',

        // Enable zooming
        allowPanToNext: true,
        allowMouseDrag: true,

        // Enable keyboard navigation
        escKey: true,
        arrowKeys: true
    });

    lightbox.on('uiRegister', function () {
        lightbox.pswp.ui.registerElement({
            name: 'custom-caption',
            order: 9,
            isButton: false,
            appendTo: 'root',
            html: 'Caption text',
            onInit: (el, pswp) => {
                lightbox.pswp.on('change', () => {
                    const currSlideElement = lightbox.pswp.currSlide.data.element;
                    let captionHTML = '';
                    if (currSlideElement) {
                        const hiddenCaption = currSlideElement.querySelector('.hidden-caption');
                        if (hiddenCaption) {
                            captionHTML = hiddenCaption.innerHTML;
                        } else {
                            captionHTML = currSlideElement.querySelector('img').getAttribute('alt');
                        }
                    }
                    el.innerHTML = captionHTML || '';
                });
            }
        });
    });

    lightbox.init();
});
