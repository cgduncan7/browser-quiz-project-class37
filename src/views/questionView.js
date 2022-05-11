'use strict';

import { ANSWERS_LIST_ID } from '../constants.js';
import { NEXT_QUESTION_BUTTON_ID} from '../constants.js';
import { SCORE_ID } from "../constants.js";
/**
 * Create a full question element
 * @returns {Element}
 */
export const createQuestionElement = (question, score, questions_number, questionProgress) => {
  const element = document.createElement('div');

  // I use String.raw just to get fancy colors for the HTML in VS Code.
  element.innerHTML = String.raw`
  <p id="progressText">
      Question : ${ questionProgress + 1} / ${questions_number}
    </p>
    <div id="progressBar">
              <div id="progressBarFull"></div>
    </div>

    <div class="score-div">
    <p>Score :</p>
    <h1 id="${SCORE_ID}" class="score">${score}</h1>
  </div>

    <h1 class="Question-Text"><span>${question}</span></h1>

    <ul id="${ANSWERS_LIST_ID}">
    </ul>

    <button id="${NEXT_QUESTION_BUTTON_ID}">
      Next question
    </button>
  `;

  return element;
};