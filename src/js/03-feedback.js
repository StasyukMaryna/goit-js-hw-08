import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');

const saveDataToStorage = throttle(function (formData) {
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}, 500);

document.addEventListener('DOMContentLoaded', function () {
  const formData = JSON.parse(localStorage.getItem('feedback-form-state'));

  if (formData) {
    emailInput.value = formData.email;
    messageInput.value = formData.message;
  } else {
    emailInput.value = '';
    messageInput.value = '';
  }
});

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };

  console.log(formData);

  localStorage.removeItem('feedback-form-state');
  emailInput.value = '';
  messageInput.value = '';
});
