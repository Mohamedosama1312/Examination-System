//^CurrentUser From Local Storage
user = JSON.parse(localStorage.getItem("currentUser"));

//^CurrentExam From Local Storage
const examQuestions = JSON.parse(localStorage.getItem("currentExam"));

if (user && examQuestions) {

    //^ timer logic

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
            minutesEl.classList.add("animate-pulse");
            minutesEl.classList.add("text-red-500");
            secondsEl.classList.add("animate-pulse");
            secondsEl.classList.add("text-red-500");
        } else if (percentage <= 50) {
            progressEl.classList.add("text-warning");
            minutesEl.classList.add("text-yellow-500");
            secondsEl.classList.add("text-yellow-500");
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

            window.location.replace("../timeout/timeout.html");
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
    const options = document.querySelectorAll('input[name="answer"]');
    const completeBar = document.getElementById("completeBar");
    const progressPercentage = document.getElementById("progressPercentage");
    const remainingCount = document.getElementById("remainingCount");
    const flaggedCount = document.getElementById("flaggedCount");
    const answeredCount = document.getElementById("answeredCount");
    const submitBtn = document.getElementById("submitEx");

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
        //^ Update Progress part
        updateProgress();

    }

    function updateProgress() {
        const answeredQuestions = examQuestions.filter(q => q.userAnswer).length;
        const flaggedQuestions = examQuestions.filter(q => q.flagged).length;
        const remainingQuestions = examQuestions.length - answeredQuestions;
        const progressPercent = Math.round((answeredQuestions / examQuestions.length) * 100);

        completeBar.style.width = progressPercent + "%";
        progressPercentage.textContent = progressPercent + "% Completed";
        remainingCount.textContent = remainingQuestions + " Remaining";
        flaggedCount.textContent = flaggedQuestions + " Flagged";
        answeredCount.textContent = answeredQuestions + " Answered";
    }
    updateQuestion();
    flaggedQuestions();
    updateProgress();

    //^intially disable previous button
    if (currentQuestionIndex === 0) {
        preBtn.disabled = true;
    }

    //^intially disable Next button
    if (currentQuestionIndex === examQuestions.length - 1) {
        nextBtn.disabled = true;
    }

    //^ chick if the current question is flagged 
    if (examQuestions[currentQuestionIndex].flagged === true) {
        flagBtn.classList.remove("text-gray-400");
        flagBtn.classList.add("text-yellow-300");
        flagBtn.classList.add("bg-yellow-100");
    }
    //^ Event Listeners for Pre Button
    preBtn.addEventListener("click", (e) => {
        e.preventDefault();
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


        //^ chick if the current question is flagged

        if (examQuestions[currentQuestionIndex].flagged === true) {
            flagBtn.classList.remove("text-gray-400");
            flagBtn.classList.add("text-yellow-300");
            flagBtn.classList.add("bg-yellow-100");
        } else if (examQuestions[currentQuestionIndex].flagged === false) {
            flagBtn.classList.remove("text-yellow-300");
            flagBtn.classList.remove("bg-yellow-100");
            flagBtn.classList.add("text-gray-400");
        }



        //^ Update Answer Selection UI
        options.forEach(option => option.checked = false);

        if (examQuestions[currentQuestionIndex].userAnswer) {
            options.forEach(option => {
                if (option.value === examQuestions[currentQuestionIndex].userAnswer) {
                    option.checked = true;
                }
            });
        }
    });


    //^ Event Listeners for Next Button

    nextBtn.addEventListener("click", (e) => {
        e.preventDefault();
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

        //^ chick if the current question is flagged

        if (examQuestions[currentQuestionIndex].flagged === true) {
            flagBtn.classList.remove("text-gray-400");
            flagBtn.classList.add("text-yellow-300");
            flagBtn.classList.add("bg-yellow-100");
        } else if (examQuestions[currentQuestionIndex].flagged === false) {
            flagBtn.classList.remove("text-yellow-300");
            flagBtn.classList.remove("bg-yellow-100");
            flagBtn.classList.add("text-gray-400");
        }

        //^ Update Answer Selection UI
        options.forEach(option => option.checked = false);

        if (examQuestions[currentQuestionIndex].userAnswer) {
            options.forEach(option => {
                if (option.value === examQuestions[currentQuestionIndex].userAnswer) {
                    option.checked = true;
                }
            });
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

        //^ chick if the current question is flagged

        if (examQuestions[currentQuestionIndex].flagged === true) {
            flagBtn.classList.remove("text-gray-400");
            flagBtn.classList.add("text-yellow-300");
            flagBtn.classList.add("bg-yellow-100");
        } else if (examQuestions[currentQuestionIndex].flagged === false) {
            flagBtn.classList.remove("text-yellow-300");
            flagBtn.classList.remove("bg-yellow-100");
            flagBtn.classList.add("text-gray-400");
        }


        //^ Update Answer Selection UI
        options.forEach(option => option.checked = false);

        if (examQuestions[currentQuestionIndex].userAnswer) {
            options.forEach(option => {
                if (option.value === examQuestions[currentQuestionIndex].userAnswer) {
                    option.checked = true;
                }
            });
        }

    }


    function flaggedQuestions() {

        for (let i = 0; i < examQuestions.length; i++) {

            if (examQuestions[i].flagged === true) {
                flaggedList.innerHTML += `   <div onclick="goToQuestion(${i})"
                            class="p-4 bg-blue-100 border-l-4 border-blue-500 rounded-lg cursor-pointer hover:bg-blue-200 transition-colors">
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

    flagBtn.addEventListener("click", (e) => {
        e.preventDefault();

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
        updateProgress();


    });



    //^ ################## Answer & score  ###################    

    //^ Update Answer Selection UI
    options.forEach(option => option.checked = false);

    if (examQuestions[currentQuestionIndex].userAnswer) {
        options.forEach(option => {
            if (option.value === examQuestions[currentQuestionIndex].userAnswer) {
                option.checked = true;
            }
        });
    }

    //^ Selected Answer changes
    options.forEach(option => {
        option.addEventListener("change", (e) => {
            const selectedAnswer = e.target.value;
            examQuestions[currentQuestionIndex].userAnswer = selectedAnswer;
            localStorage.setItem("currentExam", JSON.stringify(examQuestions));
            updateProgress();
        })


    });



    function calculateScore() {
        let score = 0;
        examQuestions.forEach(question => {
            if (question.userAnswer === question.correctAnswer) {
                score++;
            }
        });
        localStorage.setItem("score", score);


    };


    //^ Submit Exam
    submitBtn.addEventListener("click", (e) => {
        Swal.fire({
            title: "Are you sure?",
            html: `Are you sure you want to submit the exam? <br>
           <h3 class="text-lg font-semibold "><span class="text-success"> Answered </span>: ${examQuestions.filter(q => q.userAnswer).length} </h3> 
           <h3 class="text-lg font-semibold "><span class="text-blue-500"> Flagged </span>: ${examQuestions.filter(q => q.flagged).length} </h3> 
           <h3 class="text-lg font-semibold "><span class="text-red-600"> Remaining </span>: ${examQuestions.filter(q => !q.userAnswer).length} </h3>`,
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, submit it!"
        }).then((result) => {
            if (result.isConfirmed) {
                e.preventDefault();
                localStorage.setItem("currentQuestionIndex", currentQuestionIndex);
                updateQuestion();
                calculateScore();
                localStorage.removeItem("examTimeLeft");
                location.replace("../grades/grades.html");
            }
        });
    })


    //^ prevent going back to exams page 


    let examActive = true;

    // نزود الصفحة في الـ history
    history.pushState(null, null, location.href);

    window.addEventListener("popstate", function () {

        if (examActive) {

            // نرجعه تاني لنفس الصفحة
            history.pushState(null, null, location.href);

            // نطلع تحذير
            Swal.fire({
                icon: "warning",
                title: "Exam In Progress!",
                text: "You cannot go back while the exam is running.",
                confirmButtonText: "Continue Exam",
                confirmButtonColor: "#3085d6",
                allowOutsideClick: false,
                allowEscapeKey: false
            });

        }

    });





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

} else {
    location.replace("../exams/exams.html");
}