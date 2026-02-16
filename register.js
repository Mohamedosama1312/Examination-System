var inputFname = document.getElementById("fname");
var inputLname = document.getElementById("lname");
var inputEmail = document.getElementById("email");
var inputPass = document.getElementById("pass");
var inputConfirm = document.getElementById("repass");
var fnameError = document.getElementById("fnameValidateMsg");
var lnameError = document.getElementById("lnameValidateMsg");
var emailError = document.getElementById("emailValidateMsg");
var passError = document.getElementById("passValidateMsg");
var confirmError = document.getElementById("confirmValidateMsg");
//var nameRegex = /^[A-Za-z]+$/;
var myRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+$/;
var isValid = true;

function formValidation(e) {
    e.preventDefault();
    isValid = true;
    if (inputFname.value === "") {

        fnameError.textContent = "First name is required";
        isValid = false;
    } else if (isFinite(inputFname.value)) {
        fnameError.textContent = "First Name must be letters only";
        isValid = false;

    } else {
        fnameError.textContent = "";
    }
    if (inputLname.value === "") {

        lnameError.textContent = "Last name is required";
        isValid = false;

    } else if (isFinite(inputLname.value)) {
        lnameError.textContent = "Last Name must be letters only";
        isValid = false;

    } else {
        lnameError.textContent = "";
    }
    if (inputEmail.value === "") {
        emailError.textContent = "Email is required";
        isValid = false;

    } else if (myRegex.test(inputEmail.value) === false) {
        emailError.textContent = "Enter a valid email address";
        isValid = false;

    } else {
        emailError.textContent = "";
    }
    if (inputPass.value === "") {
        passError.textContent = "Password is required";
        isValid = false;

    } else if (inputPass.value.length < 8) {
        passError.textContent = "Password must be at least 8 characters";
        isValid = false;

    } else {
        passError.textContent = "";
    }
    if (inputConfirm.value === "") {
        confirmError.textContent = "this field is required";
        isValid = false;

    } else if (inputConfirm.value !== inputPass.value) {
        confirmError.textContent = "Passwords do not match";
        isValid = false;

    } else {
        confirmError.textContent = "";
    }


    var user = {

        fname: inputFname.value,
        lname: inputLname.value,
        email: inputEmail.value,
        password: inputPass.value,
    };


    // get old users or create empty array
    var users = JSON.parse(localStorage.getItem("users")) || [];

    var emailExists = users.some(u => u.email === inputEmail.value);

    if (emailExists) {
        alert("Email already registered");
        return;
    } else if (inputEmail.value == "") {
        return;
    }

    if (isValid) {
        // add new user
        users.push(user);

        // save back to localStorage
        localStorage.setItem("users", JSON.stringify(users));

        // redirect to login
        location.replace("login.html");

    }




}

function inputValidation() {
    if (inputFname.value === "") {
        fnameError.textContent = "First name is required";
    } else if (isFinite(inputFname.value)) {
        fnameError.textContent = "First Name must be letters only";
    } else {
        fnameError.textContent = "";
    }
    if (inputLname.value === "") {

        lnameError.textContent = "Last name is required";
    } else if (isFinite(inputLname.value)) {
        lnameError.textContent = "Last Name must be letters only";
    } else {
        lnameError.textContent = "";
    }
    if (inputEmail.value === "") {
        emailError.textContent = "Email is required";
    } else if (myRegex.test(inputEmail.value) === false) {
        emailError.textContent = "Enter a valid email address";
    } else {
        emailError.textContent = "";
    }
    if (inputPass.value === "") {
        passError.textContent = "Password is required";
    } else if (inputPass.value.length < 8) {
        passError.textContent = "Password must be at least 8 characters";
    } else {
        passError.textContent = "";
    }
    if (inputConfirm.value === "") {
        confirmError.textContent = "This field is required";
    } else if (inputConfirm.value !== inputPass.value) {
        confirmError.textContent = "Passwords do not match";
    } else {
        confirmError.textContent = "";
    }

}


function inputFnameValidation() {
    if (inputFname.value === "") {
        fnameError.textContent = "First name is required";
    } else if (isFinite(inputFname.value)) {
        fnameError.textContent = "First Name must be letters only";
    } else {
        fnameError.textContent = "";
    }
}

// function addRow() {
//     if (inputName.value != " " && inputAge.value != " " && inputEmail.value != " ") {
//         var table = document.querySelector("table");
//         var newRow = document.createElement("tr");
//         var newCell1 = document.createElement("td");
//         var newCell2 = document.createElement("td");
//         var newCell3 = document.createElement("td");
//         newCell1.textContent = inputName.value;
//         newCell2.textContent = inputAge.value;
//         newCell3.textContent = inputEmail.value;
//         newRow.appendChild(newCell1);
//         newRow.appendChild(newCell2);
//         newRow.appendChild(newCell3);
//         table.appendChild(newRow);
//     }
//     inputName.value = "";
//     inputAge.value = "";
//     inputEmail.value = "";

// }

// function resetForm() {
//     inputName.value = "";
//     inputAge.value = "";
//     inputEmail.value = "";
//     nameError.textContent = "";
//     ageError.textContent = "";
//     emailError.textContent = "";
// }



inputFname.addEventListener("input", inputFnameValidation);