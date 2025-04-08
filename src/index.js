import "../styles/app.scss";

const modal = document.getElementById("modal");
const openModalButton = document.querySelector(".footer__cta-button");
const closeButton = document.querySelector(".modal__close-button");
const form = document.getElementById("contact-form");

openModalButton.addEventListener("click", () => {
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
});

closeButton.addEventListener("click", () => {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  modal.style.display = "none";
  document.body.style.overflow = "auto";
  form.reset();
});
