'use strict';

import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  SCORE_DIV_ID,
} from '../constants.js';
import { quizData } from '../data.js';

/**
 * Create a full question element
 * @returns {Element}
 */
export const createQuestionElement = (question, score) => {
  const element = document.createElement('div');

  // I use String.raw just to get fancy colors for the HTML in VS Code.
  element.innerHTML = String.raw`
  <p id="progressText">
      Question : ${ quizData.currentQuestionIndex + 1} / ${quizData.questions.length}
  </p>
  <div id="progressBar">
      <div id="progressBarFull"></div>
  </div>

  <h1>${question}</h1>

    <div>
      <p>Score</p>
      <h1 id="${SCORE_DIV_ID}" class="score">${score}</h1>
    </div>
    <h1>${question}</h1>

    <ul id="${ANSWERS_LIST_ID}">
    </ul>

    <button id="${NEXT_QUESTION_BUTTON_ID}">
      Next question
    </button>
  `;

  return element;
};