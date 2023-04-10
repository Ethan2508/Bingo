
const form = document.querySelector('#formulaire');
const input = document.querySelector('#prix');
const error = document.querySelector('small');
const instructions = document.querySelector('#instruction');
let trials = 0;
let choosedNumber;

error.style.display = 'none';


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const randomNumber = getRandomInt(100000);

function check(number) {
  let instruction = document.createElement('div');
  instruction.className = 'instruction';
    
  if(number < randomNumber) {
   instruction.classList.add('plus');
   instruction.innerHTML = `(${choosedNumber}) c'est plus` ;

  } else if(number > randomNumber) {
   instruction.classList.add('moins');
   instruction.innerHTML = `(${choosedNumber}) c'est moins`;
   
  } else {
   instruction.classList.add('Bingo');
   instruction.innerHTML = `(${choosedNumber}) BINGO`;
    input.disabled = true;
  }
   instructions.prepend(instruction);
}

input.addEventListener('keyup', (e) => {
  if(isNaN(input.value)) {
    error.style.display = 'inline-block';
    input.style.borderColor = 'red';
    
  } else {
    error.style.display = 'none';
    input.style.borderColor = 'black';
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if(isNaN(input.value) || !input.value) {
    error.style.display = 'inline-block';
    input.style.borderColor = 'red';
  } else {
    trials++;
    choosedNumber = input.value;
    check(Number(choosedNumber));
    input.value = '';
  }
});