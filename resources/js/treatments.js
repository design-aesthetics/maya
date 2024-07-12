const initTreatmentAccordion = () => {
    const accordionToggles = document.querySelectorAll('.treatment-accordion-toggle');

    const toggleAccordion = (toggle) => {
        const content = toggle.nextElementSibling;
        const plusMinus = toggle.querySelector('.plus-minus');

        // Close all other accordions
        accordionToggles.forEach((otherToggle) => {
            if (otherToggle !== toggle) {
                otherToggle.nextElementSibling.classList.add('hidden');
                otherToggle.querySelector('.plus-minus').classList.remove('opened');
                otherToggle.querySelector('.plus-minus').classList.add('closed');
                otherToggle.setAttribute('aria-expanded', 'false');
            }
        });

        // Toggle the clicked accordion
        content.classList.toggle('hidden');
        plusMinus.classList.toggle('opened');
        plusMinus.classList.toggle('closed');

        const isExpanded = !content.classList.contains('hidden');
        toggle.setAttribute('aria-expanded', isExpanded.toString());
    };

    accordionToggles.forEach((toggle) => {
        toggle.addEventListener('click', (e) => {
            e.preventDefault();
            toggleAccordion(toggle);
        });
    });
};


const initReadMore = () => {
    const descriptions = document.querySelectorAll('.treatment-description');
    const readMoreButtons = document.querySelectorAll('.read-more-btn');

    readMoreButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const description = descriptions[index];
            const fullText = description.getAttribute('data-full-text');

            if (button.textContent === 'Read more') {
                description.textContent = fullText;
                button.textContent = 'Read less';
            } else {
                description.textContent = fullText.slice(0, 250) + '...';
                button.textContent = 'Read more';
            }
        });
    });
};

const initAll = () => {
    initTreatmentAccordion();
    initReadMore();
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
} else {
    initAll();
}

// Make functions available globally if needed
window.initTreatmentAccordion = initTreatmentAccordion;
window.initReadMore = initReadMore;
