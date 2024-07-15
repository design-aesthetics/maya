window.openModal = function (imageSrc) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    modal.classList.remove('hidden');
    modalImage.src = imageSrc;
    document.body.style.overflow = 'hidden';
}


window.closeModal = function () {
    const modal = document.getElementById('imageModal');
    modal.classList.add('hidden');
    document.body.style.overflow = '';
}


document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});
