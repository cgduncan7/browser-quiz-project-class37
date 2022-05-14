"use strict";

import { COUNTING_TIME_ID, SCORE_DIV_ID, START_QUIZ_BUTTON_ID } from "../constants.js";


/**
 * Create a score and time of answer question element
 * @returns {Element}
 */

export const createResultAndScore = (score,counter) => {
    const element = document.createElement("div");
    element.innerHTML = String.raw`
    <div>   
        <p class="result-info" id="${SCORE_DIV_ID}">Your Score is: ${score}</p>
    </div>
    <div>
    <p class ="result-info" id="${COUNTING_TIME_ID}"> ${counter}</p>
    </div>
    <button id="${START_QUIZ_BUTTON_ID}">Go Home</button>
      `;
    return element;
};
