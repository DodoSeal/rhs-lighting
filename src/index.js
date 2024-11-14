import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Konami Code

const correct = "ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightBA";
let typed = "";

document.addEventListener('keyup', (e) => {
  switch (e.key) {
    case "ArrowUp":
      typed += "ArrowUp"
      if (!correct.startsWith(typed)) {
        typed = "";
      };
      break;
    case "ArrowDown":
      typed += "ArrowDown"
      if (!correct.startsWith(typed)) {
        typed = "";
      };
      break;
    case "ArrowLeft":
      typed += "ArrowLeft"
      if (!correct.startsWith(typed)) {
        typed = "";
      };
      break;
    case "ArrowRight":
      typed += "ArrowRight"
      if (!correct.startsWith(typed)) {
        typed = "";
      };
      break;
    case "b":
      typed += "B"
      if (!correct.startsWith(typed)) {
        typed = "";
      };
      break;
    case "a":
      typed += "A"
      if (typed == correct) {
        alert("Yay!") // Do Stuff
        typed = "";
      } else {
        typed = "";
      };
      break;
  };
});