function modalFunction () {
    const link = document.querySelector('.form__register-link');
    const modalContainer = document.querySelector('.cadastro');
    const closeButton = document.querySelector('.fechar__modal');
    link.addEventListener("click", (event) => {
        event.preventDefault();
        modalContainer.showModal();
    });

    closeButton.addEventListener("click", () => {
        modalContainer.close();
    });

    modalContainer.addEventListener("click", (event) => {
        if(event.target === modalContainer) {
            modalContainer.close()
        }
    });
}
modalFunction()