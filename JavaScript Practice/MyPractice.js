/* 
  ==> How Much JavaScript needed to Learn React Js:'

Start with variables, numbers, boolean, strings and make your concepts clear about other very basic fundamentals. Make some small app on that like a calculator to see how things work together.
Learn about operators, conditionals, functions, loops, javascript keywords, arrays, objects, and other fundamentals.
Event handling, DOM manipulation, and how ‘this’ keyword works are totally different in javascript (which is confusing for most of the developers).
Higher-order function, callback function, arrow function, state (how state and setState() function works) scope, class & constructors, extends and inheritance, map, reduce, filter, promises, modules, closures, const, let (difference between var, let and const) and other features of ES5 and ES6.


Imp Topics Concepts Should Great Clear 
1=> JavaScript Intro (Basic)
  Variable ==> Let Vs Var Vs Const
  Arrays Or Objects And Methods Like > .map () , .reduce(), .filter()
  Loops 
  Functions >  and its Ways(Arrow Function , Callbacks , Function Expression): 
  DOM Manipulation 

  ==> Advanced Concepts: 
ES6 
Scoping >
Hoisting 
closure
this KeyWord concept
Async Await (VIMP).
CallBacks
Promises

*/

/*//==> Prepration fro javascript
 Data types : In JavaScript we have DATA TYPES like Numbers And Strings boolean, undefined , null , BigInt, symbol  etc. but is staring 4 types
 variables and its types

JavaScript variables can hold numbers like 100 and text values like "John Doe".

In programming, text values are called text strings.

JavaScript can handle many types of data, but for now, just think of numbers and strings.

Strings are written inside double or single quotes. Numbers are written without quotes.

If you put a number in quotes, it will be treated as a text string.
1.  variables : In Javascript we have variables and these are like container to store some information and data : we have - let , Var And Const  
. Let : is used to create a variable to store some information
e.g : 
let variable="Let variable " // here let is used to store text innfo. it is A string :

 let : The let statement declares a variable
Variables are containers for storing information.
Creating a variable in JavaScript is called "declaring" a variable: */

var variablename = "Var is var";

//GEC - Global execution context
//1 - complie -> i) DAV
//->parse-> code Execute.
console.log(this);
// console.log(window);
console.log(fname);
var fname = "JavaScript";
console.log(fname);

// Arrow Function
const ArrowFunction = () => {
  console.log("This is Arrow Function");
};
ArrowFunction();

/* const ArrowFunction=(n1,n2)=>{
    return n1-n2;
  }
  const store = ArrowFunction(300,20);
  console.log(store);

*/

//  Function expression is : store a function into a var and use 'function' Keyword To create an fn
//  const store=function(){
//     console.log("expression function");
//  }
//  store();
//  */

/* . Higher order function :
 ==> a function return function or Take input as an function and return the function its called as higher order fubction

function f1() {
 console.log("main outer function");

  let f2 = function (arg) {
    console.log("tis is inner function returned by f1 ");
  };
  return f2;
}
const storing = f1();
storing();

 */

/* 
Arrays With Loop And Function

const numbers = [1, 4, 3, 2];
function multi(n, ind) {
  console.log("index is " + ind + " Value Is "+n);
}
// Method 1
multi(numbers[0],0);
multi(numbers[1],1);
multi(numbers[2],2);
multi(numbers[3],3);

// Method 2

using for Loop
for (let i = 0; i < numbers.length; i++) {
  multi(numbers[i],i);
}

Method 3
 using forEach 

numbers.forEach(multi);
numbers.forEach(function (n, ind) {
   console.log(`index is ${ind} And Value Is ${n}`);
 });
 
 */

// Mutilpy by 2
// console.log(`${n } * 2 = ${n * 2}`);

// const arr = [1, 4, 3, 2];
// function sqrFun(n){
//   return(n*n);
// }
// const square = arr.map(function(n){
//   return n*n;
// });
// console.log(square);

// const FindSum=arr.map(arrowFunction=(n)=>{
//   return n+n;
// })
// console.log(FindSum);
/* 
Arithmetic operation

function add(n1,n2){
   return n1+n2;
}
console.log(add(3,2)); //5

substraction =(n1,n2)=>{
  return n1-n2;
}
console.log(substraction(3,2))//1

const multi = function (n1, n2) {
  // console.log("Multiplication of n1 And n2");
  console.log(n1 * n2);
};
multi(3, 2); //6

const div = function (n1, n2) {
  console.log(n1 / n2);
};
div(50, 5);

const div=((n1,n2){
 console.log(n/n2);
});
 */

//concatenate Array :  Both R Same ARray
// let arr1=[1,2,3,4,5];
// let arr2=arr1;
// console.log(arr1,arr2);
// arr1.push(7);
// console.log(arr1,arr2);
// console.log(arr1===arr2);

// // But Here 2 Diffrent arr are there
// let arr3=[1,2,3,4,5];
// let arr4=[1,2,3,4,5];
// console.log(arr3===arr4);

let arr1 = [1, 2, 3, 4, 5];
// let arr2=arr1.slice(0); // Clone through slice(); Method
// let arr2=[].concat(arr1);  // Clone Via .concat

let arr2 = ar;
arr1.push(7);
console.log(arr1 === arr2);
console.log(arr1, arr2);

//spread operator

//Sort Method

// const users = [
//   {firstName: "harshit", age: 23},
//   {firstName: "mohit", age: 21},
//   {firstName: "nitish", age: 22},
//   {firstName: "garima", age: 20},
// ]
// users.sort((l,h)=>{
//   return
// })
// console.log(users);

// const products = [
//   {productId: 1, produceName: "p1",price: 300 },
//   {productId: 2, produceName: "p2",price: 3000 },
//   {productId: 3, produceName: "p3",price: 200 },
//   {productId: 4, produceName: "p4",price: 8000 },
//   {productId: 5, produceName: "p5",price: 500 },
// ]
// products.sort((l,h)=>{
//     return l.price-h.price
// });
// console.log(products);

// // Using Slice

// const LToH =products.slice(0).sort((l,h)=>{
//     return l.price-h.price
// });
// console.log(LToH);

/* const users = [
  { firstName: "harshit", age: 23 },
  { firstName: "mohit", age: 21 },
  { firstName: "nitish", age: 22 },
  { firstName: "garima", age: 20 },
];

users.sort((a, b) => {
  // if(a.age > b.age){
  if (a.firstName > b.firstName || a.age>b.age) {
    return 1;
  } else {
    return -1;
  }
});
console.log(users);
 */

//101305216172  Jasvinas  Mumm UAN PF

//DSA Q Practice
// Sum Zero

// loops : loops are used for rpeat a task and iterate with nums

//while looop
// let i=0;
// while(i<=10){
// console.log("I m While Loop"+ i);
// i++;
// }

//do while looop : it run even 1st time  condition even false
let i = 143;
do {
  console.log(
    "I m do  While Loop and I Ran 1 time Be4 checking The Condn: that is ",
    i
  );
  i++;
} while (i <= 10);

// 10

//For LOOP
//Print Sum of first 10 N Natural No.
let sum = 0;
for (i = 1; i <= 10; i++) {
  sum = sum + i;
}
console.log(sum);

let fruits = ["Apple", "Banana", "chikoo", "Mango"];
for (i = 0; i <= fruits.length - 1; i++) {
  console.log(fruits[i].toUpperCase());
}
// for (let index = 0; index < fruits.length; index++) {
//   const element = array[index];

// }

const myArray = [
  ["John", 23],
  ["cat", 2],
];
const addToMyArray = myArray.push(["Crush JavaScript"]);
console.log(myArray);

//Now Removing From That  Array
const addToMyArray2 = myArray.push(["Crush JavaScript"]);
const removedFromMyArray = myArray.pop();
console.log(myArray);

//## Task:

//- We have an object .

// Print * Pattern

let n = 5;
let str = "";
for (i = 1; i <= n; i++) {
  // for(j=1;j<n;j++){
  str += "*";
  // }
  str += "\n";
}
console.log(str);

//  Print * Pattern
let star = "";
for (row = 1; row <= 5; row++) {
  //for every row ,run the col
  for (col = 1; col <= row; col++) {
    star += "* ";
  }
  star += "\n";
}
console.log(star);

// check is Array Or not
let arr = [121133, 112, 22];
let obj = { name: "object" };

let CheckArr = console.log(Array.isArray(arr));
//Will  return true if Array Othersise false
let CheckArrOrSomething = console.log(Array.isArray(obj));
console.log(CheckArrOrSomething);

//Multi-Dimensional Arrays =>

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
matrix[0][0]; //1
matrix[2][0]; //7
matrix[0][2]; //3

Array(12).fill(0);
console.log(Array);

const three = 1 + 2;
const four = three + 1;
console.log(four);

let a = 1 * 2 + ((5 / 2) % 2);
console.log(a);

/* {
let i;
  1 / 2
i++
i -= 2
i * 2
}  */

// Array
const arra = [
  [1, 2],
  [3, 4],
  [5, 6],
];

for (let i = 0; i < arra.length; i++) {
  for (let j = 0; j < arra[i].length; j++) {
    console.log(arra[i][j]);
  }
}

const myName = "Mohammad";
for (const iterator of myName) {
  //console.log(myName.toUpperCase());
  console.log(iterator);
}

// this keyword and function inside obj:
function info() {
  console.log(`Username Is ${this.username} And ID is ${this.ID}`);
}

let user1 = {
  username: "AA",
  ID: 01,
  Bio: info,
};
let user2 = {
  username: "AB",
  ID: 02,
  Bio: info,
};
let user3 = {
  username: "AC",
  ID: 03,
  Bio: info,
};

user1.Bio();
user2.Bio();
user3.Bio();

//console.log(instagram);

// console.log(this);

// ==>  Conditional Operators :
/* 
if (){

}

else if(){

}
else(){


}

*/
// Ternary operator : it is condiional operator with the keywords of ? And :  first its check for the condition , if the condition will TRUE its return True And left hnd statement before the colon otherwise FALSE the condtion return False or print ry8 Hnd side
// E.G

let age = 18;
let Permission = age >= 18 ? "Access 18+ " : "Age restricted";
console.log(Permission);
