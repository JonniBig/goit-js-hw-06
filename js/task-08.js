const form = document.querySelector(".login-form");

form.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();
  const dataObj = {
    email: form.elements.email.value,
    password: form.elements.password.value,
  };

  if (dataObj.email === "" || dataObj.password === "") {
    return alert("Всі поля повинні бути заповнені");
  }
  console.log(dataObj);
  form.reset();
}
