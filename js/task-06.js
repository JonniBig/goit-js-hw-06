const inputVal = document.getElementById(`validation-input`);
inputVal.addEventListener("blur", inputChange);

function inputChange(event) {
  if (
    Number(inputVal.getAttribute("data-length")) ===
    event.currentTarget.value.length
  ) {
    addCurrentClass("invalid", "valid");
  } else {
    addCurrentClass("valid", "invalid");
  }

  function addCurrentClass(a, b) {
    inputVal.classList.remove(a);
    inputVal.classList.add(b);
  }
}
