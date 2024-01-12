console.log('Задача №1');
// 1) Выведите в консоль с помощью цикла числа от 1 до 42.

for (let i = 1; i <= 42; i++){
    console.log(i);
}


console.log('Задача №2');
// Выведите в консоль с помощью цикла числа от 11 до 33.

let j = 33;
while (j <= 42){
    console.log(j);
    j += 1;
}


console.log('Задача №3');
// Выведите в консоль четные числа в промежутке от 0 до 100 Вывод в консоль:(i - четное число.

for(let i = 0; i <= 100; i++){
    if (i % 2 == 0){
        console.log(i + ' - четное число');
    }
}


console.log('Задача №4');
// С помощью цикла найдите сумму чисел от 1 до 100. Результат выведите пользователю(alert).

let sum =0;
for (let k = 1; k <=100; k++){
    sum = sum + k;
}
alert(sum);


console.log('Задача №5 Вариант-1');
// Используйте условный оператор JavaScript для сортировки трех чисел по убыванию.
// Примеры чисел: 9,-5,0
// Вывод: 9,0,-5

let a = 9;  
let b = 0;    
let c = -5;   

if (a > b && b > c) {
    document.write('Вывод: '+a +',' +b +',' +c);
}
else if (a > c && c > b) {
    document.write('Вывод: '+a +',' +c +',' +b);
}
else if (b > a && a > c){
    document.write('Вывод: '+b +',' +a +',' +c);
}
else if (b > c && c > a){
    document.write('Вывод: '+b +',' +c +',' +a);
}
else if (c > a && a > b){
    document.write('Вывод: ' +c +',' +a +',' +b);
}
else {
    document.write('Вывод: ' +c +',' +b +',' +a);
}


console.log('Задача №5 Вариант-2 (необходимо раскоментировать код)'); // !!! Раскоментировать код ниже

// Принимаем от пользователя три числа, сортируем по убыванию и выводин на экран результат.

// let a2 = parseFloat(prompt('Введите первое число'));
// let b2 = parseFloat(prompt('Введите второе число'));
// let c2 = parseFloat(prompt('Введите третье число'));

// if (a2 !== a2 || b2 !== b2 || c2 !== c2){
//     alert('Введены НЕкорректные значения!')
// }
// else if (a2 > b2 && b2 > c2) {
//     document.write('Вывод: '+a2 +',' +b2 +',' +c2);
// }
// else if (a2 > c2 && c2 > b2) {
//     document.write('Вывод: '+a2 +',' +c2 +',' +b2);
// }
// else if (b2 > a2 && a2 > c2){
//     document.write('Вывод: '+b2 +',' +a2 +',' +c2);
// }
// else if (b2 > c2 && c2 > a2){
//     document.write('Вывод: '+b2 +',' +c2 +',' +a2);
// }
// else if (c2 > a2 && a2 > b2){
//     document.write('Вывод: ' +c2 +',' +a2 +',' +b2);
// }
// else {
//     document.write('Вывод: ' +c2 +',' +b2 +',' +a2);
// }