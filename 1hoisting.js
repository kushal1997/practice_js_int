// Question 1
// ====================================

// foo = 30;
// console.log(foo);
// let foo = 100;
// console.log(foo);

// Question 2
// ====================================

// for (let i = 0; i < 5; i++) {
//   setTimeout(() => console.log(i), 0);
// }

// Question 3
// ====================================

// for (var i = 0; i < 5; i++) {
//   setTimeout(() => console.log(i), 0);
// }

// Question 4
// ====================================

// var name = "kushal";

// var obj = {
//   name: "Hacked Kushal",
//   prop: {
//     name: "inside prop",
//     getName: function () {
//       return this.name;
//     },
//   },
//   getName: function () {
//     return this.name;
//   },
//   getNameV2: () => this.name,

//   getNameV3: (function () {
//     return this.name;
//   })(), //iify
// };

// console.log(obj.prop.getName());
// console.log(obj.getName());
// console.log(obj.getNameV2());
// console.log(obj.getNameV3);

// Question 5
// ====================================

// console.log("A");
// setTimeout(() => console.log("B"), 0);
// console.log("C");

// Question 6
// ====================================

// async function getData() {
//   return 0;
// }
// console.log("A");
// setTimeout(() => console.log("B"), 0);
// getData().then(() => console.log("love is in the air"));
// console.log("C");

// Question 7
// ====================================

async function getData() {
  return 0;
}
function logC() {
  console.log("E");
}
console.log("A");
setTimeout(() => console.log("B"), 0);
getData().then(() => console.log("love is in the air"));
Promise.resolve().then(logC);

console.log("C");
