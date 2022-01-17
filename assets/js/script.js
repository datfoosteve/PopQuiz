
// Creating a variable called timerEl and setting it equal to the element with the id of countDown.
let timerEl = document.getElementById("countDown");

let shuffleQuestions, currentQuestion;
var gameTimer = 15;
var timeInterval;

/* Creating a JavaScript object that stores the user's score, number of correct answers, and number
of incorrect answers. */
let userScoreObj = {
  score:0,
  numCorr:0,
  numIncor:0
};

const startButtonEl = document.getElementById("btnStart");
const endButtonEl = document.getElementById("btnQuit");
const nextButton = document.getElementById("next");
const answerButtonEl = document.getElementById("answer-buttons");
const questionContainer = document.getElementById("qContainer");
//Create a variable called `questionEl` and set it equal to the element with the id of
//"theQuestion".
const questionEl = document.getElementById("theQuestion");

// Adding the class "hide" to the start and end buttons.
// Add a click event listener to the start button that hides the start button and
//displays the first question.
startButtonEl.classList.remove("hide");
endButtonEl.classList.remove("hide");

startButtonEl.addEventListener("click", startGame);
// nextButton.addEventListener('click', );

/* Adding an event listener to the nextButton element.*/
nextButton.addEventListener("click", () => {
  currentQuestion++;
  nextQuestion();
});

/**
 * Start the game by shuffling the questions and setting the timer.
 * The function is returning the value of the variable gameTimer.
 */
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
      document.getElementById('quizTitle').innerHTML = "Score: " + userScoreObj.score;
      document.getElementById('directions').innerHTML = "Questions Correct: " + userScoreObj.numCorr;
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

/**
 * Clear the state of the page and display the next question.
 * returns None
 */
function nextQuestion() {
  clearState();
  displayQuestion(shuffleQuestions[currentQuestion]);
}

// Update screen with new time and function to display the first question called `displayQuestion`.
function displayQuestion(question) {
  questionEl.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add(".answerButton");
    if (answer.correct) {
      gameTimer= gameTimer + 2.5;
      userScoreObj.score = userScoreObj.score + 5;
      userScoreObj.numCorr++;
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", userAnswer);
    answerButtonEl.appendChild(button);
  });
}


/**
 * Clear the status message and the answer buttons.
 * returns none
 */
function clearState() {
  clearStatus(document.body);
  // If the user has selected the correct answer, hide the next button. 
  nextButton.classList.add("hide");
  while (answerButtonEl.firstChild) {
    answerButtonEl.removeChild(answerButtonEl.firstChild);
  }
}

/**
 * parameter e - The event object.
 * returns None
 */
function userAnswer(e) {
  const selectedButton = e.target;
  // * * If the user has selected the correct answer, set the status of the body element to "correct". 
  const correct = selectedButton.dataset.correct;
  setStatus(document.body, correct);
  Array.from(answerButtonEl.children).forEach((button) => {
    setStatus(button, button.dataset.correct);
  });
  if (shuffleQuestions.length > currentQuestion + 1) {
    nextButton.classList.remove("hide");
  } else {
    // If the user has selected the correct answer, show the restart button.
    startButtonEl.innerText = "Restart";
    startButtonEl.classList.remove("hide");
  }
}

function setStatus(element, correct) {
  // clear the status so that the status can be set again
  clearStatus(element);

  if (correct) {
    // * * If the user has selected the correct answer, set the status of the correct answer button to
  // "correct". 
    element.classList.add("correct");
  } else {
    //  * * If the user has selected the wrong answer, set the status of the wrong answer button to
  // "incorrect". 
    element.classList.add("incorrect");
  }
}
/**
 * Clear the status of the element by removing the correct and incorrect classes.
 * param element - The element that the status is being applied to.
 * returns None
 */
function clearStatus(element) {
  element.classList.remove("correct");
  element.classList.remove("incorrect");
}


/* The code defines a list of questions, and each question has a list of answers. The answers are
marked as correct or incorrect. */
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
    question: "Who was the father of computer?",
    answers: [
      { text: "Charles Babbage", correct: false },
      { text: "Charles Babbage", correct: true },
      { text: "Dennis Ritchie", correct: false },
      { text: "Ken Thompson", correct: false },
    ],
  },
  {
    question: "What is the full form of CPU?",
    answers: [
      { text: "Central Process Unit", correct: false },
      { text: "Central Processing Unit", correct: true },
      { text: "Central Programming Unit", correct: false },
      { text: "Central Progressive Unit", correct: false },
    ],
  },
  {
    question: "What is the full form of CU?",
    answers: [
      { text: "Compound Unit", correct: false },
      { text: "Control Unit", correct: true },
      { text: "Communication Unit", correct: false },
      { text: "Computer Unit", correct: false },
    ],
  },
  {
    question: "What is the full form of ALU?",
    answers: [
      { text: "Arithmetic Local Unit", correct: false },
      { text: "Arithmetic Logic Unit", correct: true },
      { text: "Advance Logical Unit", correct: false },
      { text: "Alucard", correct: false },
    ],
  },
  {
    question: "Which one of the following is a non-magnetic metal",
    answers: [
      { text: "Management Unit", correct: false },
      { text: "Memory Unit", correct: true },
      { text: "Main Unit", correct: false },
      { text: "Masked Unit", correct: false },
    ],
  },
  {
    question: "What is the full form of EEPROM?",
    answers: [
      { text: "Electrically Erasable Read Access Memory", correct: false },
      { text: "Electrically Erasable Read Only Memory", correct: true },
      { text: "Ethical Electrically Read Only Memory", correct: false },
      { text: "None of these", correct: false },
    ],
  },
  {
    question: "What is the full form of SDRAM?",
    answers: [
      { text: "Special Dynamic Read Access Memory", correct: false },
      { text: "Synchronous Dynamic Random Access Memory", correct: true },
      { text: "Synchronous Dynamic Read Access Memory", correct: false },
      { text: "Special Dynamic Random Access Memory", correct: false },
    ],
  },
];
