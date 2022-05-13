'use strict';

import { ANSWERS_LIST_ID, NEXT_QUESTION_BUTTON_ID, SCORE_DIV_ID , SHOW_RESULT_ID } from '../constants.js';


/**
 * Create a full question element
 * @returns {Element}
 */
export const createQuestionElement = (question, score) => {
  const element = document.createElement('div');

  // I use String.raw just to get fancy colors for the HTML in VS Code.
  element.innerHTML = String.raw`

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


    <button id="${SHOW_RESULT_ID}" class="result-btn">Result</button>

  `;

  return element;
};
