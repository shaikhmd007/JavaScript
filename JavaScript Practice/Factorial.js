console.log("Factorial of a no.");

var n;
var facto=1;
n=prompt("Enter A No. To Find Factorial: ");

for(var i=1;i<=n;i++){
facto=facto*i;
}
console.log("Factorial Of "+n+ " is "+facto);