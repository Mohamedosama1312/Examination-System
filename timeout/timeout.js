
const user = JSON.parse(localStorage.getItem("currentUser"));
const currentExam = JSON.parse(localStorage.getItem("currentExam"));
const score = parseInt(localStorage.getItem("score") || "0");




if (user && currentExam) {
    const backHomeBtn = document.getElementById("backHomeBtn");
    const takeAnotherExamBtn = document.getElementById("takeAnotherExamBtn");
    const timeoutTitle = document.getElementById("timeoutTitle");
    const percentage = (score / currentExam.length) * 100;

    timeoutTitle.innerHTML = `Soory ${user.fname} ${user.lname} .. 
<br>
⏰ Time’s Up!`;


    backHomeBtn.addEventListener("click", homeButtonHandler);
    takeAnotherExamBtn.addEventListener("click", examsButtonHandler);

    function homeButtonHandler(e) {
        e.preventDefault();
        location.replace("../home/index.html");
        localStorage.removeItem("currentExam");
        localStorage.removeItem("score");
        localStorage.removeItem("currentQuestionIndex");
    }

    function examsButtonHandler(e) {
        e.preventDefault();
        location.replace("../exams/exams.html");
        localStorage.removeItem("currentExam");
        localStorage.removeItem("score");
        localStorage.removeItem("currentQuestionIndex");
    }

    document.getElementById("scoreValue").textContent = score;
    document.getElementById("progressBar").style.width = percentage + "%";
    document.getElementById("percentageText").textContent =
        percentage + "% Accuracy";

} else {
    location.replace("../exams/exams.html");

}


//^ log out btn logic
const logOutBtn2 = document.getElementById("logOutBtn2");


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
            localStorage.removeItem("currentUser");
            localStorage.removeItem("currentExam");
            location.replace("../home/index.html");
        }
    });
})

//^ DARK / LIGHT MODE TOGGLE 

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