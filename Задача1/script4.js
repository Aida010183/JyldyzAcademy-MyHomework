// 4. Интернет-магазин занимается продажей различных сувениров и безделушек. Каждый сувенир весит 75 г, а безделушка – 112 г. Напишите программу, запрашивающую у пользователя количество тех и других покупок, после чего выведите на экран общий вес посылки.
//
const SOUVENIR = 75;
const KNICKKNACK = 112;
let Souvenir = prompt("How many souvenirs did you buy?");
let KnickKnack = prompt("How many knickknacks did you buy?");
let decition = Souvenir * SOUVENIR + KnickKnack * KNICKKNACK;
document.write(
  `<h1>Total purchase weight: ${decition.toFixed(2)}gram` + "</h1>"
);
