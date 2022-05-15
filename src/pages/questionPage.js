'use strict';

import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  SHOW_ANSWER_BUTTON_ID,
  USER_INTERFACE_ID,
  SCORE_DIV_ID,
  CORRECT_ANSWER_POINT,
  COUNTING_TIME_ID
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';
import { showResultPage } from "./resultPage.js";
export const initQuestionPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const currentQuestion = getCurrentIndex();

  const questionElement = createQuestionElement(currentQuestion.text, quizData.score, quizData.timeCounter);


  userInterface.appendChild(questionElement);

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText);
    answerElement.setAttribute('data-key', key);
    answerElement.addEventListener('click', chooseAnswer);
    answersListElement.appendChild(answerElement);
  }


  document
    .getElementById(SHOW_ANSWER_BUTTON_ID)
    .addEventListener('click', showAnswer);

  document
    .getElementById(SHOW_ANSWER_BUTTON_ID)
    .addEventListener('click', removeEventAll);

  document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', nextQuestion);

  if (quizData.currentQuestionIndex === quizData.questions.length - 1){
    document.getElementById(NEXT_QUESTION_BUTTON_ID).innerHTML= "Show Result";
    document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener("click", goToResult);
  } 

  currentQuestion.links.map(links => {
    const hints = document.createElement("a");
    hints.innerHTML = links.text;
    hints.href = links.href;
    document.getElementById("hints-section").appendChild(hints);
  })
};

function chooseAnswer() {
  const currentQuestion = getCurrentIndex();
  currentQuestion.selected = this.dataset.key

  const classApply =
    currentQuestion.selected === currentQuestion.correct
      ? 'correct'
      : 'wrong';

  if (classApply === "correct") {
    incrementScore(CORRECT_ANSWER_POINT);
  }

  if (currentQuestion.selected == currentQuestion.correct) {
    this.classList.add(classApply);
    document.getElementById(SHOW_ANSWER_BUTTON_ID).removeEventListener('click', showAnswer);

  } else {
    this.classList.add(classApply);
    getCorrect();
  }
  removeEventAll()

}

// increment
const incrementScore = (point) => {
  quizData.score += point;
  document.getElementById(SCORE_DIV_ID).innerText = "SCORE: " + quizData.score;


};

export const countTime = () => {
  // Add a Countdown for the quiz
  const time = quizData.totalTime;
  let maxQuizTimeSecs = 300;
  let quizTimeInMinutes = time * 60 * 60;
  let quizTime = quizTimeInMinutes / 60;

  quizData.timer = setInterval(() => {
    if (quizTime >= maxQuizTimeSecs) { 
      clearInterval(quizData.timer);
      quizData.timeCounter = `Time is up, Game Over!`;
      document.getElementById(COUNTING_TIME_ID).innerText = quizData.timeCounter;
      showResultPage();
    } else {
      quizTime++;
      let sec = Math.floor(quizTime % 60);
      sec = sec < 10 ? "0" + sec : sec;
      let min = Math.floor(quizTime / 60) % 60;
      min = min < 10 ? "0" + min : min;
      quizData.timeCounter = `Your time is: ${min}:${sec}`;
      document.getElementById(COUNTING_TIME_ID).innerText = quizData.timeCounter;
    }
  }, 1000);
};

// EventLister Function that executed to the next Question

const nextQuestion = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;
  initQuestionPage();
};


const showAnswer = () => {
  const correctAnswer = getCorrect()
  correctAnswer.classList.add('show-correct-answer');
}

const getCurrentIndex = () => {
  return quizData.questions[quizData.currentQuestionIndex];
}

const getCorrect = () => {
  return document.querySelector(
    `li[data-key="${getCurrentIndex().correct}"]`);
}

const removeEventAll = () => {
  const answerElements = document.querySelectorAll("li");
  answerElements.forEach((element) => {
    element.removeEventListener("click", chooseAnswer);
  });
}

// go to result page function
const goToResult = () => {
  clearInterval(quizData.timer);
  showResultPage();
};

