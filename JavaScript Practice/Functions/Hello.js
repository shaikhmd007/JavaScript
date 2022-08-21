// Change Html data with js by using ID method 1st 
document.getElementById('main').innerHTML="<h1>By Js ID 1</h1>";

// Change Html data with js by using ID method 2 with assigning var
 var x= document.getElementById('2nd').innerHTML="<h4>By Js  ID 2 </h4>";
 console.log(x);

// Change Html data with js by using class..

 var c = document.getElementsByClassName('main')[0].innerHTML="By class Key 1 ";


// //Change Html data with js by using class.. m2

document.getElementsByClassName('byclass')[0].innerHTML=" 2 By Class key"

// // concatination 
var a="1";
var concat= a+"2"+"3"+"....";
document.write(concat); 

// setTimeout 

/* var a;

a = setTimeout(fun);

function fun() {
alert(" Welcome to the javaTpoint.com ");
} */

//setInterval
/* 
setInterval(fun, 5000);
function fun() {  
alert(" Welcome to the SetTime Interval Functio ");  
}
 */
// // Operators -
//  Arithmetic Operators


function Addition(){
var n1=5;
var n2=5;
var res=n1+n2;

document.getElementsByClassName('arithmatic')[0].innerHTML="Operators :- Arithmetic Operators "+"Addition is "+res;
}
Addition();

function substaction(){
var n1=5;
var n2=5;
var subs=n1-n2;

document.getElementsByClassName('arithmatic')[1].innerHTML="Operators :- Arithmetic Operators "+"Substraction is "+subs;

}
substaction();

function mutiplication(){
var n1=5;
var n2=5;
var mul=n1*n2;

document.getElementsByClassName('arithmatic')[2].innerHTML="Operators :- Arithmetic Operators "+"Multiplication is "+mul;

}
mutiplication();
function division(){
var n1=5;
var n2=5;
var divi=n1/n2;

document.getElementsByClassName('arithmatic')[3].innerHTML="Operators :- Arithmetic Operators "+"division is "+divi;

}
division();

 function usePrompt(){
var name= prompt('Enter Your Name : ');
document.getElementById('print').innerHTML=name;
}


//If Conditionals Statements:
 var age=16;
if(age >=18){
 document.write("18+ or Can Vote");
}


if(age >18){
    document.write("18+");
}else{
    document.write("Restrict for Under 18+");
}


if(age >18){
    document.write("18+");
}else if(age==17){
    document.write("please Wait !..");
}else{
    document.write("NO!.. You Cant ");
}


//Array s

  const cars =['RR','BMW','Jaguar','AUDI','Mercedes'];
  let [arr1,arr2,arr3,arr4,arr5]=cars;
  console.log(arr1,arr2,arr3,arr1);
 

 document.getElementById('arr').innerHTML=(cars[0]);
  



