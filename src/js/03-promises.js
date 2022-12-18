import { Notify } from 'notiflix/build/notiflix-notify-aio';


function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      resolve({ position, delay });
    } else {
      reject({ position, delay });
    }
  });

  promise
    .then(({ position, delay }) => {
      Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
}

// DOM elements
const promiceForm = document.querySelector('.form');

// event handler on form button click
promiceForm.addEventListener('submit', initPromiseCreation);

function initPromiseCreation(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const { delay, step, amount } = Object.fromEntries(formData);

  let currentAmount = 0;
  let currentDelay = +delay;

  setTimeout(() => {
    const interval = setInterval(() => {
      currentAmount++;
      createPromise(currentAmount, currentDelay);
      currentDelay += +step;

      if (currentAmount === +amount) clearInterval(interval);
    }, +step);
  }, +delay);
}






// const form = document.querySelector('.form');
// const formDelay = document.getElementsByName("delay");
// const formStep = document.getElementsByName("step");
// const formamount = document.getElementsByName("amount");


// form.addEventListener('submit', onFormSubmit);

// let delay = formDelay.value;
// let step = formStep.value;
// let amount = formamount.value;


// function onFormSubmit(e) {
//    e.preventDefault();

//   let currentAmount = 0;
//   let currentDelay = + delay;
   
//   setTimeout(() => {
    
//     const interval = setInterval(() => {
//       currentAmount++;
//       createPromise(currentAmount, currentDelay);
//       currentDelay += +step;

//       if (currentAmount === amount) {
//       clearInterval(interval)
//     }
//     }, step)
     
//   }, delay)
// }



// function createPromise(position, delay) {

//  return new Promise((resolve, reject) => {
//   const shouldResolve = Math.random() > 0.3;
  
//     if (shouldResolve) {
//       resolve({ position, delay })
//       console.log("Проміс виконався успішно")

//     } else {
//       reject({ position, delay })
//       console.log("Проміс виконався з помилкою")
//     }
//   }
//   )
// }

// createPromise()
//   .then(({ position, delay }) => {
//     Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//      Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
//   });
