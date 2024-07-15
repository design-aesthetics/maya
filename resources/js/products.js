const initProductAccordion = () => {
    const accordionToggles = document.querySelectorAll('.product-accordion-toggle');

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
    const readMoreButtons = document.querySelectorAll('.read-more-btn');

    readMoreButtons.forEach(button => {
        const descriptionContainer = button.previousElementSibling.previousElementSibling;
        const fullText = descriptionContainer.innerHTML;
        console.log('Full text:', fullText);

        const maxLength = 180; // Adjust this value as needed
        const truncatedText = truncateHTML(fullText, maxLength);
        console.log('Truncated text:', truncatedText);

        if (truncatedText.length < fullText.length) {
            descriptionContainer.innerHTML = truncatedText;

            button.addEventListener('click', function () {
                if (this.textContent === 'Read more') {
                    descriptionContainer.innerHTML = fullText;
                    this.textContent = 'Read less';
                } else {
                    descriptionContainer.innerHTML = truncatedText;
                    this.textContent = 'Read more';
                }
            });
        } else {
            button.style.display = 'none';
        }
    });
};

// Helper function to truncate HTML content
function truncateHTML(html, maxLength) {
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    let truncated = '';
    let charCount = 0;

    function traverseNodes(node) {
        if (charCount >= maxLength) return;

        if (node.nodeType === Node.TEXT_NODE) {
            const remainingLength = maxLength - charCount;
            const text = node.textContent.slice(0, remainingLength);
            truncated += text;
            charCount += text.length;
        } else if (node.nodeType === Node.ELEMENT_NODE) {
            truncated += `<${node.tagName.toLowerCase()}>`;
            for (const childNode of node.childNodes) {
                traverseNodes(childNode);
            }
            truncated += `</${node.tagName.toLowerCase()}>`;
        }
    }

    for (const node of tmp.childNodes) {
        traverseNodes(node);
        if (charCount >= maxLength) break;
    }

    console.log('Char count:', charCount);
    console.log('Max length:', maxLength);

    return charCount < maxLength ? truncated : truncated;
}

const initAll = () => {
    initReadMore();
    initProductAccordion();
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
} else {
    initAll();
}

// Make functions available globally if needed
window.initProductAccordion = initProductAccordion;
window.initReadMore = initReadMore;
