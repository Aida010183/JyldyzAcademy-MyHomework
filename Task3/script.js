// 1) Multiply

// function multiply(a, b){
//     return a * b;
//    }

//
// 2) Function 1 - hello world

// Write a function "greet" that returns "hello world!"
// function greet() {
//     return "hello world!";
//  }

//
// 3)Can we divide it?

// function isDivideBy(n, a, b) {
//     if (n % a === 0 && n % b === 0) {
//       return true;
//     } else {
//       return false;
//     }
//   }
//   isDivideBy(-12, 2, -6);
//   isDivideBy(-12, 2, -5);

//
// 4)Capitalization and Mutability

// function capitalizeWord(word) {
//     return `${word[0].toUpperCase()}${word.slice(1,)}`
//   }

//
// 5)Century From Year

// function century(year) {
//     let centuryCount = 0;
//     while (year > 0){
//       year = year - 100;
//       centuryCount = centuryCount + 1;
//     }
//     return centuryCount;
//   }

//
// 6)Convert a Number to a String!

// function numberToString(num) {
//     // Return a string of the number here!
//     return num.toString();
//   }

//
// 7)Convert a String to a Number!

// var stringToNumber = function(str){
//     return Number(str);
//   }

//
// 8)Convert to Binary
//
// function toBinary(n){
//     return Number(n.toString(2));
//   }

//
// 9)Even or Odd

// function even_or_odd(number) {
//     if (number % 2) {
//       return "Odd";
//     } else {
//       return "Even";
//     }
//   }

//
// 10)Fake Binary

// function fakeBin(str){
//     let num = []
//     str.split('').forEach(numstr => {
//       if(+numstr >= 5) {
//         num.push(1)
//       } else {
//         num.push(0)
//       }
//     })
//       return num.join('')
//     }

//
// 11) Largest Square Inside A Circle
//
// function areaLargestSquare(r) {
//     let diametr = r * 2;
//     diametr = (diametr * diametr) / 2;
//     return diametr;
//   }
