'use strict'

const form = document.querySelector('.login-form');
form.addEventListener('submit', submitHendler);

function submitHendler(event) {
  event.preventDefault();
  if (event.target.elements.email.value &&
    event.target.elements.password.value) {
    console.log({
      email: event.target.elements.email.value.trim(),
      password: event.target.elements.password.value.trim(),
    })
    form.reset();
  }
  else {
    alert('All form fields must be filled in'); 
  }
}
