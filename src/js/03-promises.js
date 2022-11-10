import Notiflix from 'notiflix';

const inputDelay = document.querySelector('[name="delay"]');
const inputStep = document.querySelector('[name="step"]');
const inputAmount = document.querySelector('[name="amount"]');
const fullForm = document.querySelector('form')


fullForm.addEventListener('submit', firstCreate)

let customDelay;
let customStep;
let customAmount;
let step;
let numPosition = 0;


function firstCreate(event) {
  event.preventDefault();
  customDelay = Number(inputDelay.value);
  customStep = Number(inputStep.value);
  customAmount = Number(inputAmount.value);
  step = customDelay;
  for (let i = 1; i <= customAmount; i += 1) {
    step += customStep;
    numPosition = i;
    setTimeout(createPromiseWithDelay, step, numPosition, step)
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => { 
    setTimeout(() => {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      resolve({position, delay});
    } else {
      reject({position, delay});
    }}), 0})
}

function createPromiseWithDelay(position, delay) {
  createPromise(position, delay)
  .then(({position, delay}) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({position, delay}) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
}