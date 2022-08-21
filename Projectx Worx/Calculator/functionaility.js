function calculate(){
var n1=document.getElementById('n1').value;
var n2=document.getElementById('n2').value;

 var operation=document.getElementById('operator').value;

if(operation=='+'){
   var calc=parseInt(n1)+ parseInt(n2);
}
if(operation=='-'){
   var calc=parseInt(n1) - parseInt(n2);
}
if(operation=='*'){
   var calc=parseInt(n1) * parseInt(n2);
}
if(operation=='/'){
   var calc=parseInt(n1) / parseInt(n2);
}
document.getElementById('result').value=calc;


//document.getElementById('result').value;
}