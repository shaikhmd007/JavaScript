//Fibbonacci .
var n1=0;
var n2=1;
var n3=0; 
var num=prompt("Enter A Number: ");
document.write(" "+n1);
document.write(" "+n2);
  for(var i=2;i<num;i++){
        n3=n1+n2;
        document.write(" "+n3);
        n1=n2;
        n2=n3;
  }