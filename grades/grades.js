const homeButton = document.getElementById("home-button");
const examsButton = document.getElementById("exams-button");
const resultCard = document.getElementById("result-card");
const user = JSON.parse(localStorage.getItem("currentUser"));
const score = JSON.parse(localStorage.getItem("score"));

const currentExam = JSON.parse(localStorage.getItem("currentExam"));
const pres = currentExam && score !== null ? Math.round((score / currentExam.length) * 100) : null;

console.log(user);

if (user && currentExam && score !== null) {

    if (score === 10) {

        resultCard.innerHTML = `
    
        <!-- LEFT CONTENT -->
        <div>
            <h1 class="text-4xl font-bold text-base-content mb-3">
             Hi, ${user.fname} ${user.lname} .. <br>
                Congratulations 🎉
            </h1>

            <h2
                class="text-5xl font-extrabold text-primary mb-5">
                You Get The <span class="text-success">Full Marks!</span>
            </h2>

            <p class="text-base-content opacity-70 text-lg mb-8">
                Excellent job! You successfully completed the exam with a perfect score.
            </p>

            <!-- SCORE CARD -->
            <div class="bg-base-200 border border-base-300 rounded-2xl p-6 mb-6 shadow">
                <p class="text-primary font-semibold mb-2">Your Score</p>

                <div class="flex items-end gap-2">
                    <span class="text-6xl font-bold text-base-content">${score}</span>
                    <span class="text-3xl opacity-60">/${currentExam.length}</span>
                </div>

                <div class="mt-4 h-3 bg-base-300 rounded-full overflow-hidden">
                    <div class="h-full w-full bg-primary"></div>
                </div>

                <p class="mt-3 text-success font-medium">✔ Perfect Score</p>
            </div>

            <!-- BUTTONS -->
             <div class="flex flex-wrap gap-4 mt-6" >
                <a id="home-button"  onclick="homeButtonHandler(event)"
                    class="btn btn-primary rounded-xl">
                    🏠 Back to Home
                </a>

                <a id="exams-button" onclick="examsButtonHandler(event)"
                    class="btn btn-outline rounded-xl">
                    🔄 Take Another Exam
                </a>
            </div>
        </div>

        <!-- RIGHT IMAGE -->
        <div class="flex justify-center mt-2">
            <img id="scoreImg" src="../assets/freepik__winner-boy-cartoon-celebrating-during-online-exam-__30148.jpeg"
                alt="Winner" class="w-80 md:w-96 drop-shadow-xl animate-bounce " />
        </div>
    
    `


        //^    Confetti Effect 
        const canvas = document.getElementById("confetti");
        const ctx = canvas.getContext("2d");

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let pieces = [];

        for (let i = 0; i < 120; i++) {
            pieces.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 6 + 2,
                speed: Math.random() * 3 + 1,
                color: `hsl(${Math.random() * 360}, 100%, 50%)`
            });
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            pieces.forEach(p => {
                p.y += p.speed;
                if (p.y > canvas.height) p.y = 0;
                ctx.fillStyle = p.color;
                ctx.fillRect(p.x, p.y, p.size, p.size);
            });
            requestAnimationFrame(animate);
        }

        animate();
    } else if (score >= 5) {

        resultCard.innerHTML = `
    
        <!-- LEFT CONTENT -->
        <div>
            <h1 class="text-4xl font-bold text-base-content mb-3">
             Hi, ${user.fname} ${user.lname}! <br>
                Congratulations 🎉
            </h1>

            <h2
                class="text-5xl font-extrabold text-primary mb-5">
                You <span class="text-success">Passed</span> The Exam Successfully!
            </h2>

            <p class="text-base-content opacity-70 text-lg mb-8">
                Excellent job! You successfully completed the exam with a Good score.
            </p>

            <!-- SCORE CARD -->
            <div class="bg-base-200 border border-base-300 rounded-2xl p-6 mb-6 shadow">
                <p class="text-primary font-semibold mb-2">Your Score</p>

                <div class="flex items-end gap-2">
                    <span class="text-6xl font-bold text-base-content">${score}</span>
                    <span class="text-3xl opacity-60">/${currentExam.length}</span>
                </div>

                <div class="mt-4 h-3 bg-base-300 rounded-full overflow-hidden">
                    <div class="h-full rounded-full bg-primary" style="width: ${score / currentExam.length * 100}%"></div>
                </div>

                <p class="mt-3 text-success font-medium">✔ Good Score</p>
            </div>

            <!-- BUTTONS -->
            <div class="flex flex-wrap gap-4 mt-6" >
                <a id="home-button"  onclick="homeButtonHandler(event)"
                    class="btn btn-primary rounded-xl">
                    🏠 Back to Home
                </a>

                <a id="exams-button" onclick="examsButtonHandler(event)"
                    class="btn btn-outline rounded-xl">
                    🔄 Take Another Exam
                </a>
            </div>
        </div>

        <!-- RIGHT IMAGE -->
        <div class="flex justify-center mt-2">
            <img id="scoreImg" src="../assets/freepik__winner-boy-cartoon-celebrating-during-online-exam-__30148.jpeg"
                alt="Winner" class="w-80 md:w-96 drop-shadow-xl animate-bounce " />
        </div>
    
    `

        //^    Confetti Effect 
        const canvas = document.getElementById("confetti");
        const ctx = canvas.getContext("2d");

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let pieces = [];

        for (let i = 0; i < 120; i++) {
            pieces.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 6 + 2,
                speed: Math.random() * 3 + 1,
                color: `hsl(${Math.random() * 360}, 100%, 50%)`
            });
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            pieces.forEach(p => {
                p.y += p.speed;
                if (p.y > canvas.height) p.y = 0;
                ctx.fillStyle = p.color;
                ctx.fillRect(p.x, p.y, p.size, p.size);
            });
            requestAnimationFrame(animate);
        }

        animate();

    } else {

        resultCard.innerHTML = `
    
        <!-- LEFT CONTENT -->
        <div>
            <h1 class="text-4xl font-bold text-base-content mb-3">
             ${user.fname} ${user.lname}.. <br>
             Sorry 😔
            </h1>

            <h2
                class="text-5xl font-extrabold text-primary mb-5">
                You <span class="text-error">Failed</span> The Exam!
            </h2>

            <p class="text-base-content opacity-70 text-lg mb-8">
                You did not meet the passing threshold. Keep practicing and try again!
            </p>

            <!-- SCORE CARD -->
            <div class="bg-base-200 border border-base-300 rounded-2xl p-6 mb-6 shadow">
                <p class="text-primary font-semibold mb-2">Your Score</p>

                <div class="flex items-end gap-2">
                    <span class="text-6xl font-bold text-base-content">${score}</span>
                    <span class="text-3xl opacity-60">/${currentExam.length}</span>
                </div>

                <div class="mt-4 h-3 bg-base-300 rounded-full overflow-hidden">
                    <div class="h-full rounded-full bg-primary" style="width: ${score / currentExam.length * 100}%"></div>
                </div>

                <p class="mt-3 text-error font-medium">❌ Failed Score</p>
            </div>

            <!-- BUTTONS -->
             <div class="flex flex-wrap gap-4 mt-6" >
                <a id="home-button"  onclick="homeButtonHandler(event)"
                    class="btn btn-primary rounded-xl">
                    🏠 Back to Home
                </a>

                <a id="exams-button" onclick="examsButtonHandler(event)"
                    class="btn btn-outline rounded-xl">
                    🔄 Take Another Exam
                </a>
            </div>
        </div>

        <!-- RIGHT IMAGE -->
        <div class="flex justify-center mt-2">
           
 <img id="scoreImg" src="../assets/freepik__failed-boy-animated-in-online-exam-with-tearful-ey__3015022.png"
                alt="Winner" class="w-80 md:w-96 drop-shadow-xl " />
        </div>
    
    `
    }


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








}

else {
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








