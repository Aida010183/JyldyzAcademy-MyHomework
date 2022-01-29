// 1. Простое сообщение: сохраните текстовое сообщение в переменной и выведите его в браузере.
// let userName = "I will always do it, I need to see the results.";
// alert(userName);

// 2. Простые сообщения: сохраните сообщение в переменной и выведите это сообщение. Затем замените значение переменной другим сообщением и выведите новое сообщение.
// let userMessage;
// userMessage = "Let's learn!";
// userMessage = "Save the world!";
// document.write(userMessage);

// 3. Напишите несколько строк кода, выводящих на экран ваше имя и почтовый адрес.
//
/*let userSurName = prompt("Your last name:");
let userName = prompt("Your first name:");
let userEmail = prompt("Your email:");
document.write("<h1>Your last name: " + userSurName + "</h1>");
document.write("<h1>Your first name: " + userName + "</h1>");
document.write("<h1>Your email: " + userEmail + "</h1>");*/

// 4. Интернет-магазин занимается продажей различных сувениров и безделушек. Каждый сувенир весит 75 г, а безделушка – 112 г. Напишите программу, запрашивающую у пользователя количество тех и других покупок, после чего выведите на экран общий вес посылки.
//
/*const SOUVENIR = 75;
const KNICKKNACK = 112;
let Souvenir = prompt("How many souvenirs did you buy?");
let KnickKnack = prompt("How many knickknacks did you buy?");
let decition = Souvenir * SOUVENIR + KnickKnack * KNICKKNACK;
document.write(
  `<h1>Total purchase weight: ${decition.toFixed(2)}gram` + "</h1>"
);*/

/*5. Создайте программу, которая запрашивает у пользователя два целых числа a и b, после чего выводит на экран результаты следующих математических операций: 
- сумма a и b; 

- разница между a и b;

- произведение a и b; 

- частное от деления a на b; 

- остаток от деления a на b;  

- результат возведения числа a в степень b.*/

let a = +prompt("Specify an integer for a:");
let b = +prompt("Specify an integer for b:");
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);
