let name = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let gender = document.getElementById("gender");
let popUpContent = document.getElementById("popUpContent");
let passInfo = document.getElementById("passInfo");
let myModal = new bootstrap.Modal(document.querySelector(".modal"));
let oldData = JSON.parse(localStorage.getItem("userData")) || [];

passInfo.style.display = "none";
// localStorage.removeItem("userData");
function isStrongPassword(password) {
  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?\s&])[A-Za-z\d\s@$!%*?&]{8,}$/;
  return regex.test(password);
}
function reset() {
  name.value = "";
  email.value = "";
  password.value = "";
  passInfo.style.display = "none";
}
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  if (!this.checkValidity()) {
    this.reportValidity(); // shows default browser error
    return;
  }
  if (!isStrongPassword(password.value)) {
    passInfo.style.display = "block";
    return;
  }
  let user = {
    name: name.value,
    email: email.value,
    password: password.value,
    date: new Date().toDateString(),
    gender: gender.value,
  };

  let exist = oldData.some((e) => e.email == user.email);
  if (exist) {
    popUpContent.innerText = "Email already exists!";
    myModal.show();
  } else {
    oldData.push(user);
    localStorage.setItem("userData", JSON.stringify(oldData));
    popUpContent.innerText = "Account created successfully!";
    myModal.show();
    reset();
  }
});
