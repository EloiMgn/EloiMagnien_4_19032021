// DOM Modal

const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const closebtn = document.querySelector(".close");
const formValid = document.getElementById("submitBtn");


// DOM Input :

const birthdate = document.getElementById("birthdate");
const email = document.getElementById("email");
const first = document.getElementById("first");
const last = document.getElementById("last");
const quantity = document.getElementById("quantity");


// DOM confirmation 

const closeConf = document.querySelector(".closeConfirmation");
const confirmationbg = document.getElementById("confirmation");

// Récupération des données entrées dans le formulaire
let result = {
    "first" :{
        "statut" : false,
        "data" : null
    },
    "last" : {
        "statut" : false,
        "data" : null
    },
    "email" : {
        "statut" : false,
        "data" : null
    },
    "birthdate" : {
        "statut" : false,
        "data" : null
    },
    "quantity" : {
        "statut" : false,
        "data" : null
    },
    "conditions": {
        "statut" : false,
        "data" : null
    },
    "location": {
        "statut": false,
        "data": null
    }

};

// Design Responsive menu 
function editNav() {
    let x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

// MODAL
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", function(){
    launchModal();
  }));
  
  // close modal event
  closebtn.addEventListener("click", function(){
    closeModal();
  });
  
  // launch modal form
  function launchModal() {
    modalbg.style.display = "block";
  }
  
  // close modal form
  function closeModal() {
    modalbg.style.display = "none";
  }
  
  
  // ===================== Confirmation ============================
  
  // launch confirmation event
  
  // close confirmation event
  closeConf.addEventListener("click", closeConfirmation);
  
  // launch confirmation form
  
  function launchConfirmation(){
    confirmationbg.style.display = "block";
  }
  
  // close confirmation form
  function closeConfirmation() {
    confirmationbg.style.display = "none";
  }


// ===== Fonction générale de validation =====

function validation(input, span, regex) {

    //si la valeur de la regex est vérifiée: enlever msg d'erreur et mise en forme : 
    
    result[input.id].data=input.value;
  
    if (regex.test(input.value)) {
      span.classList.remove('errorText');
      input.classList.remove('errorInput');
      span.textContent = "";
        result[input.id].statut=true;

      // si la regex n'est pas vérifiée : afficher message d'erreur et mise en forme

    } else {
      span.classList.add('errorText');
      input.classList.add('errorInput');
      result[input.id].statut=false;
    }
  }

  //====== Validation du Prénom ======


first.addEventListener("input", function () {
  
    let missFirst = document.getElementById("missFirst");
    let firstValid = /^[a-zA-ZéèîïÉÈÎÏ][a-zA-Zéèêàçîï]+([-"\s][a-zA-ZéèîïÉÈÎÏ][a-zA-Zéèêàçîï]+)?$/;

    missFirst.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
    validation(first, missFirst, firstValid);
  });

  // ====== Validation du Nom =====


last.addEventListener("input", function () {
  
    let missLast = document.getElementById("missLast");
    let lastValid = /^[a-zA-ZéèîïÉÈÎÏ][a-zA-Zéèêàçîï]+([-"\s][a-zA-ZéèîïÉÈÎÏ][a-zA-Zéèêàçîï]+)?$/;

    missLast.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    validation(last, missLast, lastValid);
  });
  
  
  // ===== Validation de l'email =====

  
  email.addEventListener("input", function () {
    
  let missEmail = document.getElementById("missEmail");
  let emailValid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  missEmail.textContent = "Veuillez entrer un email valide";
    validation(email, missEmail, emailValid);
  });
  
  // ===== Validation de la date de naissance =====
  
  
  birthdate.addEventListener("input", function () {
    
    let missDate = document.getElementById("missDate");
    let dateValid = /^\d{4}-\d{2}-\d{2}$/;

    missDate.textContent = "Veuillez entrer une date de naissance valide";
    validation(birthdate, missDate, dateValid);
  });

  // ===== Fonction validation nombre de tournois =====

function validationQuantity(input, span) {
    result[input.id].data=input.value;
    if (input.value < 0 || input.value > 99 || input.value == "") {
      // si le nombre de tournoi est non rempli, inférieur à 0 ou supérieur à 99 :
      span.classList.add('errorText');
      input.classList.add('errorInput');
      result[input.id].statut=false;
    } else {
      span.classList.remove('errorText');
      input.classList.remove('errorInput');
      span.textContent = "";
      result[input.id].statut=true;
    }
  }

  // ===== Validation du nombre de concours =====


quantity.addEventListener("input", function () {
  
    let missQuantity = document.getElementById("missQuantity");
    missQuantity.textContent = "Veuillez entrer une valeur numérique valide";
    validationQuantity(quantity, missQuantity);
    
  });

  // ===== Validation de la sélection de la ville ===== 

  function radioValidation () {
  
    let loc = document.querySelector('.location:checked'); // recherche d'au moins 1 input sélectionné
    
    const missLocation = document.getElementById("missLocation");

    if (loc){
      // si la variable loc existe : 
        result.location.statut = true;
        result.location.data = loc.value;
        missLocation.textContent = "";
        missLocation.classList.remove('errorText');
    } else {
      // si la variable loc n'existe pas : 
        missLocation.textContent = "Veuillez sélectionner une option";
        missLocation.classList.add('errorText');
      }
    }

     // ===== Validation de la sélection des conditions d'utilisation ===== 

    function checkboxValidation () {
    
      let conditions = document.querySelector('.conditions:checked'); // recherche d'au moins 1 input sélectionné
      const missConditions = document.getElementById("missConditions");
  
      if (conditions){
        // si la variable conditions existe : 
          result.conditions.statut = true;
          missConditions.textContent = "";
          missConditions.classList.remove('errorText');
      } else {
        // si la variable conditions n'existe pas : 
          result.conditions.statut = false;
          missConditions.textContent = "Vous devez vérifier que vous acceptez les termes et conditions.";
          missConditions.classList.add('errorText');
        }
      }
    



 // ===== Validation des données entrée dans le formulaire au moment de l'envoi ===== 

    function inputValidation () {
    var flag = true;
    for(let i in result){
        if(result[i].statut == false){
            flag = false;
            // si une valeur est retournée fausse dans l'objet des résultats, le formulaire ne peut pas être envoyé
        }
    }
    return flag;
  }

// ===== validation finale et application des fonctions de 
//       validation des checkbox + fermeture du fomulaire 
//       et apparition du message de confirmation ======

  formValid.addEventListener("click", function(event){
    event.preventDefault();
    radioValidation ();
    checkboxValidation();
    let finalResult = inputValidation();
    if(finalResult == true){
        closeModal();
        launchConfirmation();
        console.log(result);
    }
  });
