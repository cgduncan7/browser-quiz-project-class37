"use strict";

import { SCORE_DIV_ID, START_QUIZ_BUTTON_ID } from "../constants.js";


/**
 * Create a score and time of answer question element
 * @returns {Element}
 */

export const createResultAndScore = (score) => {
    const element = document.createElement("div");
    element.innerHTML = String.raw`
    <div>   
        <p>Score</p>
        <h1 class="score">Hello World</h1>
        <p id="${SCORE_DIV_ID}">Your score is: ${score}</p>
    </div>
    <div>
        <p> 00:00</p>
    </div>
    <button id="${START_QUIZ_BUTTON_ID}">Go Home</button>
      `;
    return element;
};
