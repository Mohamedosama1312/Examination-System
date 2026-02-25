
const user = JSON.parse(localStorage.getItem("currentUser"));
const currentExam = JSON.parse(localStorage.getItem("currentExam"));
const score = parseInt(localStorage.getItem("score") || "0");




if (user && currentExam) {
    const backHomeBtn = document.getElementById("backHomeBtn");
    const takeAnotherExamBtn = document.getElementById("takeAnotherExamBtn");
    const timeoutTitle = document.getElementById("timeoutTitle");
    const percentage = (score / currentExam.length) * 100;

    timeoutTitle.innerHTML = `Soory ${user.fname}.. 
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
