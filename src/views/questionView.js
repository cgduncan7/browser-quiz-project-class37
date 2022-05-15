'use strict';

import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID, SHOW_ANSWER_BUTTON_ID, SCORE_DIV_ID, COUNTING_TIME_ID 
} from '../constants.js';
import { quizData } from '../data.js';


/**
 * Create a full question element
 * @returns {Element}
 */
export const createQuestionElement = (question, score, timeCounter) => {
  const element = document.createElement('div');
  const incrementQuestionBar = quizData.currentQuestionIndex + 1
  const progressBarFullStyle = `${(incrementQuestionBar / quizData.questions.length)*100}%`

  element.innerHTML = String.raw`

<section id= "nav-bar">
    <section id="progress-section">
        <div><p id="progressText">Question : ${quizData.currentQuestionIndex + 1} / ${quizData.questions.length}</p></div>
    <div id="progressBar">
      <div id="progressBarFull" style= "width:${progressBarFullStyle}"><div>
    </div>
    </section>
    <div class="score-div">
        <p id="${SCORE_DIV_ID}" class="score">SCORE: ${score}</p>
    </div>
    <div>
      <p id="${COUNTING_TIME_ID}">${timeCounter}</p>
    </div>
</section>
 
<section id="main-part">
    <h1>${question}</h1>
    <ul id="${ANSWERS_LIST_ID}"></ul>
</section>

<button id="${SHOW_ANSWER_BUTTON_ID}">
  Show Answer
</button>

<button id="${NEXT_QUESTION_BUTTON_ID}">
  Next Question
</button>

<section id="hints-section">
  <h4>Need help? Check these hints</h4>
</section>
  `;

  return element;
};