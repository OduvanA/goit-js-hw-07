'use strict'

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputElement = document.querySelector('input');
const createBtn = document.querySelector('#controls button[data-create]');
const destroyBtn = document.querySelector('#controls button[data-destroy]');
const boxes = document.querySelector('#boxes');

createBtn.addEventListener('click', createHandler);
destroyBtn.addEventListener('click', destroyBoxes);

function createHandler() {
  destroyBoxes();
  const number = inputElement.value;
  if (number >= 1 && number <= 100) {
    createBoxes(number);
    inputElement.value = '';
  }
  
}

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    let div = document.createElement('div');
    div.style.backgroundColor = getRandomHexColor();
    div.style.height = `${30+10*i}px`;
    div.style.width = `${30 + 10 * i}px`;
    boxes.append(div);
  } 
}

function destroyBoxes() {
  boxes.innerHTML = '';
}
 
