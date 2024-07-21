import throttle from "lodash.throttle" 

const OBJECT_KEY = 'feedback-form-state'
const feedback = document.querySelector('.feedback-form');
const { email, message } = feedback.elements;

feedback.addEventListener('input', throttle(onInputData, 500));
feedback.addEventListener('submit', onFormSubmit);

let dataForm = JSON.parse(localStorage.getItem(OBJECT_KEY)) || {};
pageRefresh();

function onInputData(event) {
    dataForm = {
        email: email.value,
        message: message.value
    };
    localStorage.setItem(OBJECT_KEY, JSON.stringify(dataForm))
}

function pageRefresh() {
    if (dataForm) {
        email.value = dataForm.email || '',
        message.value = dataForm.message || ''
    }
}

function onFormSubmit(event) {
    event.preventDefault();
    if (email.value === '' || message.value === '') {
        return alert('Double check if all rows have been filled.');
    }
console.log({ email: email.value, message: message.value });

localStorage.removeItem(OBJECT_KEY);
feedback.reset();
dataForm = {};

}

