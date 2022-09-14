const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const counterValueRef = document.querySelector("#value");
let num = 0;

decrementBtn.addEventListener("click", onDecrementBtnClick);
incrementBtn.addEventListener("click", onIncrementBtnClick);

function onDecrementBtnClick() {
  num -= 1;
  counterValueRef.textContent = num;
}
function onIncrementBtnClick() {
  num += 1;
  counterValueRef.textContent = num;
}
