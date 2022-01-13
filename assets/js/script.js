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
let timerEl = document.getElementById("countDown");

let shuffleQuestions, currentQuestion;

var gameTimer = 30;
var timeInterval;

const startButtonEl = document.getElementById("btnStart");
const endButtonEl = document.getElementById("btnQuit");
const nextButton = document.getElementById("next");
const answerButtonEl = document.getElementById("answer-buttons");
const questionContainer = document.getElementById("qContainer");
const questionEl = document.getElementById("theQuestion");
//const aButtonEl = document.querySelector("");

startButtonEl.classList.remove("hide");
endButtonEl.classList.remove("hide");

startButtonEl.addEventListener("click", startGame);
// nextButton.addEventListener('click', );
nextButton.addEventListener("click", () => {
  currentQuestion++;
  nextQuestion();
});

function startGame() {
  timerEl.classList.remove("hide");
  startButtonEl.classList.add("hide");

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
  shuffleQuestions = questionList.sort(() => Math.random() - 0.5);
  currentQuestion = 0;
  questionContainer.classList.remove("hide");
  nextQuestion();
}

function nextQuestion() {
  clearState();
  displayQuestion(shuffleQuestions[currentQuestion]);
}

function displayQuestion(question) {
  questionEl.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add(".answerButton");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", userAnswer);
    answerButtonEl.appendChild(button);
  });
}

function clearState() {
  clearStatus(document.body);
  nextButton.classList.add("hide");
  while (answerButtonEl.firstChild) {
    answerButtonEl.removeChild(answerButtonEl.firstChild);
  }
}

function userAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatus(document.body, correct);
  Array.from(answerButtonEl.children).forEach((button) => {
    setStatus(button, button.dataset.correct);
  });
  if (shuffleQuestions.length > currentQuestion + 1) {
    nextButton.classList.remove("hide");
  } else {
    startButtonEl.innerText = "Restart";
    startButtonEl.classList.remove("hide");
  }
}
function setStatus(element, correct) {
  clearStatus(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}
function clearStatus(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}
const questionList = [
  {
    question: "Which one of the following is a non-magnetic metal",
    answers: [
      { text: "Nickel", correct: false },
      { text: "Copper", correct: true },
      { text: "Iron", correct: false },
      { text: "Cobalt", correct: false },
    ],
  },
  {
    question: "Which one of the following is a non-magnetic metal",
    answers: [
      { text: "Nickel", correct: false },
      { text: "Copper", correct: true },
      { text: "Iron", correct: false },
      { text: "Cobalt", correct: false },
    ],
  },
  {
    question: "Which one of the following is a non-magnetic metal",
    answers: [
      { text: "Nickel", correct: false },
      { text: "Copper", correct: true },
      { text: "Iron", correct: false },
      { text: "Cobalt", correct: false },
    ],
  },
  {
    question: "Which one of the following is a non-magnetic metal",
    answers: [
      { text: "Nickel", correct: false },
      { text: "Copper", correct: true },
      { text: "Iron", correct: false },
      { text: "Cobalt", correct: false },
    ],
  },
  {
    question: "Which one of the following is a non-magnetic metal",
    answers: [
      { text: "Nickel", correct: false },
      { text: "Copper", correct: true },
      { text: "Iron", correct: false },
      { text: "Cobalt", correct: false },
    ],
  },
  {
    question: "Which one of the following is a non-magnetic metal",
    answers: [
      { text: "Nickel", correct: false },
      { text: "Copper", correct: true },
      { text: "Iron", correct: false },
      { text: "Cobalt", correct: false },
    ],
  },
  {
    question: "Which one of the following is a non-magnetic metal",
    answers: [
      { text: "Nickel", correct: false },
      { text: "Copper", correct: true },
      { text: "Iron", correct: false },
      { text: "Cobalt", correct: false },
    ],
  },
  {
    question: "Which one of the following is a non-magnetic metal",
    answers: [
      { text: "Nickel", correct: false },
      { text: "Copper", correct: true },
      { text: "Iron", correct: false },
      { text: "Cobalt", correct: false },
    ],
  },
];
