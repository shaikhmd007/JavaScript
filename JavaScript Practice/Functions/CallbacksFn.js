//callback Function : The Function Call it From another function and  take input
// as an func or  parameter  and passed functions as an argument: its Called as callback function

function AnotherFunc(Do) {
  console.log("This Another Call Back function");
  console.log(`You  ${Do}`);
}

function MainFunction(callback) {
  console.log("This Is Main Function");
  callback("Called Another Func Using MAin Function That is CallBack Function");
}
MainFunction(AnotherFunc);

// Practicing Call Backs

function MainFun(fnArg) {
  console.log("This is main function  ");
  fnArg("passed through Another Function");
}
// Calling  this Function
MainFun(AnFunc);

function AnFunc(passing) {
  console.log("this is an another fn");
  console.log(`you ${passing}`);
}

// call backs

function MainFunction(callback) {
  console.log("This Is Main Function");
  callback(
    "calling Another Function Using MAin Function Its Called As Callback Fn"
  );
}
MainFunction(AnotherFunc);

function AnotherFunc(Do) {
  console.log("This is Another Call Back function");
  console.log(`You  ${Do}`);
}


// call back practiced
function f1(storing) {
  console.log("F1");
  //console.log(storing);
  storing();
}
f1(f2);

function f2() {
  console.log("F2");
}
