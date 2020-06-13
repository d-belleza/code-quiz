//Assignments
var textEl = document.getElementById('question');
var optionButtonEl = document.getElementById('option-btns');

//Question assignment
var questions = [
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

var timer = function(){
    var sec = 30;
    var timer = setInterval(function(){
        document.getElementById('safeTimerDisplay').innerHTML='00:'+sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
        }
    }, 1000);
}

startScreen();