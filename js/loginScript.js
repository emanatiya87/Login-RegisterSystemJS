let email = document.getElementById("email");
let password = document.getElementById("password");
let login = document.getElementById("login");
let data = JSON.parse(localStorage.getItem("userData")) || [];
let popUpContent = document.getElementById("popUpContent");
let myModal = new bootstrap.Modal(document.querySelector(".modal"));
document.querySelector("form").onsubmit = function (e) {
  e.preventDefault();
  let exist = data.find((element) => email.value == element.email);
  if (exist) {
    if (password.value == exist.password) {
      sessionStorage.setItem("currentUser", JSON.stringify(exist));
      window.location.href = "profile.html"; // Redirect after success
    } else {
      popUpContent.innerText = "wrong password";
      myModal.show();
    }
  } else {
    popUpContent.innerText = "Account isn't exist , please sign up";
    myModal.show();
  }
};
