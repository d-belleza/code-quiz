//Assignments
var startScreenEl = document.getElementById("start-screen");
var timerEl = document.getElementById("countdown");
var quizEl = document.getElementById("quiz");
var endScreenEl = document.getElementById("end-screen");

var newScreen = function(){
    quizEl.style.display = "none";
    endScreenEl.style.display = "none";
}

var startHandler = function(){
    var timeLeft = 5;
    startScreenEl.style.display = "none";
    quizEl.style.display = "block";
    var timeInterval = setInterval(function () {
        timerEl.textContent = "Time: " + timeLeft + " seconds";
        timeLeft--;
        if (timeLeft === 0) {
            quizEl.style.display = "none";
            endScreenEl.style.display = "block";    
            timerEl.textContent = "Time: " + timeLeft + " seconds";
            clearInterval(timeInterval);
        }
    
      }, 1000);
}


newScreen();
startScreenEl.addEventListener("click", startHandler);