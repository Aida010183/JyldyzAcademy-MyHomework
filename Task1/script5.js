/*5. Создайте программу, которая запрашивает у пользователя два целых числа a и b, после чего выводит на экран результаты следующих математических операций: 
- сумма a и b; 

- разница между a и b;

- произведение a и b; 

- частное от деления a на b; 

- остаток от деления a на b;  

- результат возведения числа a в степень b.*/

let a = +prompt("Specify an integer for a:");
let b = +prompt("Specify an integer for b:");

document.write(`<b>${a} + ${b} = ${a + b}</b><br>`);
document.write(`<b>${a} - ${b} = ${a - b}</b><br>`);
document.write(`<b>${a} * ${b} = ${a * b}</b><br>`);
document.write(`<b>${a} / ${b} = ${a / b}</b><br>`);
document.write(`<b>${a} % ${b} = ${a % b}</b><br>`);
document.write(`<b>${a} ** ${b} = ${a ** b}</b>`);
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);
