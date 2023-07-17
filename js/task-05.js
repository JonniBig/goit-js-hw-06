const inputName = document.getElementById("name-input");
const outputName = document.getElementById("name-output");

inputName.addEventListener("input", onInputInput);

function onInputInput(event) {
  outputName.textContent = event.currentTarget.value;

  if (event.currentTarget.value === "") {
    outputName.textContent = "Anonymous";
  }
}
