'use strict'

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputNumber = document.querySelector('input');
const createBtn = document.querySelector('#controls button[data-create]');
const destroyBtn = document.querySelector('#controls button[data-destroy]');
const boxes = document.querySelector('#boxes');

createBtn.addEventListener('click', createHandler);
destroyBtn.addEventListener('click', destroyBoxes);

function createHandler(){
  destroyBoxes();
  const number = inputNumber.value;
  if (number >= 1 && number <= 100) {
    createBoxes(number);
  }
}

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    let div = document.createElement('div');
    div.style.backgroundColor = getRandomHexColor();
    div.style.height = `${30+10*i}px`;
    div.style.width = `${30 + 10 * i}px`;
    div.className = 'new-div';
    boxes.append(div);
  } 
}

function destroyBoxes() {
  const newDivs = document.querySelectorAll('.new-div');
  newDivs.forEach(div => div.remove());
}
 
