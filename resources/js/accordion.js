export const accordions = () => {
    document.addEventListener('DOMContentLoaded', () => {
        const expandBtn = document.querySelector(".expand");
        const expandedDiv = document.querySelector(".top");

        expandBtn.addEventListener('click', () => {
            expandedDiv.classList.toggle('!visible');
            alert('what is the problem');
        });
    });
}