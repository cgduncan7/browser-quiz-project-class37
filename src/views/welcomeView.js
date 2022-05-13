

'use strict';

import { START_QUIZ_BUTTON_ID } from '../constants.js';

/**
 * Create the welcome screen
 * @returns {Element}
 */
export const createWelcomeElement = () => {
  const element = document.createElement('div');
  element.innerHTML = String.raw`
    
<svg width="100%" height="100%"> 
<text x="50%" y="90%"  text-anchor="middle"  >
Welcome
</text>
</svg>

    <button id="${START_QUIZ_BUTTON_ID}">Start Quiz</button>
   `;
  return element;
};
