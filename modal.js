function editNav() {
  let x = document.getElementById("myTopnav");
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

const textControl = document.querySelectorAll(".text-control");

// ===== Fonction générale de validation =====

function validation(input, span, label, regex){
  
  //si la valeur de la regex est vérifiée: enlever msg d'erreur et mise en forme : 

  if (regex.test(label.value)){
    span.classList.remove('errorText');
    input.classList.remove('errorInput');
    span.textContent = "";
    return true
  // si la regex n'est pas vérifiée : afficher message d'erreur et mise en forme
} else {
    span.classList.add('errorText');
    input.classList.add('errorInput');
    return false
}
}

//====== Validation du Prénom ======

const first = document.getElementById("first");
let missFirst = document.getElementById("missFirst");
let firstValid = /^[a-zA-ZéèîïÉÈÎÏ][a-zA-Zéèêàçîï]+([-"\s][a-zA-ZéèîïÉÈÎÏ][a-zA-Zéèêàçîï]+)?$/;


first.addEventListener("input", function(){
  missFirst.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
 validation(textControl[0], missFirst, first, firstValid);
});

// ====== Validation du Nom =====

const last = document.getElementById("last");
let missLast = document.getElementById("missLast");
let lastValid = /^[a-zA-ZéèîïÉÈÎÏ][a-zA-Zéèêàçîï]+([-"\s][a-zA-ZéèîïÉÈÎÏ][a-zA-Zéèêàçîï]+)?$/;

last.addEventListener("input", function(){
  missLast.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
 validation(textControl[1], missLast, last, lastValid);
});


// ===== Validation de l'email =====

const email = document.getElementById("email");
let missEmail = document.getElementById("missEmail");
let emailValid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


email.addEventListener("input", function(){
  missEmail.textContent = "Veuillez entrer un email valide";
 validation(textControl[2], missEmail, email, emailValid);
});

// ===== Validation de la date de naissance =====

const date = document.getElementById("birthdate");
let missDate = document.getElementById("missDate");
let dateValid = /^\d{4}-\d{2}-\d{2}$/;


date.addEventListener("input", function(){
  missDate.textContent = "Veuillez entrer une date de naissance valide";
 validation(textControl[3], missDate, date, dateValid);
});

// ===== Fonction validation nombre de tournois =====

function validationQuantity(input, span, label){
  if (label.value < 0 || label.value > 99 || label.value == ""){
    span.classList.add('errorText');
    input.classList.add('errorInput');
    return false
} else {
  span.classList.remove('errorText');
  input.classList.remove('errorInput');
  span.textContent = "";
  return true
}
}

// ===== Validation du nombre de concours =====

const quantity = document.getElementById("quantity");
let missQuantity = document.getElementById("missQuantity");


quantity.addEventListener("input", function(){
  missQuantity.textContent = "Veuillez entrer une valeur numérique valide";
  validationQuantity(textControl[4], missQuantity, quantity);
});

// ====== Fonction validation checkbox ======

const formValid = document.getElementById("submitBtn");
const form = document.getElementsByTagName("form");

function checkboxLocation(event, span){
  // ====== On vérifie si on trouve une radio checked ==== 
  let location = document.querySelector('.location:checked');
  let conditions = document.querySelector('.conditions:checked');

  if (location == null) {
    span.textContent = "Veuillez sélectionner une option";
    span.classList.add('errorText');
    event.preventDefault();
  }
}

function checkboxConditions(event, span){
  // ==== On vérifie si la checkbox conditions est checkée ====
  let conditions = document.querySelector('.conditions:checked');

  if (conditions == null) {
    span.textContent = "Vous devez vérifier que vous acceptez les termes et conditions.";
    span.classList.add('errorText');
    event.preventDefault();
  }
}

function validationGenerale(event){
  if( 
  validation(textControl[0], missFirst, first, firstValid) == false ||
  validation(textControl[1], missLast, last, lastValid) == false ||
  validation(textControl[2], missEmail, email, emailValid) == false ||
  validation(textControl[3], missDate, date, dateValid) == false ||
  validationQuantity(textControl[4], missQuantity, quantity) == false
   ){
    event.preventDefault();
  }
}

// ===== validation du formulaire si les checkbox nécessaires sont bien sélectionnées =====

const missLocation = document.getElementById("missLocation");
const missConditions = document.getElementById("missConditions");

formValid.addEventListener("click", function(event){
  checkboxLocation(event, missLocation);
  checkboxConditions(event, missConditions);
  validationGenerale(event);
});

// ===== Validation que tous les input sont valides avant d'envoyer le formulaire =====

