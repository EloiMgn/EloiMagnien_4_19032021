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
const close = document.querySelector(".close");
//form elements 
const first = document.getElementById("first");
const last = document.getElementById("last");
const email = document.getElementById("email");
const date = document.getElementById("date");
const quantity = document.getElementById("quantity");
const submitBtn = document.querySelector(".button");
const textControl = document.querySelector(".text-control");

// MODAL
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
close.addEventListener("click", closeModal);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// DATA VALIDATIONS 

/*  const firstLength = first.classList
 */ 

/* function firstLengthValidation (firstLength){

  const firstData = formData[0];
  if (firstLength < 2){
    formData.innertHTML = "<div>Prénom invalide, veuillez entrer un prénom de plus de 2 caractères</div>";
    first.style.border = "solid, 3px, red";
    return false 
  } else{
    return true
  }
} */


first.addEventListener('change', function(e) {
  const firstData = formData[0];
  var value = e.target.value;
  if (value.length > 2 ) { 
      isValid = true;
      console.log(true)
  } else {
      firstData.innertHTML = "<div>Prénom invalide, veuillez entrer un prénom de plus de 2 caractères</div>";
      firstData.style.border = "solid, 3px, red";
      isValid = false;
      console.log(false)
  }
});



