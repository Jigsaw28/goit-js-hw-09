import Notiflix from "notiflix";

const formEl = document.querySelector('.form');
formEl.addEventListener("submit", onSubmitForm)

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({position,delay})
      } else {
        reject({position, delay})
  }
    }, delay)
  })

}

function onSubmitForm(event) {
  event.preventDefault();
  let delayTime = Number(formEl.delay.value);
  for (i = 1; i <= formEl.amount.value; i += 1) {
    createPromise(i, delayTime)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`)
      });
    delayTime += Number(formEl.step.value);
  } 
}