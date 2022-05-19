'use strict';

/* Program Data

  in this file you can declare variables to store important data for your program
  the data can only be primitives, objects or arrays
  do not store dom elements in these variables!!!!

  these variables will be imported by your handlers when necessary
    not by your logic
    not by your listeners
*/

export const quizData = {
  currentQuestionIndex: 0,
  score: 0,
  timeCounter: "",
  totalTime: 0,
  message: "",
  // the questions in the quiz
  questions: [
    {
      text: 'What are the different ways to declare a JS variable?',
      answers: {
        a: 'constant, let, variable',
        b: 'var, const, let, function',
        c: 'var, let, const',
      },
      correct: 'c',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href: 'https://javascript.info/variables',
        },
        {
          text: 'www.ui.div',
          href: 'https://ui.dev/var-let-const/',
        },
      ],
    },
    {
      text: 'What does `typeof` do?',
      answers: {
        a: 'changes the type of a primitive value',
        b: 'returns a string describing the type of a value',
        c: 'determines if a value is primitive',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href: 'https://javascript.info/types#type-typeof',
        },
        {
          text: 'MDN',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof',
        },
      ],
    },
    {
      text: 'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
      answers: {
        a: 'if (i <> 5)',
        b: 'if i <> 5',
        c: 'if (i != 5)',
      },
      correct: 'c',
      selected: null,
      links: [
        {
          text: 'w3chools.com',
          href: 'https://www.w3schools.com/js/js_if_else.asp',
        },
        {
          text: 'MDN',
          href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else',
        },
      ],
    },{
      text: 'What will the following code return: Boolean(10 > 9)',
      answers: {
        a: 'true',
        b: 'false',
        c: 'NaN',
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'javascripttutorial.net',
          href: 'https://www.javascripttutorial.net/javascript-boolean/',
        },
        {
          text: 'GeeksforGeeks',
          href: 'https://www.geeksforgeeks.org/javascript-boolean/',
        },
      ],
    },
    {
      text: 'How does a WHILE loop start?',
      answers: {
        a: 'while i = 1 to 10',
        b: 'while (i <= 10) ',
        c: 'while (i <= 10; i++)',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'freeCodeCamp',
          href: 'https://www.freecodecamp.org/news/javascript-loops-explained-for-loop-for/#:~:text=The%20while%20loop%20starts%20by,executed%20and%20the%20loop%20ends.',
        },
        {
          text: 'w3chools.com',
          href: 'https://www.w3schools.com/js/js_loop_while.asp',
        },
      ],
    },
    {
      text: 'How does a FOR loop start?',
      answers: {
        a: 'for (i <= 5; i++)',
        b: 'for (i = 0; i <= 5; i++)',
        c: 'for (i = 0; i <= 5)',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'w3chools.com',
          href: 'https://www.w3schools.com/js/js_loop_for.asp',
        },
        {
          text: 'javascript.info',
          href: 'https://javascript.info/while-for',
        },
      ],
    },
    {
      text: 'What is the correct way to write a JavaScript array?',
      answers: {
        a: 'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")',
        b: 'var colors = (1:"red", 2:"green", 3:"blue")',
        c: 'var colors = ["red", "green", "blue"] ',
      },
      correct: 'c',
      selected: null,
      links: [
        {
          text: 'MDN',
          href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array',
        },
        {
          text: 'javascript.info',
          href: 'https://javascript.info/array',
        },
      ],
    },
    {
      text: 'How do you round the number 7.25, to the nearest integer?',
      answers: {
        a: 'Math.rnd(7.25)',
        b: 'Math.round(7.25)',
        c: 'round(7.25)',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'MDN',
          href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round',
        },
        {
          text: 'GeeksforGeeks',
          href: 'https://www.geeksforgeeks.org/javascript-math-round-function-2/',
        },
      ],
    },
    {
      text: 'How do you find the number with the highest value of x and y?',
      answers: {
        a: 'top(x, y)',
        b: 'Math.ceil(x, y)',
        c: 'Math.max(x, y) ',
      },
      correct: 'c',
      selected: null,
      links: [
        {
          text: 'w3chools.com',
          href: 'https://www.w3schools.com/jsref/jsref_max.asp',
        },
        {
          text: 'MDN',
          href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max',
        },
      ],
    },
    {
      text: 'Which event occurs when the user clicks on an HTML element?',
      answers: {
        a: 'onmouseover',
        b: 'onchange',
        c: 'onclick',
      },
      correct: 'c',
      selected: null,
      links: [
        {
          text: 'MDN',
          href: 'https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event',
        },
        {
          text: 'GeeksforGeeks',
          href: 'https://www.geeksforgeeks.org/html-dom-onclick-event/',
        },
      ],
    },
  
  ],
};