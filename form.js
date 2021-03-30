
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const closebtn = document.querySelector(".close");
const formValid = document.getElementById("submitBtn");


// Input :

const birthdate = document.getElementById("birthdate");
const email = document.getElementById("email");
const first = document.getElementById("first");
const last = document.getElementById("last");
const quantity = document.getElementById("quantity");

// Checkbox :

// confirmation 
const closeConf = document.querySelector(".closeConfirmation");
const confirmationbg = document.getElementById("confirmation");

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


  function checkboxValidation () {
    
    let conditions = document.querySelector('.conditions:checked');
    let loc = document.querySelector('.location:checked');
    const missLocation = document.getElementById("missLocation");
    const missConditions = document.getElementById("missConditions");

    if (loc && conditions){
        result.location.statut = true;
        result.location.data = loc.value;
        result.conditions.statut = true;

    } else {
        result.conditions.statut = false;
        missLocation.textContent = "Veuillez sélectionner une option";
        missLocation.classList.add('errorText');
        missConditions.textContent = "Vous devez vérifier que vous acceptez les termes et conditions.";
        missConditions.classList.add('errorText');
    }
  }
  
  function inputValidation () {
    var flag = true;
    for(let i in result){
        if(result[i].statut == false){
            flag = false;
        }
    }
    return flag;
  }

  formValid.addEventListener("click", function(event){
    event.preventDefault();
    checkboxValidation();
    let finalResult = inputValidation();
    if(finalResult == true){
        closeModal();
        launchConfirmation();
        console.log(result);
    }
  });
