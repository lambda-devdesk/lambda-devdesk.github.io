let modal = document.querySelector(".modal");
let showModal = () => modal.classList.add("visible");
let hideModal = () => modal.classList.remove("visible");

// When "Sign up" button is clicked, display the modal
let ctaButton = document.querySelector(".cta");
ctaButton.addEventListener("click", () => showModal());

let closeButton = document.querySelector(".close-button")
closeButton.addEventListener("click", () => hideModal());

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", event => {
  if (event.target == modal) {
    hideModal();
  }
});
