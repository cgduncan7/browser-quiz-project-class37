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


export const initQuestionPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  const questionElement = createQuestionElement(currentQuestion.text, quizData.score,currentQuestion.links);

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

// EventLister Function that executed to the next Question
const nextQuestion = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;

  initQuestionPage();
};