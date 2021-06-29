
//Top of Page Button (index.html)

var ua = navigator.userAgent.toLowerCase(); 
if (ua.indexOf('safari') != -1) { 
  if (ua.indexOf('chrome') > -1) {
  } else {
document.getElementById("btn1").style.marginTop = "-9%";  }
}  

//SAVE CODE FOR FAQ PAGE
// function toggleText() {
//   var text = document.getElementById("city-text1");
//   if (text.style.display === "none") {
//     text.style.display = "block";
//   } else {
//     text.style.display = "none";
//   }
// }
// function toggleText2() {
//   var text = document.getElementById("city-text2");
//   if (text.style.display === "none") {
//     text.style.display = "block";
//   } else {
//     text.style.display = "none";
//   }
// }
// function toggleText3() {
//   var text = document.getElementById("city-text3");
//   if (text.style.display === "none") {
//     text.style.display = "block";
//   } else {
//     text.style.display = "none";
//   }
// }



// let modalContainer = document.querySelector('#modal-container');
// let cityText = document.querySelector('#city-text1');
// let cityImg = document.querySelector('#cityImg1');
// let cityTitle = document.querySelector('#cityTitle1');

//   function showModal(title, cityText) {
//     modalContainer.innerHTML = '';
//     let modal = document.createElement('div');
//     modal.classList.add('modal');

//     let closeButtonElement = document.createElement('button');
//     closeButtonElement.classList.add('modal-close');
//     closeButtonElement.innerText = 'Close';
//     closeButtonElement.addEventListener('click', hideModal);
    
//     let imageElement = document.createElement('img');
//     imageElement.innerHTML = cityImg;

//     let titleElement = document.createElement('h1');
//     titleElement.innerText = cityTitle;

//     let contentElement = document.createElement('p');
//     contentElement.innerText = cityText;

//     modal.appendChild(closeButtonElement);
//     modal.appendChild(titleElement);
//     modal.appendChild(contentElement);
//     modalContainer.appendChild(modal);


//     modalContainer.classList.add('is-visible');
//   }

//   function hideModal() {
//     modalContainer.classList.remove('is-visible');
//   }

//   window.addEventListener('keydown', (e) => {
//     if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
//       hideModal();  
//     }
//   });
//   modalContainer.addEventListener('click', (e) => {
//     // Since this is also triggered when clicking INSIDE the modal
//     // We only want to close if the user clicks directly on the overlay
//     let target = e.target;
//     if (target === modalContainer) {
//       hideModal();
//     }
//   });


//   document.querySelector('#show-modal').addEventListener('click', () => {
//     showModal(cityImg, cityTitle, cityText);
//   });




// Form Validation  (contact.css)
// (function() {
//   let form = document.querySelector('#contact-form');
//   let nameInput = document.querySelector('#name');
//   let emailInput = document.querySelector('#email');
//   let textAreaInput = document.querySelector('#text');

//   function showErrorMessage(input, message) {
//     let container = input.parentElement;
//     let error = container.querySelector('.error-message');
//     if (error) {
//       container.removeChild(error);
//     }

//     if (message) {
//       let error = document.createElement('div')
//       error.classList.add('error-message');
//       error.innerText = message;
//       container.appendChild(error);
//     }
//   }

//   function validateName() {
//     let value = nameInput.value;
//     if(!value) {
//       showErrorMessage(nameInput, 'Name is a required field.');
//       return false;
//     }
//     showErrorMessage(nameInput, null);
//     return true;
//   }

//   function validateEmail() {
//     let value = emailInput.value;
//     if (!value) {
//       showErrorMessage(emailInput, 'Email is a required field.');
//       return false;
//     }
//     if (value.indexOf('@') === -1) {
//       showErrorMessage(emailInput, 'You must enter a valid email address.');
//       return false;
//     }
//     showErrorMessage(emailInput, null);
//     return true; 
//   } 

//   function validateTextArea() {
//     let value = textAreaInput.value;
//     if (!value) {
//       showErrorMessage(textAreaInput, 'You must enter a message.');
//       return false;
//     }
//     showErrorMessage(textAreaInput, null);
//     return true;
//   }

//   function validateForm() {
//     let isValidName = validateName;
//     let isValidEmail = validateEmail;
//     let isValidTextArea = validateTextArea;
//     return isValidName && isValidEmail && isValidTextArea;
//   }

//   form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       alert('Success!');
//     }
//   });

//   nameInput.addEventListener('input', validateName);
//   emailInput.addEventListener('input', validateEmail);
//   textAreaInput.addEventListener('input', validateTextArea);
// })();


