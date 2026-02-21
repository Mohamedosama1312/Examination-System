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

    //^#########################

    const questionTitle = document.getElementById("questionTitle");
    const answerA = document.getElementById("answerA");
    const answerB = document.getElementById("answerB");
    const answerC = document.getElementById("answerC");
    const answerD = document.getElementById("answerD");
    const qOf = document.getElementById("qOf");
    const qNumber = document.getElementById("qNumber");
    const preBtn = document.getElementById("preBtn");
    const nextBtn = document.getElementById("nextBtn");
    const flaggedList = document.getElementById("flaggedList");
    const flagBtn = document.getElementById("flagBtn");


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




        if (examQuestions[currentQuestionIndex].flagged === true) {
            flagBtn.classList.remove("text-gray-400");
            flagBtn.classList.add("text-yellow-300");
            flagBtn.classList.add("bg-yellow-100");
        } else if (examQuestions[currentQuestionIndex].flagged === false) {
            flagBtn.classList.remove("text-yellow-300");
            flagBtn.classList.remove("bg-yellow-100");
            flagBtn.classList.add("text-gray-400");
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



        if (examQuestions[currentQuestionIndex].flagged === true) {
            flagBtn.classList.remove("text-gray-400");
            flagBtn.classList.add("text-yellow-300");
            flagBtn.classList.add("bg-yellow-100");
        } else if (examQuestions[currentQuestionIndex].flagged === false) {
            flagBtn.classList.remove("text-yellow-300");
            flagBtn.classList.remove("bg-yellow-100");
            flagBtn.classList.add("text-gray-400");
        }

    });





    //^ ################## Flagged Questions Logic###################

    function goToQuestion(index) {
        currentQuestionIndex = index;
        localStorage.setItem("currentQuestionIndex", currentQuestionIndex);
        updateQuestion();
        preBtn.disabled = false;
        nextBtn.disabled = false;
        if (currentQuestionIndex === 0) {
            preBtn.disabled = true;
        }
        if (currentQuestionIndex === examQuestions.length - 1) {
            nextBtn.disabled = true;
        }

        if (examQuestions[currentQuestionIndex].flagged === true) {
            flagBtn.classList.remove("text-gray-400");
            flagBtn.classList.add("text-yellow-300");
            flagBtn.classList.add("bg-yellow-100");
        } else if (examQuestions[currentQuestionIndex].flagged === false) {
            flagBtn.classList.remove("text-yellow-300");
            flagBtn.classList.remove("bg-yellow-100");
            flagBtn.classList.add("text-gray-400");
        }


    }


    function flaggedQuestions() {

        for (let i = 0; i < examQuestions.length; i++) {

            if (examQuestions[i].flagged === true) {
                flaggedList.innerHTML += ` <div onclick="goToQuestion(${i})"
                            class="p-4 bg-blue-50 border-l-4 border-primary rounded-lg cursor-pointer hover:bg-blue-100 transition-colors">
                            <div class="flex justify-between items-center">
                                <span class="font-semibold text-gray-800">Question ${i + 1}</span>
                                <svg class="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9">
                                    </path>
                                </svg>
                            </div>
                            <p class="text-sm text-gray-600 mt-2 line-clamp-2">
                                ${examQuestions[i].question}
                            </p>
                        </div>`


            }

        }
    }

    flagBtn.addEventListener("click", () => {

        if (examQuestions[currentQuestionIndex].flagged === false) {

            examQuestions[currentQuestionIndex].flagged = true;
            flagBtn.classList.remove("text-gray-400");
            flagBtn.classList.add("text-yellow-300");
            flagBtn.classList.add("bg-yellow-100");
        } else if (examQuestions[currentQuestionIndex].flagged === true) {
            examQuestions[currentQuestionIndex].flagged = false;
            flagBtn.classList.remove("text-yellow-300");
            flagBtn.classList.remove("bg-yellow-100");
            flagBtn.classList.add("text-gray-400");
        }
        localStorage.setItem("currentExam", JSON.stringify(examQuestions));
        flaggedList.innerHTML = "";
        flaggedQuestions();

    });









} else {
    localStorage.removeItem("examTimeLeft");

    location.replace("exams.html");
}