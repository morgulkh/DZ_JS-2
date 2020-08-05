"use strict";

//1
let x = prompt('введите число');
if (x > 0) alert(`вы ввели положительное число ${x}`);
else if (x == 0) alert(`вы ввели ноль ${x}`);
else if (x < 0) alert(`вы ввели отрицательное число ${x}`);

//2
let a = 5, b = 10, c = 30;
let minVarName;
let min;
if (a<b){
    min = a;
    minVarName = 'a';
}else if (b<a){
    min = b;
    minVarName = 'b';
}
if (c<min){
    min = c;
    minVarName = 'c';
}
alert(`минимальное число = ${min}, переменная ${minVarName}`);

//3
let money1 = prompt('how much do you have?');
let money2 = prompt('how much does your friend have?');
let sum = +money1 + +money2;
if (sum > 5000) alert(`You can fly to Majorka. You have ${sum}$`);
else if (sum < 5000) alert(`You can only go drink beer. You have ${sum}$`);

//4
let age = prompt('введите ваш возраст');
if (age >= 20 && age <= 27) alert('ВАМ ПОВЕСТКА');
else if (age < 20 || age > 27) alert('все ок, можно расслабиться');

//5
let num = prompt('какая маршрутка подъехала?');
if (num == 7 || num == 225 || num == 255) alert('можно ехть домой');
else if (num != 7 && num != 225 && num != 255) alert('придется ждать');

//6
let day = prompt('какой сегодня день?');
if (day != 'суббота' && day != 'воскресенье') alert('Эээ, Ержан, салам алейкум! Вставай, брат, на работу пора');

//7
let numbr1 = prompt('введите число от -20 до 20');
let numbr2 = prompt('введите число от -20 до 20');
if (numbr1 <= 1 || numbr2 >= 3 || numbr2 < 0) alert(`${+numbr1 + +numbr2}`);
else alert('неверно');

//8
let numbr3 = prompt('введите число от -20 до 20');
let numbr4 = prompt('введите число от -20 до 20');
if ((numbr3 > 2 && numbr3 < 11) && (numbr4 >=6 && numbr4 < 14)) alert(`${+numbr3 * 2}`);
else alert(`${+numbr3 + 5}`);

//9
let name = prompt('введите имя пользователя');
if (name == "" || name == null) alert('пожалуйста введите имя');
else alert(`Приветствую, ${name}`);

//10
let greeting;
let lang = prompt('введите "ru", "en" или "de"');
if (lang == 'ru') greeting = 'добрый день';
else if (lang == 'en') greeting = 'good afternoon';
else if (lang == 'de') greeting = 'guten tag';
if (lang != 'ru' && lang != 'en' && lang != 'de') alert('неверно');
else alert(`${greeting}`);
lang = prompt('введите "ru", "en" или "de"');
switch (lang) {
    case 'ru':
        alert('добрый день');
        break;
    case 'en':
        alert('good afternoon');
        break;
    case 'de':
        alert('guten tag');
        break;
    default: alert('неверно');
}

//11
let month = (new Date()).getMonth();
switch (month) {
    case 11:
    case 0:
    case 1:
        alert('current season is winter');
        break;
    case 2:
    case 3:
    case 4:
        alert('current season is spring');
        break;
    case 5:
    case 6:
    case 7:
        alert('current season is summer');
        break;
    case 8:
    case 9:
    case 10:
        alert('current season is autumn');
        break;
}

let seasons =
{
    winter : [11, 0, 1],
    spring : [2, 3, 4],
    summer : [5, 6, 7],
    autumn : [8, 9, 10]
}
month = (new Date()).getMonth();

for (let season in seasons) {
    if (seasons[season].includes(month)) {
        alert(`current season is ${season}`);
        break;
    }
}

//12
let lang2 = prompt('введите язык "ru", "en"');
let result = (new Date()).getDay();
if (lang2 == 'en') switch (result) {
    case 0 :
        alert('today is sunday');
        break;
    case 1 :
        alert('today is monday');
        break;
    case 2 :
        alert('today is tuesday');
        break;
    case 3 :
        alert('today is wednesday');
        break;
    case 4 :
        alert('today is thursday');
        break;
    case 5 :
        alert('today is friday');
        break;
    case 6 :
        alert('today is saturday');
        break;
}
else if (lang2 == 'ru') switch (result) {
    case 0 :
        alert('сегодня воскресенье');
        break;
    case 1 :
        alert('сегодня понедельник');
        break;
    case 2 :
        alert('сегодня вторник');
        break;
    case 3 :
        alert('сегодня среда');
        break;
    case 4 :
        alert('сегодня четверг');
        break;
    case 5 :
        alert('сегодня пятница');
        break;
    case 6 :
        alert('сегодня суббота');
        break;
}

//1.1
let str = '.';
for (let i=0; i < 5; i++) {
    str += '#.';
}
console.log('Task 1: ' + str);

//1.2
let remainder = 0;
let sqr = 0;
for (let i=1; i < 7; i++) {
    remainder = i % 2;
    if (remainder === 0) {
        sqr = i * i;
        console.log(sqr);
    }
}

//1.3
const username = 'John Doe';
for (let i=0; i < 4 ; i++) {
    if (i === 2) {
        console.log(`Happy birthday dear ${username}`);
    } else {
        console.log('Happy birthday to you');
    }
}

//1.4
let confirmValue = false;
while (!confirmValue) {
    confirmValue = confirm("Stop?");
}

//1.5
const count = (+prompt('введите окончание диапазона')) + 1;
remainder = 0;
sum = 0;
for (let i=0; i < count; i++) {
    remainder = i % 2;
    if (remainder !== 0) {
        sum += i;
    }
}
alert(`сумма нечетных чисел составит  ${sum}`);

//1.6
let counter = 0;
let randValue = 0;
while (true) {
    randValue = Math.random();
    counter++;
    if (randValue > 0.9) break;
}
alert(`количество итераций цикла ${counter},
случайное число, прервавшее цикл ${randValue}`);

//1.7
let i = 0;
let j = 0;
result = 0;
for (i = 1; i < 11; i++) {
    for (j = 1; j < 11; j++) {
        result = i * j;
        console.log(`${i} * ${j} = ${result}`);
    }
}

//1.8
i = 0;
j = 1;
for (i = 0; i < 100; console.log(i), i = i + j, j = i - j) {}

// 1.9
let promptValue = null;

counter = 0;
sum = 0;
let avg = 0;
while (true) {
    promptValue = prompt ('введите число');
    if (promptValue === null) {
        break;
    }
    counter++;
    sum += +promptValue;
}
avg = sum/counter;
console.log(`${sum}, ${counter}, ${avg}`);

//1.10
let pass = '1';
promptValue = 0;
while (true) {
    let promptValue = prompt ('введите пароль');
    if (promptValue === pass) {
        alert('вы авторизованы');
        break;
    } else if (promptValue === null) {
        if (!confirm('вы уверены, что хотите отменить авторизацию?')) {
            continue;
        } else {
            break;
        }
    }
}

//1.11
result = 0;
for (let i = 1; i < 51; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
        result = 'FizzBuzz';
    } else if (i % 5 === 0) {
        result = 'Buzz';
    } else if (i % 3 === 0) {
        result = 'Fizz';
    } else {
        result = i;
    }
    console.log(result);
}
