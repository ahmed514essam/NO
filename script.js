let emailLabel = document.getElementById("email-label");
let Email = document.getElementById("email");
let errorEm = document.getElementById("error-em")
let errorPass = document.getElementById("error-pass")
let passwordLabel = document.getElementById("passwordlabel")
let signIn = document.getElementById("supmit")
let Password = document.getElementById("password");

function vaidateEmail() {
  emailLabel.style.bottom = "45px";
  if (Email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    errorEm.innerHTML = "";
    Email.style.borderBottomColor = "green";
    return true;
  }
  else {
    errorEm.innerHTML = "Email not valid"
    Email.style.borderBottomColor = "red";
    Email.style.Bottom = "8px"
    return false;
  }
}


function vaidatePassword() {
  passwordLabel.style.bottom = "45px";
  let Password = document.getElementById("password").value;
  if (Password.length >= 6) {

    errorPass.innerHTML = "";
    Password.style.borderBottomColor = "green";
    return true;
  } else {

    document.getElementById("error-pass").innerHTML = "Email not valid"
    Password.style.borderBottomColor = "red";
    Password.style.Bottom = "8px"
    return false;
  }


}

document.getElementById("supmit").addEventListener("click", function (event) {
  event.preventDefault()

})





function validateAll() {

  let name = localStorage.setItem(Email)
  localStorage.setItem(name);
  
  if (vaidateEmail() == true && vaidatePassword() == true)
    signIn.innerHTML = "All fields are valid"
  signIn.style.color = "green";






}



