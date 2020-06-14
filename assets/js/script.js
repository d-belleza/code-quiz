//Assignments
var currentQuestion = 0;
var score = 0;
var timeLeft = 30;

var startScreenEl = document.getElementById("start-screen");
var startBtnEl = document.getElementById("start-btn");
var timerEl = document.getElementById("countdown");
var quizEl = document.getElementById("quiz");
var endScreenEl = document.getElementById("end-screen");
var scoreEl = document.getElementById("your-score");
var saveBtnEl = document.getElementById("save-score");

var questionEl = document.getElementById("question");
var optn1El = document.getElementById("optn1");
var optn2El = document.getElementById("optn2");
var optn3El = document.getElementById("optn3");
var optn4El = document.getElementById("optn4");
var nextBtnEl = document.getElementById("next-btn");
var alertEl = document.getElementById("alert-msg");

//Question assignment
var questionArray = [
    {
        question: "Commonly used data types DO NOT include:",
        option1: "Strings",
        option2: "Booleans",
        option3: "Alerts",
        option4: "Numbers",
        answer: "Numbers"
    },
    {
        question: "The condition in an if/else statement is enclosed within",
        option1: "Quotes",
        option2: "Curly Brackets",
        option3: "Parenthesis",
        option4: "Square Brackets",
        answer: "Curly Brackets"
    },
    {
        question: "Arrays in Javascript can be used to store",
        option1: "Numbers and strings",
        option2: "Other Arrays",
        option3: "Booleans",
        option4: "All of the above",
        answer: "All of the above"
    },
    {
        question: "String values must be enclosed within____. When being assigned to variables",
        option1: "Commas",
        option2: "Curly Brackets",
        option3: "Quotes",
        option4: "Parenthesis",
        answer: "Parenthesis"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is",
        option1: "Javascript",
        option2: "Terminal/Bash",
        option3: "For Loops",
        option4: "Console.log",
        answer: "Console.log"
    }
];

function newScreen(){
    currentQuestion = 0;
    startScreenEl.style.display = "flex";
    quizEl.style.display = "none";
    endScreenEl.style.display = "none";
    loadQuestion(currentQuestion);
}

function startHandler(){
    var countdown = timeLeft;
    startScreenEl.style.display = "none";
    quizEl.style.display = "block";
    var timeInterval = setInterval(function () {
        timerEl.textContent = "Time: " + countdown + " seconds";
        countdown--;
        if (countdown === 0 || currentQuestion === questionArray.length) {
            if(countdown === 0){
                score = 0;
            }else{
                score = countdown;
            }
            clearInterval(timeInterval);
            loadEndScreen();
        }
    
      }, 1000);
}


function loadQuestion(questionIndex){
    var q = questionArray[questionIndex];
    questionEl.textContent = (questionIndex + 1) + ". " + q.question;
    optn1El.textContent = q.option1;
    optn2El.textContent = q.option2;
    optn3El.textContent = q.option3;
    optn4El.textContent = q.option4;
}

function loadNextQuestion(){
    var selectedOption = document.querySelector("input[type=radio]:checked");
    if (!selectedOption) {
        alert("Please select your answer!");
        return;

    }
    var answer = selectedOption.nodeValue;
    if(questionArray[currentQuestion].answer == answer) {
        alertEl.textContent = "Correct!";
    }
    selectedOption.checked = false;
    currentQuestion++;
    if(currentQuestion === (questionArray.length - 1)) {
        nextBtnEl.textContent = "Finish";

    }
    if(currentQuestion === questionArray.length){
        loadEndScreen();
    }
    loadQuestion(currentQuestion);
}

function loadEndScreen(){
    quizEl.style.display = "none";
    endScreenEl.style.display = "flex";
    scoreEl.textContent = "Score: " + score;
    timerEl.textContent = "";
    saveBtnEl.addEventListener("click", newScreen);

}

newScreen();
startBtnEl.addEventListener("click", startHandler);
nextBtnEl.addEventListener("click", loadNextQuestion);