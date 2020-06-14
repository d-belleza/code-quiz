//Assignments
var currentQuestion = 0;
var score = 0;

var startScreenEl = document.getElementById("start-screen");
var startBtnEl = document.getElementById("start-btn");
var timerEl = document.getElementById("countdown");
var quizEl = document.getElementById("quiz");
var endScreenEl = document.getElementById("end-screen");
var scoreEl = document.getElementById("your-score");
var saveBtnEl = document.getElementById("save-score");

var questionEl = document.getElementById("question");
var optionBtnEl = document.getElementById("option-btns")

//Question assignment
var questionArray = [
    {
        question: "Commonly used data types DO NOT include:",
        options: [
            {option: "Strings", correct: false},
            {option: "Booleans", correct: false},
            {option: "Alerts", correct: false},
            {option: "Numbers", correct: true}
        ]
    },
    {
        question: "The condition in an if/else statement is enclosed within",
        options: [
            {option: "Quotes", correct: false},
            {option: "Curly Brackets", correct: true},
            {option: "Parenthesis", correct: false},
            {option: "Square Brackets", correct: false}
        ]
    },
    {
        question: "Arrays in Javascript can be used to store",
        options: [
            {option: "Numbers and strings", correct: false},
            {option: "Other Arrays", correct: false},
            {option: "Booleans", correct: false},
            {option: "All of the above", correct: true}
        ]
    },
    {
        question: "String values must be enclosed within____. When being assigned to variables",
        options: [
            {option: "Commas", correct: false},
            {option: "Curly Brackets", correct: false},
            {option: "Quotes", correct: false},
            {option: "Parenthesis", correct: true}
        ]
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is",
        options: [
            {option: "Javascript", correct: false},
            {option: "Terminal/Bash", correct: false},
            {option: "For Loops", correct: false},
            {option: "Console.log", correct: true}
        ]
    }
];

function newScreen(){
    endScreenEl.style.display = "none";
    quizEl.style.display = "none";
}

function startHandler(){
    //var timeLeft = 30;
    startScreenEl.style.display = "none";
    quizEl.style.display = "block";
    loadNextQuestion();
    /*var timeInterval = setInterval(function () {
        timerEl.textContent = "Time: " + timeLeft + " seconds";
        timeLeft--;
        if (timeLeft <= 0 || (currentQuestion === questionArray.length)) {
            if(timeLeft <= 0){
                score = 0;
            }else{
                score = timeLeft;
            }
            clearInterval(timeInterval);
            loadEndScreen();
        }
    

      }, 1000);*/
}

function loadNextQuestion(){
    loadQuestion(questionArray[currentQuestion]);
}

function loadQuestion(question){
    questionEl.innerText = question.question;
    question.options.forEach(option => {
        var button = document.createElement('button');
        button.innerText = options.option;
        button.classList.add("btn");
        if(option.correct){
            button.dataset.correct = option.correct;
        }
        button.addEventListener("click", selectOption);
        
    });
}



function loadEndScreen(){
    quizEl.style.display = "none";
    endScreenEl.style.display = "flex";
    scoreEl.textContent = "Score: " + score;
    timerEl.textContent = "";
    saveBtnEl.addEventListener("click", newScreen)

}

newScreen();
startBtnEl.addEventListener("click", startHandler);

