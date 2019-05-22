let modal = document.querySelector(".modal");
let showModal = () => modal.classList.add("visible");
let hideModal = () => modal.classList.remove("visible");

// When "Sign up" button is clicked, display the modal
let ctaButton = document.querySelector(".cta");
ctaButton.addEventListener("click", () => showModal());

// When the close button is clicked, hide the modal
let closeButton = document.querySelector(".close-button")
closeButton.addEventListener("click", () => hideModal());

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", event => {
  if (event.target == modal) {
    hideModal();
  }
});

let hiddenInputs = document.querySelectorAll(".form-container input.hidden");
let loginButton = document.querySelector(".form-container button");

let registerButton = document.querySelector(".register-button");
registerButton.addEventListener("click", () => {
  // When "Don't have an account?" is clicked, remove hidden class and set
  // "Log in" button to say "Register" instead.
  hiddenInputs.forEach(input => input.classList.remove("hidden"));
  loginButton.innerHTML = "Register";
});
