'use strict'

const inputId = document.querySelector('#name-input');
const outputId = document.querySelector('#name-output');


inputId.addEventListener('input', outputHandler);

function outputHandler(event) {
  const output = event.target.value;
  output.trim()
    ? outputId.textContent = output.trim()
    : outputId.textContent = 'Anonymous';
}