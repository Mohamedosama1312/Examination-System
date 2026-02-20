var inputEmail = document.getElementById("email");
var inputPass = document.getElementById("pass");
var emailError = document.getElementById("emailValidateMsg");
var passError = document.getElementById("passValidateMsg");
var myRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+$/;
var isValid = true;
function loginFormValidation(e) {
    e.preventDefault();
    isValid = true;


    if (inputEmail.value === "") {

        emailError.textContent = "Email is required";
        isValid = false;

    } else if (myRegex.test(inputEmail.value) === false) {
        emailError.textContent = "Please enter a valid email address";
        isValid = false;

    }
    else {
        emailError.textContent = "";
    }
    if (inputPass.value === "") {
        passError.textContent = "Password is required";
        isValid = false;

    } else {
        passError.textContent = "";
    }






    if (isValid) {

        // get old users or create empty array
        var users = JSON.parse(localStorage.getItem("users")) || [];



        var foundUser = null;
        for (var i = 0; i < users.length; i++) {
            if (users[i].email === inputEmail.value && users[i].password === inputPass.value) {
                foundUser = users[i];
                break;
            }
        }

        if (foundUser === null) {
            passError.textContent = "Invalid email or password"
            return;
        }
        localStorage.setItem("currentUser", JSON.stringify(foundUser))


        location.replace("exams.html");

    }




}

function inputEmailValidation() {

    if (inputEmail.value === "") {
        emailError.textContent = "Email is required";
    } else if (myRegex.test(inputEmail.value) === false) {
        emailError.textContent = "Please enter a valid email address";
        isValid = false;

    } else {
        emailError.textContent = "";
    }
}
function inputPasswordValidation() {

    if (inputPass.value === "") {
        passError.textContent = "Password is required";
    } else {
        passError.textContent = "";
    }
}

inputEmail.addEventListener("input", inputEmailValidation);
inputPass.addEventListener("input", inputPasswordValidation);