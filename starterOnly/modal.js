function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => {
  btn.addEventListener("click", launchModal);
});

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// #1 - fermeture bouton modal

function closeModal() {
  modalbg.style.display = "none";
}
const modalCloseBtn = modalbg.querySelector(".close");
modalCloseBtn.addEventListener("click", closeModal);

// #2 - Implémenter entrées du formulaire - Cf HTML - fait

// #3 - Implémenter -
