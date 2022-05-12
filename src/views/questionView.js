'use strict';

import { ANSWERS_LIST_ID } from '../constants.js';
import { NEXT_QUESTION_BUTTON_ID } from '../constants.js';
import { SCORE_DIV_ID } from "../constants.js";
import { COUNTING } from "../constants.js";

/**
 * Create a full question element
 * @returns {Element}
 */
export const createQuestionElement = (question, score, timeCounter) => {
  const element = document.createElement('div');

  // I use String.raw just to get fancy colors for the HTML in VS Code.
  element.innerHTML = String.raw`

    <div>
      <p>Score</p>
      <h1 id="${SCORE_DIV_ID}" class="score">${score}</h1>
    </div>

    <div>
      <p id="${COUNTING}">${timeCounter}</p>
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
