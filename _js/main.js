import { showModal, hideModal } from "./modal";

document.addEventListener("DOMContentLoaded", () => {
    const from = document.getElementById("miformulario");
    const closeBtn = document.getElementById("close-modal");
    from.addEventListener("submit", (e) => {
        e.preventDefault();
        showModal();
        console.log("click click")
    });

    closeBtn.addEventListener("click", hideModal);

});



