const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    return alert("Треба ввести  логін та пароль");
  }
    const objUserElement = {
      email: email.value,
      password: password.value,
    };
  console.log("users:", objUserElement);

  event.currentTarget.reset();
}
