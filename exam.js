//^CurrentUser From Local Storage
user = JSON.parse(localStorage.getItem("currentUser"));

//^CurrentExam From Local Storage
const examQuestions = JSON.parse(localStorage.getItem("currentExam"));

if (user && examQuestions) {

    const totalTime = 30;
    let timeLeft = totalTime;

    const timeEl = document.getElementById("time");
    const progressEl = document.getElementById("progress");



    const interval = setInterval(() => {
        timeLeft--;

        timeEl.textContent = timeLeft;

        const percentage = (timeLeft / totalTime) * 100;
        progressEl.style.setProperty("--value", percentage);
        progressEl.classList.remove("text-primary", "text-warning", "text-error");

        if (percentage <= 25) {
            progressEl.classList.add("text-error");
        } else if (percentage <= 50) {
            progressEl.classList.add("text-warning");
        } else {
            progressEl.classList.add("text-primary");
        }

        if (timeLeft <= 0) {
            window.location.replace("timeout.html")
            clearInterval(interval);
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