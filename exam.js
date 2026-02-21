//^CurrentUser From Local Storage
user = JSON.parse(localStorage.getItem("currentUser"));

//^CurrentExam From Local Storage
const examQuestions = JSON.parse(localStorage.getItem("currentExam"));

if (user && examQuestions) {

    const totalTime = 15 * 60;
    let savedTime = localStorage.getItem("examTimeLeft");
    let timeLeft;
    if (savedTime !== null) {
        timeLeft = Number(savedTime);
    } else {
        timeLeft = totalTime;
    }

    const minutesEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");
    const progressEl = document.getElementById("progress");



    function updateTimerUI() {

        var minutes = Math.floor(timeLeft / 60);
        var seconds = timeLeft % 60;

        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        minutesEl.textContent = minutes;
        secondsEl.textContent = seconds;

        var percentage = (timeLeft / totalTime) * 100;
        progressEl.style.setProperty("--value", percentage);


        progressEl.classList.remove("text-primary");
        progressEl.classList.remove("text-warning");
        progressEl.classList.remove("text-error");

        if (percentage <= 25) {
            progressEl.classList.add("text-error");
        } else if (percentage <= 50) {
            progressEl.classList.add("text-warning");
        } else {
            progressEl.classList.add("text-primary");
        }
    }

    updateTimerUI();

    var interval = setInterval(function () {

        timeLeft--;

        localStorage.setItem("examTimeLeft", timeLeft);

        updateTimerUI();

        if (timeLeft <= 0) {
            clearInterval(interval);

            localStorage.removeItem("examTimeLeft");

            window.location.replace("timeout.html");
        }

    }, 1000);

    const questionTitle = document.getElementById("questionTitle");
    const answerA = document.getElementById("answerA");
    const answerB = document.getElementById("answerB");
    const answerC = document.getElementById("answerC");
    const answerD = document.getElementById("answerD");
    const qOf = document.getElementById("qOf");
    const qNumber = document.getElementById("qNumber");
    const preBtn = document.getElementById("preBtn");
    const nextBtn = document.getElementById("nextBtn");


    //^ Save current question index to local storage for persistence across page reloads
    let currentQuestionIndex = parseInt(localStorage.getItem("currentQuestionIndex")) || 0;
    localStorage.setItem("currentQuestionIndex", currentQuestionIndex);

    function updateQuestion() {
        questionTitle.innerHTML = examQuestions[currentQuestionIndex].question;
        answerA.innerHTML = "A. " + examQuestions[currentQuestionIndex].options.A;
        answerB.innerHTML = "B. " + examQuestions[currentQuestionIndex].options.B;
        answerC.innerHTML = "C. " + examQuestions[currentQuestionIndex].options.C;
        answerD.innerHTML = "D. " + examQuestions[currentQuestionIndex].options.D;
        qOf.innerHTML = "Question " + (currentQuestionIndex + 1) + " of " + examQuestions.length;
        qNumber.innerHTML = currentQuestionIndex + 1;
    }

    updateQuestion();

    //^intially disable previous button
    if (currentQuestionIndex === 0) {
        preBtn.disabled = true;
    }

    //^intially disable Next button
    if (currentQuestionIndex === examQuestions.length - 1) {
        nextBtn.disabled = true;
    }

    //^ Event Listeners for Pre Button
    preBtn.addEventListener("click", () => {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            localStorage.setItem("currentQuestionIndex", currentQuestionIndex);
            updateQuestion();
            preBtn.disabled = false;
            nextBtn.disabled = false;
        }
        if (currentQuestionIndex === 0) {
            preBtn.disabled = true;
        }
    });


    //^ Event Listeners for Next Button

    nextBtn.addEventListener("click", () => {
        if (currentQuestionIndex < examQuestions.length - 1) {
            currentQuestionIndex++;
            localStorage.setItem("currentQuestionIndex", currentQuestionIndex);
            updateQuestion();
            preBtn.disabled = false;
            nextBtn.disabled = false;
        }
        if (currentQuestionIndex === examQuestions.length - 1) {
            nextBtn.disabled = true;
        }
    });








} else {
    location.replace("exams.html");
}