//Assignments
var currentQuestion = 0;
var score = 0;

var startScreenEl = document.getElementById("start-screen");
var timerEl = document.getElementById("countdown");
var quizEl = document.getElementById("quiz");
var endScreenEl = document.getElementById("end-screen");

var questionEl = document.getElementById("question");
var btn1El = document.getElementById("btn1");
var btn2El = document.getElementById("btn2");
var btn3El = document.getElementById("btn3");
var btn4El = document.getElementById("btn4");

//Question assignment
var questionArray = [
    {
        q: "Commonly used data types DO NOT include:",
        option1: "Strings",
        option2: "Booleans",
        option3: "Alerts",
        option4: "Numbers",
        answer: "Numbers"
    },
    {
        q: "The condition in an if/else statement is enclosed within",
        option1: "Quotes",
        option2: "Curly Brackets",
        option3: "Parenthesis",
        option4: "Square Brackets",
        answer: "Curly Brackets"
    },
    {
        q: "Arrays in Javascript can be used to store",
        option1: "Numbers and strings",
        option2: "Other Arrays",
        option3: "Booleans",
        option4: "All of the above",
        answer: "All of the above"
    },
    {
        q: "String values must be enclosed within____. When being assigned to variables",
        option1: "Commas",
        option2: "Curly Brackets",
        option3: "Quotes",
        option4: "Parenthesis",
        answer: "Parenthesis"
    },
    {
        q: "A very useful tool used during development and debugging for printing content to the debugger is",
        option1: "Javascript",
        option2: "Terminal/Bash",
        option3: "For Loops",
        option4: "Console.log",
        answer: "Console.log"
    }
];

function newScreen(){
    quizEl.style.display = "none";
    endScreenEl.style.display = "none";
}

function startHandler(){
    var timeLeft = 5;
    startScreenEl.style.display = "none";
    quizEl.style.display = "block";
    
    var timeInterval = setInterval(function () {
        timerEl.textContent = "Time: " + timeLeft + " seconds";
        loadQuestion(currentQuestion);
        timeLeft--;
        if (timeLeft === 0) {
            quizEl.style.display = "none";
            endScreenEl.style.display = "block";    
            timerEl.textContent = "Time: " + timeLeft + " seconds";
            clearInterval(timeInterval);
        }
    
      }, 1000);
}

function loadQuestion(questionIndex){
    var q = questionArray[questionIndex];
    questionEl.textContent = (questionIndex + 1) + ". " + q.question;
    btn1El.textContent = q.option1;
    btn2El.textContent = q.option2;
    btn3El.textContent = q.option3;
    btn4El.textContent = q.option4;
}

newScreen();
startScreenEl.addEventListener("click", startHandler);