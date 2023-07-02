import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const email = document.querySelector('input');
const message = document.querySelector('textarea');
const LOCALSTORAGE_KEY = "feedback-form-state";



form.addEventListener("input", throttle(handlerFormInput, 500));
form.addEventListener("submit", handlerSubmit);

const formData = {};

function handlerFormInput(evt) {
    evt.preventDefault();
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
    
}



function handlerSubmit(evt) {
    evt.preventDefault();
  const {
    elements: { email, message }
  } = evt.currentTarget;

  if (email.value === "" || message.value === "") {
    return alert("Please fill in all the fields!");
  }

    const userData = {
      Login: email.value, 
      Message: message.value 
    }
    console.log(userData);
    evt.currentTarget.reset();
    localStorage.removeItem(LOCALSTORAGE_KEY);
    
}


updateOutput();
function updateOutput() {
    const parsedSettings = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
    if (parsedSettings) { 
    message.value = parsedSettings.message
    email.value = parsedSettings.email
}
}