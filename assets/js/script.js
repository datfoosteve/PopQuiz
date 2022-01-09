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
var mainEl = document.getElementById("#main");
let timerEl = document.querySelector("#countDown");

const questionEl = document.getElementById("theQuestion");
let shuffleQuestions, currentQuestion;

let abra = document.querySelector("#gameTimerWrapper");
let kadabra = document.querySelector("#qContainer");
var gameTimer = 30;
var timeInterval;

const startButtonEl = document.querySelector("#Start");
const aButtonEl = document.querySelector("#Start");

startButtonEl.addEventListener("click", startGame);

function startGame() {
  abra.style.visibility = "visible";
  kadabra.style.visibility = "visible";
  timeInterval = setInterval(function () {
    if (gameTimer >= 1) {
      // Update screen with new time
      timerEl.textContent = gameTimer + " seconds remaining";
      gameTimer--;
    } else if (gameTimer <= 0) {
      clearInterval(timeInterval);
      abra.style.visibility = "hidden";
      kadabra.style.visibility = "hidden";
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
