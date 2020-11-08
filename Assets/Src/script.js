const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const email = document.getElementById("email");
const form = document.getElementById("form");
const success = "#66bb6a";
const error = "#e53935";

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (checkInputs()) {
    el("load").style.display = "block";
    setTimeout(() => {
      el("load").style.display = "none";
    }, 2000);
  }
});

function checkInputs() {
  let valid = true;
  const firstNameValue = firstName.value;
  const lastNameValue = lastName.value;
  const passwordValue = password.value;
  const confirmPasswordValue = confirmPassword.value;
  const emailValue = email.value;

  if (emailValidation(emailValue)) {
    email.style.borderColor = success;
    el("emailHelper").innerText = "";
  } else {
    el("emailHelper").innerText = "Please enter a valid email address";
    email.style.borderColor = "transparent";
    valid = false;
  }

  if (passwordValue.length >= 8) {
    password.style.borderColor = success;
    el("passHelper").innerText = "";
  } else {
    el("passHelper").innerText = "Password is to short ";
    email.style.borderColor = "transparent";
    valid = false;
  }

  if (passwordValue === confirmPasswordValue) {
    confirmPassword.style.borderColor = success;
    el("cPassHelper").innerText = "";
  } else {
    el("cPassHelper").innerText = "Password does not match";
    confirmPassword.style.borderColor = "transparent";
    valid = false;
  }

  if (!nameValidator(firstNameValue)) {
    firstName.style.borderColor = success;
    el("fnameHelper").innerText = "";
  } else {
    el("fnameHelper").innerText = "First name can not accept numeric values";
    firstName.style.borderColor = "transparent";
    valid = false;
  }

  if (!nameValidator(lastNameValue)) {
    lastName.style.borderColor = success;
    el("lnameHelper").innerText = "";
  } else {
    el("lnameHelper").innerText = "Last name can not accept numeric values";
    lastName.style.borderColor = "transparent";
    valid = false;
  }

  return valid;
}

function emailValidation(value) {
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(value);
}

function nameValidator(value) {
  const nameRegex = /\d/;
  console.log(nameRegex.test(value));
  return nameRegex.test(value);
}

function el(id) {
  return document.getElementById(id);
}
