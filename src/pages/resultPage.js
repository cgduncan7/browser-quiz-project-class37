"use strict";

import { USER_INTERFACE_ID, START_QUIZ_BUTTON_ID } from "../constants.js";
import { createResultAndScore } from "../views/resultView.js";
import { quizData } from "../data.js";
import { initWelcomePage } from "./welcomePage.js";

export const showResultPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = "";

  
  if (quizData.score <= 40) {
    quizData.message= "You must study hard!";
  }
  else if (quizData.score <= 80) {
    quizData.message ="You are good, keep going!"
  } else {
    quizData.message ="You are expert on JavaScript!"
  }

  const resultElement = createResultAndScore(
    quizData.score,
    quizData.timeCounter,
    quizData.message
  );
  userInterface.appendChild(resultElement);

  document
  .getElementById(START_QUIZ_BUTTON_ID)
  .addEventListener("click", backToHomePage);

};

const backToHomePage = () => {
    location.reload();
    initWelcomePage();
  };
 