const homeButton = document.getElementById("home-button");
const examsButton = document.getElementById("exams-button");
const resultCard = document.getElementById("result-card");
const user = JSON.parse(localStorage.getItem("currentUser"));
const score = JSON.parse(localStorage.getItem("score"));

const currentExam = JSON.parse(localStorage.getItem("currentExam"));
const pres = Math.round((score / currentExam.length) * 100);

console.log(user);

if (user && currentExam && score !== null) {

    if (score === 10) {

        resultCard.innerHTML = `
    
        <!-- LEFT CONTENT -->
        <div>
            <h1 class="text-4xl font-bold text-gray-800 mb-3">
             Hi, ${user.fname}.. <br>
                Congratulations 🎉
            </h1>

            <h2
                class="text-5xl font-extrabold bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent mb-5">
                You Get The <span class="text-green-500">Full Marks!</span>
            </h2>

            <p class="text-gray-600 text-lg mb-8">
                Excellent job! You successfully completed the exam with a perfect score.
            </p>

            <!-- SCORE CARD -->
            <div class="bg-indigo-50 rounded-2xl p-6 mb-6 shadow">
                <p class="text-indigo-600 font-semibold mb-2">Your Score</p>

                <div class="flex items-end gap-2">
                    <span class="text-6xl font-bold text-gray-800">${score}</span>
                    <span class="text-3xl text-gray-400">/${currentExam.length}</span>
                </div>

                <div class="mt-4 h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div class="h-full w-full bg-gradient-to-r from-indigo-600 to-blue-500"></div>
                </div>

                <p class="mt-3 text-green-600 font-medium">✔ Perfect Score</p>
            </div>

            <!-- BUTTONS -->
             <div class="flex flex-wrap gap-4 mt-6" >
                <a id="home-button"  onclick="homeButtonHandler(event)"
                    class="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-500 text-white font-semibold shadow-lg hover:scale-105 transition cursor-pointer">
                    🏠 Back to Home
                </a>

                <a id="exams-button" onclick="examsButtonHandler(event)"
                    class="px-6 py-3 rounded-xl border-2 border-indigo-500 text-indigo-600 font-semibold hover:bg-indigo-50 transition cursor-pointer">
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
            <h1 class="text-4xl font-bold text-gray-800 mb-3">
             Hi, ${user.fname}.. <br>
                Congratulations 🎉
            </h1>

            <h2
                class="text-5xl font-extrabold bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent mb-5">
                You <span class="text-green-500">Passed</span> The Exam Successfully!
            </h2>

            <p class="text-gray-600 text-lg mb-8">
                Excellent job! You successfully completed the exam with a Good score.
            </p>

            <!-- SCORE CARD -->
            <div class="bg-indigo-50 rounded-2xl p-6 mb-6 shadow">
                <p class="text-indigo-600 font-semibold mb-2">Your Score</p>

                <div class="flex items-end gap-2">
                    <span class="text-6xl font-bold text-gray-800">${score}</span>
                    <span class="text-3xl text-gray-400">/${currentExam.length}</span>
                </div>

                <div class="mt-4 h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div class="h-full rounded-full bg-gradient-to-r  from-indigo-600 to-blue-500" style="width: ${score / currentExam.length * 100}%"></div>
                </div>

                <p class="mt-3 text-green-600 font-medium">✔ Good Score</p>
            </div>

            <!-- BUTTONS -->
            <div class="flex flex-wrap gap-4 mt-6" >
                <a id="home-button"  onclick="homeButtonHandler(event)"
                    class="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-500 text-white font-semibold shadow-lg hover:scale-105 transition cursor-pointer">
                    🏠 Back to Home
                </a>

                <a id="exams-button" onclick="examsButtonHandler(event)"
                    class="px-6 py-3 rounded-xl border-2 border-indigo-500 text-indigo-600 font-semibold hover:bg-indigo-50 transition cursor-pointer">
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
            <h1 class="text-4xl font-bold text-gray-800 mb-3">
             Hi, ${user.fname}.. <br>
             Sorry 😔
            </h1>

            <h2
                class="text-5xl font-extrabold bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent mb-5">
                You <span class="text-red-500">Failed</span> The Exam!
            </h2>

            <p class="text-gray-600 text-lg mb-8">
                You did not meet the passing threshold. Keep practicing and try again!
            </p>

            <!-- SCORE CARD -->
            <div class="bg-indigo-50 rounded-2xl p-6 mb-6 shadow">
                <p class="text-indigo-600 font-semibold mb-2">Your Score</p>

                <div class="flex items-end gap-2">
                    <span class="text-6xl font-bold text-gray-800">${score}</span>
                    <span class="text-3xl text-gray-400">/${currentExam.length}</span>
                </div>

                <div class="mt-4 h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div class="h-full rounded-full bg-gradient-to-r  from-indigo-600 to-blue-500" style="width: ${score / currentExam.length * 100}%"></div>
                </div>

                <p class="mt-3 text-red-600 font-medium">❌ Failed Score</p>
            </div>

            <!-- BUTTONS -->
             <div class="flex flex-wrap gap-4 mt-6" >
                <a id="home-button"  onclick="homeButtonHandler(event)"
                    class="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-500 text-white font-semibold shadow-lg hover:scale-105 transition cursor-pointer">
                    🏠 Back to Home
                </a>

                <a id="exams-button" onclick="examsButtonHandler(event)"
                    class="px-6 py-3 rounded-xl border-2 border-indigo-500 text-indigo-600 font-semibold hover:bg-indigo-50 transition cursor-pointer">
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












