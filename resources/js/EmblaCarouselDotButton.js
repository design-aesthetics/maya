export const addDotBtnsAndClickHandlers = (
    emblaApi,
    dotsNode,
    onButtonClick
) => {
    if (!dotsNode) {
        console.warn('Dots container not provided to addDotBtnsAndClickHandlers');
        return () => { };
    }

    let dotNodes = []

    const addDotBtnsWithClickHandlers = () => {
        dotsNode.innerHTML = emblaApi
            .scrollSnapList()
            .map(() => '<button class="embla__dot" type="button"></button>')
            .join('')

        const scrollTo = (index) => {
            emblaApi.scrollTo(index)
            if (onButtonClick) onButtonClick(emblaApi)
        }

        dotNodes = Array.from(dotsNode.querySelectorAll('.embla__dot'))
        dotNodes.forEach((dotNode, index) => {
            dotNode.addEventListener('click', () => scrollTo(index), false)
        })
    }

    const toggleDotBtnsActive = () => {
        if (dotNodes.length === 0) return;
        const previous = emblaApi.previousScrollSnap()
        const selected = emblaApi.selectedScrollSnap()
        if (dotNodes[previous]) dotNodes[previous].classList.remove('embla__dot--selected')
        if (dotNodes[selected]) dotNodes[selected].classList.add('embla__dot--selected')
    }

    emblaApi
        .on('init', addDotBtnsWithClickHandlers)
        .on('reInit', addDotBtnsWithClickHandlers)
        .on('init', toggleDotBtnsActive)
        .on('reInit', toggleDotBtnsActive)
        .on('select', toggleDotBtnsActive)

    return () => {
        dotsNode.innerHTML = ''
    }
}
