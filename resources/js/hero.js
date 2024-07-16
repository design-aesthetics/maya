import EmblaCarousel from 'embla-carousel'
import { addPrevNextBtnsClickHandlers } from './EmblaCarouselArrowButtons'
import { addDotBtnsAndClickHandlers } from './EmblaCarouselDotButton'
import Autoplay from 'embla-carousel-autoplay'
import '../css/embla.css'

document.addEventListener('DOMContentLoaded', () => {
    const OPTIONS = { align: 'start', loop: true, containScroll: 'trimSnaps' }

    const emblaNode = document.querySelector('.embla')

    if (!emblaNode) {
        console.error('Embla container not found')
        return
    }

    const viewportNode = emblaNode.querySelector('.embla__viewport')
    const prevBtnNode = document.querySelector('.embla__button--prev')
    const nextBtnNode = document.querySelector('.embla__button--next')
    const dotsNode = document.querySelector('.embla__dots')

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

    const onNavButtonClick = (emblaApi) => {
        const autoplay = emblaApi?.plugins()?.autoplay
        if (!autoplay) return

        const resetOrStop =
            autoplay.options.stopOnInteraction === false
                ? autoplay.reset
                : autoplay.stop

        resetOrStop()
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
