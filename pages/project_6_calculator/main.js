

const input1Element = document.getElementById('input1') 
const input2Element = document.getElementById('input2')
const plusBtn = document.getElementById('plus') 
const minusBtn = document.getElementById('minus')
const multiplyBtn = document.getElementById('multiply')
const divisionBtn = document.getElementById('division')
const submitBtn = document.getElementById('submit')
const resultElement = document.getElementById('result')
const unSubmitElement = document.getElementById('un-submit')
let actionMath = ''

plusBtn.onclick = function () {
  actionMath = '+'
}
minusBtn.onclick = function () {
  actionMath = '-'
}
multiplyBtn.onclick = function () {
  actionMath = '*'
}
divisionBtn.onclick = function () {
  actionMath = '/'
}

function printResult(getResult){
  if (getResult < 0){
    resultElement.style.color = 'red'
  } else if (getResult == 'на 0 делить нельзя'){
    resultElement.style.color = 'red'  
  } else {
    resultElement.style.color = 'green'
  }
  resultElement.textContent = getResult;
}

function getAction(input1, input2, actionMath) {
  const num1 = parseFloat(input1.value)
  const num2 = parseFloat(input2.value)
  if (actionMath == '+'){
    return (num1 + num2).toFixed(2)
  } else if (actionMath == '-'){
    return (num1 - num2).toFixed(2)  
  } else if (actionMath == '*'){
    return (num1 * num2).toFixed(2)  
  } else if (actionMath == '/'){
    return (num2 == 0) ? 'на 0 делить нельзя' : (num1 / num2).toFixed(2);  
  }  
}
submitBtn.onclick = function () {
  const exitResult = getAction(input1, input2, actionMath)
  printResult(exitResult)
}

function clearAllFormInputs() {
  resultElement.textContent = '0.00'
  resultElement.style.color = 'black'
  let inputArray = document.querySelectorAll('input');
    for (let input of inputArray)
    input.value = '';  
}
unSubmitElement.addEventListener('click', clearAllFormInputs);

