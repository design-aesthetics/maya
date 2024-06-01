export const accordions = () => {
    const accordionItems = document.querySelectorAll('.accordion');
    accordionItems.forEach((item) => {
        const expandBtn = item.querySelector(".expand");
        const expandedDiv = item.querySelector(".detail");

        expandBtn.addEventListener('click', () => {
            expandedDiv.classList.toggle("!block")
            if (expandedDiv.classList.contains('hidden')) {
                expandBtn.textContent = "-";
            } else {
                expandBtn.textContent = "+";
            }
        });
    })
}

