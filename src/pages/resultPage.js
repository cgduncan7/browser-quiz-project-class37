"use strict";

import { USER_INTERFACE_ID, START_QUIZ_BUTTON_ID } from "../constants.js";
import { createResultAndScore } from "../views/resultView.js";
import { quizData } from "../data.js";
import { initWelcomePage } from "./welcomePage.js";

export const showResultPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = "";

  const resultElement = createResultAndScore(
    quizData.score,
    quizData.timeCounter
  );
  userInterface.appendChild(resultElement);

  document
  .getElementById(START_QUIZ_BUTTON_ID)
  .addEventListener("click", backToHomePage);

};

const backToHomePage = () => {
    localStorage.clear();
    location.reload();
    initWelcomePage();
  };
