const passwordField = document.getElementById("password");
const confirmPasswordField = document.getElementById("confirm-password");
const formSubmit = document.getElementById("submit");

formSubmit.addEventListener("click", comparePasswordFields);

function comparePasswordFields(event) {
  const maybe = document.getElementById("error");
  if (maybe !== null) {
    maybe.remove();
  }
  if (passwordField.value !== confirmPasswordField.value) {
    const error = document.createElement("span");
    const errorText = document.createTextNode("* Passwords do not match");
    error.appendChild(errorText);
    error.setAttribute("id", "error");

    const wrapper = document.querySelector(".pass");
    wrapper.appendChild(error);

    event.preventDefault();
  }
}
