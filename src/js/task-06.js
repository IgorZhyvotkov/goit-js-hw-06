const inputRef = document.querySelector("#validation-input");
const inputRefLength = inputRef.getAttribute("data-length");

inputRef.addEventListener("blur", onInputBlulr);

function onInputBlulr(evt) {
  const isValid = evt.currentTarget.value.length === Number(inputRefLength);

  if (isValid) {
    evt.currentTarget.classList.add("valid");
    evt.currentTarget.classList.remove("invalid");
  } else {
    evt.currentTarget.classList.add("invalid");
    evt.currentTarget.classList.remove("valid");
  }
}
