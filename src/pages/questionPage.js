'use strict';

import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID, SCORE_DIV_ID, CORRECT_ANSWER_POINT, SHOW_RESULT_ID
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';
import { resultPageFun } from "./resultPage.js";


export const initQuestionPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const currentQuestion = getCurrentIndex();

  const questionElement = createQuestionElement(currentQuestion.text, quizData.score);

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
}

// increment
const incrementScore = (point) => {
  quizData.score += point;
  // for local storage
  if (quizData.score) {
    const allScore = quizData.score;
    localStorage.setItem("score", allScore); // setItem(key, value)
  }
  document.getElementById(SCORE_DIV_ID).innerText = quizData.score;
};
