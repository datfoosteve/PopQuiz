// code the click event from the start button to start the timer

// code timer
// code question - Array of objects;

// Answer form question by clicking using the click event handler
//
// Check if question boolean is true, move on to next qurestion on click event(choices)
//is false, subtract from timer 10 seconds and then move on to question from click event.(choices)

// Post some sort of message stating the game is over page

//Final conditions is when the timer reaches 0 or all the questions are answers
// Then - use local storage to store initials (string) of the player.
var mainEl = document.getElementById("main");
let timerEl = document.getElementById("countDown");

const questionEl = document.getElementById("theQuestion");
let shuffleQuestions, currentQuestion;


var gameTimer = 5;
var timeInterval;

const startButtonEl = document.getElementById("btnStart");
const endButtonEl = document.getElementById("btnQuit");
//const aButtonEl = document.querySelector("");

startButtonEl.addEventListener("click", startGame);
const questionContainer = document.getElementById("qContainer")

startButtonEl.classList.remove("hide");
endButtonEl.classList.remove("hide");

function startGame() {
timerEl.classList.remove("hide");
startButtonEl.classList.add("hide");
questionContainer.classList.remove("hide");

  timeInterval = setInterval(function () {
    if (gameTimer >= 1) {
      // Update screen with new time
      timerEl.textContent = gameTimer + " seconds remaining";
      gameTimer--;
    } else if (gameTimer <= 0) {
        timerEl.classList.add("hide");
      clearInterval(timeInterval);
      
      gameTimer = 30;
      return null;
      // Update Screen that the game is over and timer is cleared
    }
  }, 1000);
}

function nextQuestion() {}

function userAnswerCorrect() {}

const questionList = [
  {
    question: "What is the meaning of life",
    answers: [
      (questionA = { text: "", correct: false }),
      (questionB = { text: "", correct: false }),
      (questionC = { text: "", correct: false }),
      (questionD = { text: "", correct: false }),
    ],
  },
  {
    question: "What is the meaning of life",
    answers: [
      (questionA = { text: "", correct: false }),
      (questionB = { text: "", correct: false }),
      (questionC = { text: "", correct: false }),
      (questionD = { text: "", correct: false }),
    ],
  },
  {
    question: "What is the meaning of life",
    answers: [
      (questionA = { text: "", correct: false }),
      (questionB = { text: "", correct: false }),
      (questionC = { text: "", correct: false }),
      (questionD = { text: "", correct: false }),
    ],
  },
  {
    question: "What is the meaning of life",
    answers: [
      (questionA = { text: "", correct: false }),
      (questionB = { text: "", correct: false }),
      (questionC = { text: "", correct: false }),
      (questionD = { text: "", correct: false }),
    ],
  },
  {
    question: "What is the meaning of life",
    answers: [
      (questionA = { text: "", correct: false }),
      (questionB = { text: "", correct: false }),
      (questionC = { text: "", correct: false }),
      (questionD = { text: "", correct: false }),
    ],
  },
  {
    question: "What is the meaning of life",
    answers: [
      (questionA = { text: "", correct: false }),
      (questionB = { text: "", correct: false }),
      (questionC = { text: "", correct: false }),
      (questionD = { text: "", correct: false }),
    ],
  },
  {
    question: "What is the meaning of life",
    answers: [
      (questionA = { text: "", correct: false }),
      (questionB = { text: "", correct: false }),
      (questionC = { text: "", correct: false }),
      (questionD = { text: "", correct: false }),
    ],
  },
  {
    question: "What is the meaning of life",
    answers: [
      (questionA = { text: "", correct: false }),
      (questionB = { text: "", correct: false }),
      (questionC = { text: "", correct: false }),
      (questionD = { text: "", correct: false }),
    ],
  },
];
