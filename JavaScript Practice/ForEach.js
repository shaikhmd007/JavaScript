// Arrays With Loop And Function

const numbers = [1, 4, 3, 2];
function multi(n, ind) {
  console.log("index is " + ind);
  console.log(`${n } * 2 = ${n * 2}`);
}

multi(numbers[0],0);
multi(numbers[1],1);
multi(numbers[2],2);
multi(numbers[3],3);

// // using for Loop 
// for (let i = 0; i < numbers.length; i++) {
//   multi(numbers[i],i);
// //console.log()
// }

// ==> using forEach 
/* ### forEach:
- This is used to loop on every element of your array.
- This takes a callback. In the callback, this will give commonly 2 parameters that we need. Element and index.
- We can write whatever logic that we want on those elements.
- However, we cannot return.
- We cannot manipulate that array.
- This is the exact basic alternate to for of. 
- There is 1 difference, we cannot use break and continue keywords here. 
A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
Performs the specified action for each element in an array.
*/

numbers.forEach(function (n, ind) {
    console.log(`index is ${ind} And Value Is ${n}`);
  });

numbers.forEach(multi);
  
// practice forEach 
const Arr = [1, 4, 3, 2];
function print(n, ind) {
  console.log(`index is ${ind} And Value Is ${n}`);
  // console.log(`${n } * 2 = ${n * 2}`);
}
// for (let i = 0; i < Arr.length; i++) {
//     print(Arr[i],i);
//   //console.log()

// }
// Doing Multiplication using from the all For Each of the  Nums Presented in array
Arr.forEach(function (n) {
  console.log(`${n} * 2 = ${n*2}`);
});

// Practice 'For Method Of array And ForEach methhod

const arr = ["Anything", 1234, "ABCD", false, _ => {}, "another string"];
// USing For Loop
for(let i=0;i<arr.length;i++){
  console.log(typeof arr[i]);
}
//Using For Of 
for(let DataypesOf of arr){
  console.log(typeof DataypesOf);
}

// using forEach
arr.forEach((DataypesOf)=>{
  console.log(typeof DataypesOf)
});
//optimized
arr.forEach(e=>console.log(typeof e));

//Manipulate and store square of each element of the aray.
const numbersArr = [2, 3, 5, 4, 1, 7];
const sqr_arr=[];
numbersArr.forEach((elements,index)=>{
let sqr_n=elements*elements;
sqr_arr[index]=sqr_n;
});
console.log(numbersArr);
console.log(sqr_arr);


// Understand the ForEach 
const arrayOfNumbers=[1,21,13,43,55,76,57];
function myFunction(n,ind){
  console.log(`index is ${ind} And The Value Is ${n}`);
};
arrayOfNumbers.forEach(myFunction);