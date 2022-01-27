// 1. Дана строка **'ddd@bbb@ccc'**. Замените все **@** на **'!'**
let userString = "ddd@bbb@ccc";
alert(userString.replace(/@/g, "!"));
document.write(userString.replace(/@/g, "!") + "<br>");

// 2. Дана строка **'js'**. Сделайте из нее строку **'JS'**.
let userString2 = "js";
document.write(userString2.toUpperCase() + "<br>");

// 3. Дана строка **'JS'**. Сделайте из нее строку **'js'**.
let userString3 = "JS";
document.write(userString3.toLowerCase() + "<br");

// 4. Дана строка**'I am a hero!'**. Выведите в консоль **количество символов** в этой строке.
let userString4 = "I am a hero";
console.log(userString4.length);

// 5. Составить скрипт, который запрашивает у пользователя ввести номер кредитной карты. Скрипт должен обработать полученный номер и показать на странице последние 4 цифры а остальные цифры карты должны заменены на *.

// **Пример: "Номер вашей карты: **********1245"**

// let userCard = prompt("Введите номер кредитной карты:");
// document.write(
//   "Номер вашей карты: " +
//     userCard.replace(userCard.slice(0, -4), "************")
// );
