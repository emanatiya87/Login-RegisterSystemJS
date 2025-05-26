let email = document.getElementById("email");
let password = document.getElementById("password");
let login = document.getElementById("login");
let data = JSON.parse(localStorage.getItem("userData"));
let popUpContent = document.getElementById("popUpContent");
let myModal = new bootstrap.Modal(document.querySelector(".modal"));

document.querySelector("form").onsubmit = function (e) {
  e.preventDefault();
  let exist = data.find((element) => email.value == element.email);
  if (exist) {
    if (password.value == exist.password) {
      popUpContent.innerText = `hello ${exist.name}`;
      myModal.show();
    } else {
      popUpContent.innerText = "wrong password";
      myModal.show();
    }
  } else {
    popUpContent.innerText = "sign up ya 3m";
    myModal.show();
  }
};
