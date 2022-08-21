/* A JavaScript function is a block of code designed to perform a particular task.
A JavaScript function is executed when "something" invokes it (calls it).


1 Normal Function ()

function myFunction() {
  alert("Hello World!");
}
myFunction();

2
Parameterized Functions ()

function name(parameter1, parameter2, parameter3) {
  // code to be executed
}
name(1,3,2);

*/
//3

//Annonymous Or Immidiate invoke function;
// (function (){
//    let stringMsg="print"
// })();

// Arrow Function

let Addition = () => {
  var n1 = 5;
  var n2 = 5;
  var res = n1 + n2;
};

// method 2nd if we hv only 1 number or argument
let double = (n) => n*2 
  console.log(double(10));

// Objects In Js 

let car = {
  Brand: "TATA",
  model: "A1",
  useThis() {
    document.write(
      "Hey I Am Gonna Buy " + this.Brand + " from " + car1.model + ""
    );
  },
};

let car1 = {
  Brand: "RR",
  model: " R1",
};


car.useThis();
document.write("<br><br>");

// Math Functions Or Say Methods 
document.write("Math Functions") 

(function GetRandom() {
  let X = Math.floor(Math.random() * 10 + 1); // 1 To 10
  document.write(X);
})();

function GetRandomMinMax(min, max) {
  let X = Math.floor(Math.random() * (max - min + 1)) + min; // 10 To 100
  return X;
}
document.write(GetRandomMinMax(1, 99));
 




//Practice Section 


// Normal Function
console.log('Normal Function');

function defaultFunction(){
console.log("This Is Default Function");
}
defaultFunction();

// Function Expression
 const FuncExpression=function(n1,n2){
 return n1+n2;
}
FuncExpression(1,2);


// ==> Arg Fn  With Argument: 
console.log(' ==> Arg Fn : ');
function ArgumentFunction(arg1){
console.log(arg1);
}
ArgumentFunction("This Is Argument Default Function");

// Arrow Function

const ArrowFunction=(n1,n2)=>{
  return n1-n2;

}
const store= ArgumentFunction(30,20);
console.log(store);


/* New Prog of Fetching a Particular item from Objet
console.log('New Prog of an Fetching a Particular from Objet');
let students = [
  { FirstName: "MD", Roll: "1" },
  { FirstName: "Ak", Roll: "2" },
  { FirstName: "Sk", Roll: "3" },
  { FirstName: "SG", Roll: "4" }
];

// Function type using Arrow func / ForEach
students.forEach((get)=>{
  console.log(get.FirstName);
})

// using Annonymous function /For Each
students.forEach(function(get) {
  console.log(get.Roll);
});


// map method  in Array by arrow function 

 const numbers=[1,4,3,0,1,4,3]

const multiby2 = numbers.map((n)=>{
  return `${n} Square Is = ${n*n}`;
});
console.log(multiby2);


// Find Target 
function findtarget(arr,Trgt){
       for(let i=0;i<arr.length;i++){
           if(arr[i]===Trgt){
             return i;
           }
       }
         return -1;
}
let myarr=[1,2,3,4,5,7,0,8,9];
const ans=findtarget(myarr,0);
console.log(ans);
*/