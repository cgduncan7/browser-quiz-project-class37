'use strict';

import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
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

  // I use String.raw just to get fancy colors for the HTML in VS Code.
  element.innerHTML = String.raw`


  <section id= "nav-bar">

  <section id="progress-section">
 <div><p id="progressText">Question : ${quizData.currentQuestionIndex + 1} / ${quizData.questions.length}</p></div>
  <div id="progressBar"><div id="progressBarFull"></div></div>
   </section>

  <div class="score-div">
     <p id="${SCORE_DIV_ID}" class="score">Score : ${score}</p>
    </div>


    <div>
      <p id="${COUNTING}">${timeCounter}</p>
    </div>

 </section>
 
 <section id="main-part">

    <h1>${question}</h1>

    <ul id="${ANSWERS_LIST_ID}">
    </ul>

</section>


    <button id="${SHOW_ANSWER_BUTTON_ID}">
    Show Answer
  </button>

    <button id="${NEXT_QUESTION_BUTTON_ID}">
      Next question
    </button>

<section id="hints-section">
    <h4>Need help? check these hints </h4>
     </section>
  `;

  return element;
};