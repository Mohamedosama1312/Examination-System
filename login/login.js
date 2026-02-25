var inputEmail = document.getElementById("email");
var inputPass = document.getElementById("pass");
var emailError = document.getElementById("emailValidateMsg");
var passError = document.getElementById("passValidateMsg");
var loginBtn = document.getElementById("loginBtn");
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
        loginBtn.disabled = true;
        if (document.documentElement.getAttribute("data-theme") === "dark") {
            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: false,
                background: "#0f172a",
                color: "#e2e8f0",
                iconColor: "#10b981",
                customClass: {
                    popup: "rounded-2xl shadow-xl border border-slate-700",
                    title: "text-sm font-semibold"
                }

            });

            Toast.fire({
                icon: "success",
                title: `Welcome back ${foundUser.fname}!`
            });

        } else {
            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: false,
                background: "linear-gradient(to right, #4f46e5, #06b6d4)",
                color: "#fff",
                customClass: {
                    popup: "rounded-2xl shadow-lg"
                }
            });

            Toast.fire({
                icon: "success",
                title: `Welcome back ${foundUser.fname}!`
            });

        }
        setTimeout(() => {
            location.replace("../exams/exams.html");
        }, 2000);
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

inputEmail.addEventListener("change", inputEmailValidation);
inputPass.addEventListener("change", inputPasswordValidation);  