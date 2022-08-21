// Higher Order Function Or Function returns a function;

function MainFunction() {
  console.log("This Is Main function");
  function RetFunction() {
    console.log("Returned Function by Main Function");
  }

  return RetFunction;
}
const ans = MainFunction();
ans();
