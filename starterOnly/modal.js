const loadModals = () => {
  // J'aimerais rendre le header visible en responsive lorsqu'on ouvre le formulaire.
  // Ensuite, lorsqu'on descend dans le formulaire, le header disparait. Si on remonte, le header réapparait.

  // DOM elements
  const modalbg = document.querySelector(".bground");
  const modalContent = modalbg.querySelector(".content");
  const modalBtns = document.querySelectorAll(".modal-btn");
  const closeBtns = document.querySelectorAll(".close-btn");

  // launch modal form
  function launchModal() {
    modalbg.style.display = "block";
  }

  // close modal form (fonction)
  function closeModal() {
    modalbg.style.display = "none";
  }

  // Fermer la modale
  closeBtns.forEach((btn) => btn.addEventListener("click", closeModal()));

  // launch modal event
  modalBtns.forEach((btn) => btn.addEventListener("click", launchModal));

  document.addEventListener("keydown", (e) => {
    e.key === "Escape" && closeModal();
  });

  modalbg.addEventListener("click", (e) => {
    closeModal();
  });

  modalContent.addEventListener("click", (e) => {
    e.stopPropagation();
  });
};

export default loadModals;
