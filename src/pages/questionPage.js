'use strict';

import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
  SCORE_DIV_ID,
  CORRECT_ANSWER_POINT,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';
import { COUNTING } from "../constants.js";


export const initQuestionPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  const questionElement = createQuestionElement(currentQuestion.text, quizData.score, quizData.timeCounter);

  userInterface.appendChild(questionElement);

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText);
    answerElement.setAttribute('data-key', key);
    answerElement.addEventListener('click', chooseAnswer);
    answersListElement.appendChild(answerElement);
  }
};

function chooseAnswer() {
  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
  currentQuestion.selected =this.dataset.key 
 
  const classApply =
    currentQuestion.selected === currentQuestion.correct
      ? 'correct'
      : 'wrong';

  if (classApply === "correct") {
    incrementScore(CORRECT_ANSWER_POINT);
  }

  if (currentQuestion.selected == currentQuestion.correct) {
    this.classList.add(classApply);
  
  } else {
    this.classList.add(classApply);
    const correctAnswer = document.querySelector(
      `li[data-key="${currentQuestion.correct}"]`
    );
    correctAnswer.classList.add('show-correct-answer');
  }
  
  const answerElements = document.querySelectorAll("li");
  answerElements.forEach((element) => {
    element.removeEventListener("click", chooseAnswer);
  });

  // EventLister for the next button
  document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', nextQuestion);
}

// increment
const incrementScore = (point) => {
  quizData.score += point;
  document.getElementById(SCORE_DIV_ID).innerText = quizData.score;
};

// countDown Function
export const countDownFun = () => {
  // Add a Countdown for the quiz
  let time = 2;
  let quizTimeInMin = time * 60 * 60;
  let quizTime = quizTimeInMin / 60;

  let quizTimerInterVal = setInterval(() => {
    if (quizTime <= 0) {
      clearInterval(quizTimerInterVal);
    } else {
      quizTime--;
      let sec = Math.floor(quizTime % 60);
      sec = sec < 10 ? "0" + sec : sec;
      let min = Math.floor(quizTime / 60) % 60;
      min  = min < 10 ?  "0" + min : min;
      quizData.timeCounter = `TIME: ${min}:${sec}`;
      document.getElementById(COUNTING).innerText = quizData.timeCounter;
    }
  }, 1000);
};

// EventLister Function that executed to the next Question
const nextQuestion = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;

  initQuestionPage();
};