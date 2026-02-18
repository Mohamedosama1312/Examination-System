//^CurrentUser From Local Storage
user = JSON.parse(localStorage.getItem("currentUser"));

if (user) {
    //^Fisher–Yates Shuffle for Randomizing Exam Questions
    function shuffleArray(array) {
        let newArray = [...array];

        for (let i = newArray.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }

        return newArray;
    }




    //^ JS Exam Questions
    let jsExamElement = document.getElementById("js-exam");

    const jsExamQuestions = [
        {
            id: 1,
            question: 'What is the correct syntax to output "Hello World" in JavaScript?',
            options: {
                A: 'echo("Hello World");',
                B: 'console.log("Hello World");',
                C: 'print("Hello World");',
                D: 'System.out.println("Hello World");'
            },
            correctAnswer: "B",
            flagged: false
        },
        {
            id: 2,
            question: "What will console.log(0 || 10) print?",
            options: {
                A: "0",
                B: "10",
                C: "undefined",
                D: "NaN"
            },
            correctAnswer: "B",
            flagged: false
        },
        {
            id: 3,
            question: "Which method is used to convert JSON string to JavaScript object?",
            options: {
                A: "JSON.stringify()",
                B: "JSON.parse()",
                C: "JSON.convert()",
                D: "JSON.toObject()"
            },
            correctAnswer: "B",
            flagged: false
        },
        {
            id: 4,
            question: "Which of the following is NOT a JavaScript data type?",
            options: {
                A: "String",
                B: "Boolean",
                C: "Float",
                D: "Undefined"
            },
            correctAnswer: "C",
            flagged: false
        },
        {
            id: 5,
            question: "What does === operator do?",
            options: {
                A: "Compares values only",
                B: "Compares values and types",
                C: "Assigns value",
                D: "Checks if variable exists"
            },
            correctAnswer: "B",
            flagged: false
        },
        {
            id: 6,
            question: "Which array method adds an element to the end of an array?",
            options: {
                A: "push()",
                B: "pop()",
                C: "shift()",
                D: "unshift()"
            },
            correctAnswer: "A",
            flagged: false
        },
        {
            id: 7,
            question: "What will typeof null return?",
            options: {
                A: "null",
                B: "object",
                C: "undefined",
                D: "number"
            },
            correctAnswer: "B",
            flagged: false
        },
        {
            id: 8,
            question: "Which function is used to delay code execution?",
            options: {
                A: "setInterval()",
                B: "setTimeout()",
                C: "delay()",
                D: "wait()"
            },
            correctAnswer: "B",
            flagged: false
        },
        {
            id: 9,
            question: "Which keyword is used to create a class in JavaScript?",
            options: {
                A: "function",
                B: "object",
                C: "class",
                D: "constructor"
            },
            correctAnswer: "C",
            flagged: false
        },
        {
            id: 10,
            question: "Which method removes the last element from an array?",
            options: {
                A: "push()",
                B: "shift()",
                C: "splice()",
                D: "pop()"
            },
            correctAnswer: "D",
            flagged: false
        }
    ];


    jsExamElement.addEventListener("click", function (e) {
        e.preventDefault();
        let shuffledQuestions = shuffleArray(jsExamQuestions);
        localStorage.setItem("currentExam", JSON.stringify(shuffledQuestions));
        location.replace("exam.html");
    });



    //^ Css Exam Questions




} else {
    location.replace("login.html");
}