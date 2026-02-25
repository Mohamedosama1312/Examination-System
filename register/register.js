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
var subBtn = document.getElementById("subBtn");
var nameRegex = /^[A-Za-z]+$/;
var myRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+$/;
var isValid = true;


//^ Sync theme with Home page
(function () {
    const saved = localStorage.getItem("theme");
    document.documentElement.setAttribute("data-theme", saved === "dark" ? "dark" : "light");
})();

function signUpFormValidation(e) {
    e.preventDefault();
    isValid = true;
    if (inputFname.value === "") {

        fnameError.textContent = "First name is required";
        isValid = false;
    } else if (nameRegex.test(inputFname.value) === false) {
        fnameError.textContent = "First Name must be letters only";
        isValid = false;

    } else {
        fnameError.textContent = "";
    }
    if (inputLname.value === "") {

        lnameError.textContent = "Last name is required";
        isValid = false;

    } else if (nameRegex.test(inputLname.value) === false) {
        lnameError.textContent = "Last Name must be letters only";
        isValid = false;

    } else {
        lnameError.textContent = "";
    }
    if (inputEmail.value === "") {
        emailError.textContent = "Email is required";
        isValid = false;

    } else if (myRegex.test(inputEmail.value) === false) {
        emailError.textContent = "Please enter a valid email address";
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
        confirmError.textContent = "This field is required";
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

    // var emailExists = users.some(u => u.email === inputEmail.value);
    var emailExists = false;
    for (var i = 0; i < users.length; i++) {
        if (users[i].email === inputEmail.value) {
            emailExists = true;
            break;

        }
    }

    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        background: "#0f172a",
        color: "#e2e8f0",
        iconColor: "#10b981",
        customClass: {
            popup: "rounded-2xl shadow-xl border border-slate-700",
            title: "text-sm font-semibold"
        }
    });

    if (emailExists) {
        if (document.documentElement.getAttribute("data-theme") === "dark") {

            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: false,
                background: "#0f172a",           // نفس الخلفية الداكنة
                color: "#e2e8f0",                // نفس لون النص الفاتح
                iconColor: "#ef4444",            // أحمر للـ error (ممكن تغيره لـ #f87171 لو عايز أفتح شوية)
                customClass: {
                    popup: "rounded-2xl shadow-xl border border-slate-700",
                    title: "text-sm font-semibold"
                }
            });

            Toast.fire({
                icon: "error",
                title: "Email already exists "

            });

        } else {
            const ToastLight = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: false,
                background: "#ffffff",
                color: "#1f2937",
                iconColor: "#ef4444",
                customClass: {
                    popup: "rounded-2xl shadow-2xl border border-gray-200",
                    title: "text-sm font-semibold"
                }
            });
            ToastLight.fire({
                icon: "error",
                title: "Email already exists"
            });

        }

        return;
    } else if (inputEmail.value == "") {
        return;
    }

    if (isValid) {
        // add new user
        users.push(user);

        // save back to localStorage
        localStorage.setItem("users", JSON.stringify(users));
        subBtn.disabled = true;
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
                title: "Registered successfully"
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
                title: "Registered successfully"
            });

        }

        // redirect to login
        setTimeout(() => {
            location.replace("../login/login.html");
        }, 2000);

    }




}

function inputFnameValidation() {
    if (inputFname.value === "") {
        fnameError.textContent = "First name is required";
    } else if (nameRegex.test(inputFname.value) === false) {
        fnameError.textContent = "First Name must be letters only";
    } else {
        fnameError.textContent = "";
    }
}
function inputLnameValidation() {
    if (inputLname.value === "") {

        lnameError.textContent = "Last name is required";
    } else if (nameRegex.test(inputLname.value) === false) {
        lnameError.textContent = "Last Name must be letters only";
    } else {
        lnameError.textContent = "";
    }
}
function inputEmailValidation() {

    if (inputEmail.value === "") {
        emailError.textContent = "Email is required";
    } else if (myRegex.test(inputEmail.value) === false) {
        emailError.textContent = "Please enter a valid email address";
    } else {
        emailError.textContent = "";
    }
}
function inputPasswordValidation() {

    if (inputPass.value === "") {
        passError.textContent = "Password is required";
    } else if (inputPass.value.length < 8) {
        passError.textContent = "Password must be at least 8 characters";
    } else {
        passError.textContent = "";
    }
}
function inputConfirmValidation() {

    if (inputConfirm.value === "") {
        confirmError.textContent = "This field is required";
    } else if (inputConfirm.value !== inputPass.value) {
        confirmError.textContent = "Passwords do not match";
    } else {
        confirmError.textContent = "";
    }
}



inputFname.addEventListener("change", inputFnameValidation);
inputLname.addEventListener("change", inputLnameValidation);
inputEmail.addEventListener("change", inputEmailValidation);
inputPass.addEventListener("change", inputPasswordValidation);
inputConfirm.addEventListener("change", inputConfirmValidation);





