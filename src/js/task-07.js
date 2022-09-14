const inputRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

textRef.style.fontSize = `${inputRef.value}px`;

inputRef.addEventListener('input', omInputChange)

function omInputChange(evt) {
  textRef.style.fontSize = `${evt.currentTarget.value}px`;
}