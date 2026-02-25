//^ Current User
const user = JSON.parse(localStorage.getItem("currentUser"));

if (user) {

    function shuffleArray(array) {
        let newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    }

    function startExam(questions) {
        localStorage.removeItem("examTimeLeft");
        let shuffledQuestions = shuffleArray(questions);
        localStorage.setItem("currentExam", JSON.stringify(shuffledQuestions));
        localStorage.setItem("currentQuestionIndex", 0);
        localStorage.removeItem("examTimeLeft");

        location.replace("../exam/exam.html");
    }


    // ================= JS BEGINNER =================
    const jsBeginner = [
        { id: 1, question: "Which keyword declares a variable?", options: { A: "var", B: "int", C: "let", D: "Both A & C" }, correctAnswer: "D", flagged: false, userAnswer: null },
        { id: 2, question: "JavaScript runs in?", options: { A: "Browser", B: "Server", C: "Both", D: "None" }, correctAnswer: "C", flagged: false, userAnswer: null },
        { id: 3, question: "Which symbol for comments?", options: { A: "//", B: "&lt;!-- --&gt;", C: "#", D: "**" }, correctAnswer: "A", flagged: false, userAnswer: null },
        { id: 4, question: "typeof 5 ?", options: { A: "string", B: "number", C: "object", D: "null" }, correctAnswer: "B", flagged: false, userAnswer: null },
        { id: 5, question: "Which outputs data?", options: { A: "alert()", B: "console.log()", C: "print()", D: "write()" }, correctAnswer: "B", flagged: false, userAnswer: null },
        { id: 6, question: "Array uses?", options: { A: "()", B: "{}", C: "[]", D: "<>" }, correctAnswer: "C", flagged: false, userAnswer: null },
        { id: 7, question: "Which is boolean?", options: { A: "true", B: "1", C: "yes", D: "ok" }, correctAnswer: "A", flagged: false, userAnswer: null },
        { id: 8, question: "== does?", options: { A: "assign", B: "compare value", C: "compare type", D: "loop" }, correctAnswer: "B", flagged: false, userAnswer: null },
        { id: 9, question: "Function keyword?", options: { A: "func", B: "method", C: "function", D: "def" }, correctAnswer: "C", flagged: false, userAnswer: null },
        { id: 10, question: "NaN means?", options: { A: "Null", B: "Not a Number", C: "New", D: "None" }, correctAnswer: "B", flagged: false, userAnswer: null },
    ];

    // ================= JS ADVANCED =================
    const jsAdvanced = [
        { id: 1, question: "Closure is?", options: { A: "Function inside function", B: "Loop", C: "Array", D: "Object" }, correctAnswer: "A", flagged: false, userAnswer: null },
        { id: 2, question: "Promise states?", options: { A: "2", B: "3", C: "4", D: "1" }, correctAnswer: "B", flagged: false, userAnswer: null },
        { id: 3, question: "Async returns?", options: { A: "Promise", B: "Value", C: "Array", D: "Object" }, correctAnswer: "A", flagged: false, userAnswer: null },
        { id: 4, question: "Event Loop handles?", options: { A: "UI", B: "Async tasks", C: "CSS", D: "HTML" }, correctAnswer: "B", flagged: false, userAnswer: null },
        { id: 5, question: "this refers to?", options: { A: "Caller", B: "Owner", C: "Window", D: "Context" }, correctAnswer: "D", flagged: false, userAnswer: null },
        { id: 6, question: "Spread operator?", options: { A: "...", B: "***", C: "&&", D: "??" }, correctAnswer: "A", flagged: false, userAnswer: null },
        { id: 7, question: "Hoisting affects?", options: { A: "Variables", B: "Functions", C: "Both", D: "None" }, correctAnswer: "C", flagged: false, userAnswer: null },
        { id: 8, question: "Map returns?", options: { A: "Value", B: "Array", C: "Object", D: "Boolean" }, correctAnswer: "B", flagged: false, userAnswer: null },
        { id: 9, question: "Filter does?", options: { A: "Modify", B: "Delete", C: "Select", D: "Sort" }, correctAnswer: "C", flagged: false, userAnswer: null },
        { id: 10, question: "Reduce returns?", options: { A: "Array", B: "Single value", C: "Object", D: "Promise" }, correctAnswer: "B", flagged: false, userAnswer: null },
    ];

    // ================= ES6 =================
    const es6 = [
        { id: 1, question: "let scope?", options: { A: "Global", B: "Block", C: "Function", D: "None" }, correctAnswer: "B", flagged: false, userAnswer: null },
        { id: 2, question: "Arrow function syntax?", options: { A: "=>", B: "->", C: "==>", D: "===" }, correctAnswer: "A", flagged: false, userAnswer: null },
        { id: 3, question: "Template literal uses?", options: { A: "''", B: "\"\"", C: "``", D: "[]" }, correctAnswer: "C", flagged: false, userAnswer: null },
        { id: 4, question: "Destructuring works on?", options: { A: "Array", B: "Object", C: "Both", D: "None" }, correctAnswer: "C", flagged: false, userAnswer: null },
        { id: 5, question: "Default params?", options: { A: "ES5", B: "ES6", C: "ES7", D: "ES8" }, correctAnswer: "B", flagged: false, userAnswer: null },
        { id: 6, question: "Rest operator?", options: { A: "...", B: "&&", C: "??", D: "!!" }, correctAnswer: "A", flagged: false, userAnswer: null },
        { id: 7, question: "Module export?", options: { A: "export", B: "require", C: "include", D: "import" }, correctAnswer: "A", flagged: false, userAnswer: null },
        { id: 8, question: "Class keyword?", options: { A: "object", B: "function", C: "class", D: "new" }, correctAnswer: "C", flagged: false, userAnswer: null },
        { id: 9, question: "const reassignment?", options: { A: "Yes", B: "No", C: "Sometimes", D: "Undefined" }, correctAnswer: "B", flagged: false, userAnswer: null },
        { id: 10, question: "Promise.all returns?", options: { A: "One", B: "Array", C: "Object", D: "Boolean" }, correctAnswer: "B", flagged: false, userAnswer: null },
    ];

    // ================= HTML =================
    const htmlExam = [
        { id: 1, question: "HTML stands for?", options: { A: "HyperText Markup Language", B: "HighText", C: "Hyper Tool", D: "None" }, correctAnswer: "A", flagged: false, userAnswer: null },
        { id: 2, question: "Heading largest?", options: { A: "h6", B: "h4", C: "h1", D: "h2" }, correctAnswer: "C", flagged: false, userAnswer: null },
        { id: 3, question: "Anchor tag?", options: { A: "&lt;a&gt;", B: "&lt;p&gt;", C: "&lt;link&gt;", D: "&lt;href&gt;" }, correctAnswer: "A", flagged: false, userAnswer: null },
        { id: 4, question: "Image tag?", options: { A: "&lt;img&gt;", B: "&lt;image&gt;", C: "&lt;src&gt;", D: "&lt;pic&gt;" }, correctAnswer: "A", flagged: false, userAnswer: null },
        { id: 5, question: "List tag?", options: { A: "&lt;ul&gt;", B: "&lt;li&gt;", C: "Both", D: "&lt;list&gt;" }, correctAnswer: "C", flagged: false, userAnswer: null },
        { id: 6, question: "Form input?", options: { A: "&lt;input&gt;", B: "&lt;form&gt;", C: "&lt;field&gt;", D: "&lt;text&gt;" }, correctAnswer: "A", flagged: false, userAnswer: null },
        { id: 7, question: "Table row?", options: { A: "&lt;td&gt;", B: "&lt;th&gt;", C: "&lt;tr&gt;", D: "&lt;table&gt;" }, correctAnswer: "C", flagged: false, userAnswer: null },
        { id: 8, question: "Semantic tag?", options: { A: "&lt;div&gt;", B: "&lt;section&gt;", C: "&lt;span&gt;", D: "&lt;b&gt;" }, correctAnswer: "B", flagged: false, userAnswer: null },
        { id: 9, question: "Line break?", options: { A: "&lt;br&gt;", B: "&lt;hr&gt;", C: "&lt;lb&gt;", D: "&lt;p&gt;" }, correctAnswer: "A", flagged: false, userAnswer: null },
        { id: 10, question: "HTML file ext?", options: { A: ".css", B: ".js", C: ".html", D: ".json" }, correctAnswer: "C", flagged: false, userAnswer: null },
    ];

    // ================= CSS =================
    const cssExam = [
        { id: 1, question: "CSS stands for?", options: { A: "Cascading Style Sheets", B: "Color Style", C: "Creative", D: "None" }, correctAnswer: "A", flagged: false, userAnswer: null },
        { id: 2, question: "Color property?", options: { A: "color", B: "background", C: "font", D: "text" }, correctAnswer: "A", flagged: false, userAnswer: null },
        { id: 3, question: "Center with flex?", options: { A: "justify-content", B: "align-items", C: "Both", D: "None" }, correctAnswer: "C", flagged: false, userAnswer: null },
        { id: 4, question: "Position fixed?", options: { A: "Relative", B: "Viewport", C: "Parent", D: "Static" }, correctAnswer: "B", flagged: false, userAnswer: null },
        { id: 5, question: "Pseudo class?", options: { A: ":hover", B: "::after", C: "div", D: "class" }, correctAnswer: "A", flagged: false, userAnswer: null },
        { id: 6, question: "Z-index works with?", options: { A: "static", B: "positioned", C: "float", D: "display" }, correctAnswer: "B", flagged: false, userAnswer: null },
        { id: 7, question: "Hide element?", options: { A: "display:none", B: "opacity", C: "color", D: "z-index" }, correctAnswer: "A", flagged: false, userAnswer: null },
        { id: 8, question: "Box model?", options: { A: "margin", B: "padding", C: "border", D: "All" }, correctAnswer: "D", flagged: false, userAnswer: null },
        { id: 9, question: "Responsive unit?", options: { A: "px", B: "%", C: "rem", D: "Both B & C" }, correctAnswer: "D", flagged: false, userAnswer: null },
        { id: 10, question: "Grid layout?", options: { A: "flex", B: "grid", C: "float", D: "block" }, correctAnswer: "B", flagged: false, userAnswer: null },
    ];

    // ================= BOOTSTRAP =================
    const bootstrapExam = [
        { id: 1, question: "Bootstrap is?", options: { A: "Framework", B: "Language", C: "Library", D: "IDE" }, correctAnswer: "A", flagged: false, userAnswer: null },
        { id: 2, question: "Grid columns?", options: { A: "10", B: "12", C: "16", D: "8" }, correctAnswer: "B", flagged: false, userAnswer: null },
        { id: 3, question: "Primary color?", options: { A: "blue", B: "red", C: "green", D: "black" }, correctAnswer: "A", flagged: false, userAnswer: null },
        { id: 4, question: "Container class?", options: { A: "box", B: "container", C: "wrap", D: "content" }, correctAnswer: "B", flagged: false, userAnswer: null },
        { id: 5, question: "Button class?", options: { A: "btn", B: "button", C: "click", D: "press" }, correctAnswer: "A", flagged: false, userAnswer: null },
        { id: 6, question: "Responsive utility?", options: { A: "d-none", B: "hidden", C: "remove", D: "delete" }, correctAnswer: "A", flagged: false, userAnswer: null },
        { id: 7, question: "Navbar class?", options: { A: "nav", B: "navbar", C: "menu", D: "top" }, correctAnswer: "B", flagged: false, userAnswer: null },
        { id: 8, question: "Bootstrap uses?", options: { A: "JS", B: "CSS", C: "Both", D: "None" }, correctAnswer: "C", flagged: false, userAnswer: null },
        { id: 9, question: "Modal component?", options: { A: "popup", B: "alert", C: "modal", D: "window" }, correctAnswer: "C", flagged: false, userAnswer: null },
        { id: 10, question: "Bootstrap icon lib?", options: { A: "FontAwesome", B: "Bootstrap Icons", C: "Material", D: "None" }, correctAnswer: "B", flagged: false, userAnswer: null },
    ];

    // ================= TAILWIND =================
    const tailwindExam = [
        { id: 1, question: "Tailwind is?", options: { A: "Utility-first", B: "Component", C: "Language", D: "IDE" }, correctAnswer: "A", flagged: false, userAnswer: null },
        { id: 2, question: "Padding class?", options: { A: "p-4", B: "pad-4", C: "padding", D: "space" }, correctAnswer: "A", flagged: false, userAnswer: null },
        { id: 3, question: "Text center?", options: { A: "center-text", B: "text-center", C: "align", D: "txt" }, correctAnswer: "B", flagged: false, userAnswer: null },
        { id: 4, question: "Flex display?", options: { A: "flex", B: "d-flex", C: "display-flex", D: "grid" }, correctAnswer: "A", flagged: false, userAnswer: null },
        { id: 5, question: "Breakpoint md?", options: { A: "768px", B: "640px", C: "1024px", D: "1280px" }, correctAnswer: "A", flagged: false, userAnswer: null },
        { id: 6, question: "Background class?", options: { A: "bg-red-500", B: "background-red", C: "red-bg", D: "bg" }, correctAnswer: "A", flagged: false, userAnswer: null },
        { id: 7, question: "Font bold?", options: { A: "font-bold", B: "text-bold", C: "bold", D: "fw-bold" }, correctAnswer: "A", flagged: false, userAnswer: null },
        { id: 8, question: "Rounded corner?", options: { A: "rounded-lg", B: "radius", C: "border-round", D: "round" }, correctAnswer: "A", flagged: false, userAnswer: null },
        { id: 9, question: "Hover prefix?", options: { A: "hover:", B: "on:", C: "when:", D: "if:" }, correctAnswer: "A", flagged: false, userAnswer: null },
        { id: 10, question: "Tailwind config?", options: { A: "tailwind.config.js", B: "config.json", C: "tw.js", D: "style.js" }, correctAnswer: "A", flagged: false, userAnswer: null },
    ];

    // EVENTS
    document.getElementById("js-beginner").onclick = () => startExam(jsBeginner);
    document.getElementById("js-advanced").onclick = () => startExam(jsAdvanced);
    document.getElementById("es6-exam").onclick = () => startExam(es6);
    document.getElementById("html-exam").onclick = () => startExam(htmlExam);
    document.getElementById("css-exam").onclick = () => startExam(cssExam);
    document.getElementById("bootstrap-exam").onclick = () => startExam(bootstrapExam);
    document.getElementById("tailwind-exam").onclick = () => startExam(tailwindExam);



} else {
    location.replace("../login/login.html");
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