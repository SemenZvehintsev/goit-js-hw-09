import Notiflix from 'notiflix';

const inputDelay = document.querySelector('[name="delay"]');
const inputStep = document.querySelector('[name="step"]');
const inputAmount = document.querySelector('[name="amount"]');
const submitBtn = document.querySelector('button');
const fullForm = document.querySelector('form')

console.log(inputDelay);
console.log(inputStep);
console.log(inputAmount);
console.log(submitBtn);
console.log(fullForm);






function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}
