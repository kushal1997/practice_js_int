// 1. Write a JavaScript function to calculate the sum of two numbers.

// function sumOfTwoNumbers(a, b) {
//   return a + b;
// }

// console.log(sumOfTwoNumbers(4, 5));

// ====================================================================================

// 2 . Write a JavaScript program to find the maximum number in an array.

// const arr = [1, 2, 4, 8, 3];
// function findM(arr) {
//   return Math.max(...arr);
// }
// console.log(findM(arr));

// ====================================================================================

// 3. Write a JavaScript function to check if a given string is a palindrome
//  (reads the same forwards and backwards).

// const string = "hello";
// // const string = "asa";

// function isPalindrome(str) {
//   return str === str.split("").reverse().join("");
// }
// console.log(isPalindrome(string));

// ====================================================================================

// 4. Write a JavaScript program to reverse a given string.

// const string = "hello";
// const reverseStr = (str) => str.split("").reverse().join("");
// console.log(reverseStr(string));

// ====================================================================================

// 5. Write a JavaScript function that takes an array of numbers
// and returns a new array with only the even numbers.

// const arr = [1, 2, 3, 4];

// const newArr = arr.filter((num) => {
//   return num % 2 === 0;
// });

// // const newArr = arr.filter((num) => num % 2 === 0);

// console.log(newArr);

// ====================================================================================

// 6. Write a JavaScript program to calculate the factorial of a given number.

const num = 5;

//case : 1

// function factorialCheck(n) {
//   if (n < 0) return false;
//   let res = 1;
//   for (let i = 1; i <= n; i++) {
//     res *= 1;
//   }
//   return res;
// }

//case 2

// function factorialCheck(n) {
//   if (n < 0) return "Factorial not defined for negative numbers";
//   if (n === 0 || n === 1) return 1;
//   return n * factorialCheck(n - 1);
// }

//case 3

const factorialCheck = (n) => (n <= 1 ? 1 : n * factorialCheck(n - 1));
console.log(`Iterative: The factorial of ${num} is ${factorialCheck(num)}`);
