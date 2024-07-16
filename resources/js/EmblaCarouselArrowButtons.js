const addTogglePrevNextBtnsActive = (emblaApi, prevBtn, nextBtn) => {
    const togglePrevNextBtnsState = () => {
        if (!prevBtn || !nextBtn) return;

        if (emblaApi.canScrollPrev()) prevBtn.removeAttribute('disabled')
        else prevBtn.setAttribute('disabled', 'disabled')

        if (emblaApi.canScrollNext()) nextBtn.removeAttribute('disabled')
        else nextBtn.setAttribute('disabled', 'disabled')
    }

    emblaApi
        .on('select', togglePrevNextBtnsState)
        .on('init', togglePrevNextBtnsState)
        .on('reInit', togglePrevNextBtnsState)

    return () => {
        if (prevBtn) prevBtn.removeAttribute('disabled')
        if (nextBtn) nextBtn.removeAttribute('disabled')
    }
}

export const addPrevNextBtnsClickHandlers = (
    emblaApi,
    prevBtn,
    nextBtn,
    onButtonClick
) => {
    if (!prevBtn || !nextBtn) {
        console.warn('Previous or Next button not provided to addPrevNextBtnsClickHandlers');
        return () => { };
    }

    const scrollPrev = () => {
        emblaApi.scrollPrev()
        if (onButtonClick) onButtonClick(emblaApi)
    }
    const scrollNext = () => {
        emblaApi.scrollNext()
        if (onButtonClick) onButtonClick(emblaApi)
    }
    prevBtn.addEventListener('click', scrollPrev, false)
    nextBtn.addEventListener('click', scrollNext, false)

    const removeTogglePrevNextBtnsActive = addTogglePrevNextBtnsActive(
        emblaApi,
        prevBtn,
        nextBtn
    )

    return () => {
        removeTogglePrevNextBtnsActive()
        prevBtn.removeEventListener('click', scrollPrev, false)
        nextBtn.removeEventListener('click', scrollNext, false)
    }
}
