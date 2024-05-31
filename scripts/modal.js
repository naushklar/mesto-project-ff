const openModal = (element) => {
  element.classList.add("popup_is-opened");
  document.addEventListener("keydown", closeModalOnEscape);
};

const closeModal = (element) => {
  element.classList.remove("popup_is-opened");
  document.removeEventListener("keydown", closeModalOnEscape);
};

const closeModalOnEscape = (evt) => {
  if (evt.key === "Escape") {
    const currentPopup = document.querySelector(".popup_is-opened");
    closeModal(currentPopup);
  }
};

const closeModalOnOverlay = (evt) => {
  if (evt.target === evt.currentTarget) {
    closeModal(evt.currentTarget);
  }
};

export {openModal, closeModal, closeModalOnEscape, closeModalOnOverlay};