
// DARK / LIGHT MODE TOGGLE 

const html = document.documentElement;
const toggleBtn = document.getElementById("themeToggle");
const moonIcon = document.getElementById("moonIcon");
const sunIcon = document.getElementById("sunIcon");

//^Apply theme to <html> and update toggle icons.

function applyTheme(theme) {
    html.setAttribute("data-theme", theme);
    if (theme === "dark") {
        moonIcon.classList.add("hidden");
        sunIcon.classList.remove("hidden");
        sunIcon.classList.add("rotate-180");
        setTimeout(() => sunIcon.classList.remove("rotate-180"), 350);
    } else {
        sunIcon.classList.add("hidden");
        moonIcon.classList.remove("hidden");
        moonIcon.classList.add("-rotate-90");
        setTimeout(() => moonIcon.classList.remove("-rotate-90"), 350);
    }
}

// Restore saved preference or default to light
const saved = localStorage.getItem("theme");
applyTheme(saved === "dark" ? "dark" : "light");

// Toggle on click
if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
        const next = html.getAttribute("data-theme") === "light" ? "dark" : "light";
        applyTheme(next);
        localStorage.setItem("theme", next);
    });
}


/////////////////////////////////////////

//^ log out logic
const logOutBtn = document.getElementById("logOutBtn");
const logInBtn = document.getElementById("logInBtn");
const signBtn = document.getElementById("signBtn");
const logInBtn2 = document.getElementById("logInBtn2");
const signBtn2 = document.getElementById("signBtn2");
const logOutBtn2 = document.getElementById("logOutBtn2");
const currentUser = localStorage.getItem("currentUser");
console.log(currentUser);


if (currentUser) {
    logOutBtn.classList.remove("hidden");
    logInBtn.classList.add("hidden");
    signBtn.classList.add("hidden");
    logInBtn2.classList.add("hidden");
    signBtn2.classList.add("hidden");
    logOutBtn2.classList.remove("hidden");
} else {
    logOutBtn.classList.add("hidden");
    logInBtn.classList.remove("hidden");
    signBtn.classList.remove("hidden");
    logInBtn2.classList.remove("hidden");
    signBtn2.classList.remove("hidden");
    logOutBtn2.classList.add("hidden");
}


logOutBtn.addEventListener("click", () => {
    Swal.fire({
        title: "Are you sure?",
        text: "Are you sure you want to log out?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, log out!"
    }).then((result) => {
        if (result.isConfirmed) {
            logOutBtn2.classList.add("hidden");
            logInBtn2.classList.remove("hidden");
            signBtn2.classList.remove("hidden");
            logOutBtn.classList.add("hidden");
            logInBtn.classList.remove("hidden");
            signBtn.classList.remove("hidden");
            localStorage.removeItem("currentUser");
            localStorage.removeItem("currentExam");

            location.replace("/home/index.html");

        }
    });
})



logOutBtn2.addEventListener("click", () => {
    Swal.fire({
        title: "Are you sure?",
        text: "Are you sure you want to log out?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, log out!"
    }).then((result) => {
        if (result.isConfirmed) {
            logOutBtn2.classList.add("hidden");
            logInBtn2.classList.remove("hidden");
            signBtn2.classList.remove("hidden");
            logOutBtn.classList.add("hidden");
            logInBtn.classList.remove("hidden");
            signBtn.classList.remove("hidden");
            localStorage.removeItem("currentUser");
            localStorage.removeItem("currentExam");

            location.replace("/home/index.html");
            Swal.fire({
                title: "Deleted!",
                text: "Your Site has been deleted.",
                icon: "success"
            });
        }
    });
})









