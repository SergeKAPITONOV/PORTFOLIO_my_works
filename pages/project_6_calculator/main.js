

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




// console.log(resultElement.textContent);
// plusBtn.addEventListener('click', ()=>{
//   plusBtn.
// })
const arrayBtn = document.querySelectorAll('.btn-outline-info')
console.log(arrayBtn);

function actionBtn(){
  arrayBtn.forEach(btnAct => {
    btnAct.style = 'bg-dark'
  })
}


plusBtn.onclick = function () {
  actionMath = '+'
  actionBtn()
  this.style.borderColor = 'red'
}
minusBtn.onclick = function () {
  actionMath = '-'
  actionBtn()
  this.style.borderColor = 'red'
}
multiplyBtn.onclick = function () {
  actionMath = '*'
  actionBtn()
  this.style.borderColor = 'red'
}
divisionBtn.onclick = function () {
  actionMath = '/'
  actionBtn()
  this.style.borderColor = 'red'
}

// button.addEventListener('click', actionBtn)

function printResult(result){
  if (result < 0){
    resultElement.style.color = 'red'
  } else if (result == 'на 0 делить нельзя'){
    resultElement.style.color = 'red'  
  } else {
    resultElement.style.color = 'green'
  }
  resultElement.textContent = result
}

function getAction(input1, input2, actionMath) {
  const num1 = +(input1.value)
  const num2 = +(input2.value)
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
  const result = getAction(input1, input2, actionMath)
  printResult(result)
}

function clearAllFormInputs() {
  resultElement.textContent = '0.00'
  resultElement.style.color = 'black'
  let inputArray = document.querySelectorAll('input');
    for (let input of inputArray)
    input.value = '';  
}
unSubmitElement.addEventListener('click', clearAllFormInputs);

