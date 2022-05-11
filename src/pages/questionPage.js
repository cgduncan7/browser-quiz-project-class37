'use strict';

import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';

export let questionProgress = 0;

export const initQuestionPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  const questionElement = createQuestionElement(currentQuestion.text,  quizData.questions_number, quizData.questionProgress);

  userInterface.appendChild(questionElement);

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText);
    answerElement.setAttribute('data-key', key);
    answerElement.addEventListener('click', chooseAnswer);
    answersListElement.appendChild(answerElement);
  }
  const progressText = document.querySelector('#progressText');
  const progressBarFull = document.querySelector('#progressBarFull');
  quizData.questionProgress++
  progressText.innerText = `Question ${quizData.questionProgress} of ${ quizData.questions_number}`
  progressBarFull.style.width = `${(quizData.questionProgress/ quizData.questions_number)*100}%`

  document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', nextQuestion);
};

const nextQuestion = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;

  initQuestionPage();
};

function chooseAnswer() {
  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
  currentQuestion.selected =this.dataset.key 
 
  const classApply =
    currentQuestion.selected === currentQuestion.correct
      ? 'correct'
      : 'wrong';

  if (currentQuestion.selected == currentQuestion.correct) {
    this.classList.add(classApply);
  
  } else {
    this.classList.add(classApply);
    const correctAnswer = document.querySelector(
      `li[data-key="${currentQuestion.correct}"]`
    );
    correctAnswer.classList.add('show-correct-answer');
    
  }
}