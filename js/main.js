
//Top of Page Button (index.html)

var ua = navigator.userAgent.toLowerCase(); 
if (ua.indexOf('safari') != -1) { 
  if (ua.indexOf('chrome') > -1) {
  } else {
document.getElementById("btn1").style.marginTop = "-9%";  }
}  


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
