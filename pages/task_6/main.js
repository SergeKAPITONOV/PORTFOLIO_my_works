// Calculete

// Отмена обновления страницы при нажатии кнопки 
const submit = document.getElementById('submit');
submit.addEventListener('click', function(event){
    event.preventDefault();

    const numA = parseFloat(document.getElementById('numberA').value);
    const numB = +(document.getElementById('numberB').value);
    console.log(numA + typeof numA);
    console.log(numB + typeof numB);

// ниже отступ, чтобы сохранить 
// принцип - как можно меньше использовать глобальные переменные.
    // Возможно использование parseFloat или просто +


    const sumAB = document.getElementById('sumAB');
    const minusAB = document.getElementById('minusAB');
    const multiAB = document.getElementById('multiAB');
    const divisionAB = document.getElementById('divisionAB');

    // console.log(sumAB);
    // console.log(minusAB);
    // console.log(multiAB);
    // console.log(divisionAB);
                                                     // Если убрать функцию то:
    sumAB.value = getSumAB(numA, numB);              //numA + numB; 
    minusAB.value = getMinusAB (numA, numB);         //numA - numB;
    multiAB.value = getMultiAB (numA, numB);         //numA * numB;
    divisionAB.value = getDivisionAB (numA, numB);   //numA / numB;    
}) 

function getSumAB (aNum, bNum) {
    return aNum + bNum;
}

function getMinusAB (aNum, bNum) {
    return aNum - bNum;
}

function getMultiAB (aNum, bNum){
    return aNum * bNum;
}

function getDivisionAB (aNum, bNum){
    return (bNum == 0) ? 'Error' : aNum / bNum;  //Тернальный оператор 
}



// Authorization

const submitAuthorization = document.getElementById('submitAuthorization');


// console.log(submitAuthorization);

let arrLoginsPasswords = [['example@gmail.com', '123456'], ['alex@gmail.com', 'qwerty'], ['proger@gmail.com', '111'], ['superStar@gmail.com', 'super'], ['kukaracha@gmail.com', 'web']];

submitAuthorization.addEventListener('click', function(event){
    event.preventDefault();

    const formLogin = document.getElementById('formLogin').value;
    const formPassword = document.getElementById('formPassword').value;
    

    let checkAuthorization = false;    
    
    for ( let elem of arrLoginsPasswords ) { 
       
        checkAuthorization = ((elem[0] == formLogin) && (elem[1] == formPassword)) ? !checkAuthorization : checkAuthorization;
    }
    
    if (checkAuthorization == true){
        alert ('Вы авторизованлись!');
        
    } else {
        alert('Введен неверный Логин или Пароль');
    }
           
});


