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
//form elements 
const first = document.getElementById("first");
const last = document.getElementById("last");
const email = document.getElementById("email");
const date = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const submitBtn = document.querySelector(".button");
const textControl = document.querySelectorAll(".text-control");

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

let formValid = document.getElementById("submitBtn");
let missFirst = document.getElementById("missFirst");
let firstValid = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-"\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;

let missLast = document.getElementById("missLast");
let lastValid = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-"\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;

let missEmail = document.getElementById("missEmail");
let emailValid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

let missDate = document.getElementById("missDate");
let dateValid = /^\d{2}-\d{2}-\d{4}$/;

let missQuantity = document.getElementById("missQuantity");
let quantityValid = /d/;

let missLocation = document.getElementById("missLocation");
let location1 = document.getElementById("location1");
let location2 = document.getElementById("location2");
let location3 = document.getElementById("location3");
let location4 = document.getElementById("location4");
let location5 = document.getElementById("location5");
let location6 = document.getElementById("location6");
            
formValid.addEventListener("click", validation);

function validation(event){
  validationFirst(event);
  validationLast(event);
  validationEmail(event);
  validationQuantity(event);
  validationLocation(event);
}
//validation first 
function validationFirst(event){
    //Si le champ est vide ou incorrect
    if (firstValid.test(first.value) == false){
        event.preventDefault();
        missFirst.textContent = "Le champ Prénom doit comporter un minimum de 2 caractères";
        missFirst.style.color = "red";
        missFirst.style.fontSize = "50%";
        textControl[0].style.border = "solid red 3px";
    }else{ 
    }
}
// validation last
function validationLast(event){
  //Si le champ est vide ou incorrrect
  if (lastValid.test(last.value) == false){
      event.preventDefault();
      missLast.textContent = "Le champ Nom doit comporter un minimum de 2 caractères";
      missLast.style.color = "red";
      missLast.style.fontSize = "50%";
      textControl[1].style.border = "solid red 3px";
  }else{ 
  }
}
// validation email
function validationEmail(event){
  //Si le champ est vide ou incorrect
  if (emailValid.test(email.value) == false){
      event.preventDefault();
      missEmail.textContent = "Veuillez entrer une adresse email valide";
      missEmail.style.color = "red";
      missEmail.style.fontSize = "50%";
      textControl[2].style.border = "solid red 3px";
  }else{ 
  }
}
//validation date de naissance
/* function validationDate(event){
  //Si le champ est vide ou incorrect
  if (dateValid.test(date.value) == false){
      event.preventDefault();
      missDate.textContent = "Veuillez entrer une date valide";
      missDate.style.color = "red";
      missDate.style.fontSize = "50%";
      textControl[3].style.border = "solid red 3px";
  }else{ 
  }
} */

// validation nombre de concours

 function validationQuantity(event){
  //Si le champ est vide ou incorrrect
  if (quantity.value =! 2){
      event.preventDefault();
      missQuantity.textContent = "Le champ  doit avoir un minimum de 2 caractères";
      missQuantity.style.color = "red";
      missQuantity.style.fontSize = "50%";
      textControl[3].style.border = "solid red 3px";
  }else{ 
  }
} 

function validationLocation(event){
  //Si le champ est vide ou incorrrect
  if ((location1.checked == false)&&(location2.checked == false)&&(location3.checked == false)&&(location4.checked == false)&&(location5.checked == false)&&(location6.checked == false)){
      event.preventDefault();
      missLocation.textContent = "Veuillez sélectionner une option";
      missLocation.style.color = "red";
      missLocation.style.fontSize = "50%";
  }else{ 
  }
}