// using 'For Of' similar  Like A loop ;

let students = [
  { FirstName: "MD", Roll: "1" },
  { FirstName: "Ak", Roll: "2" },
  { FirstName: "Sk", Roll: "3" },
  { FirstName: "SP", Roll: "4" },
];
for (const getdata of students) {
  console.log(getdata.FirstName);
}


// Practice For Of 
let Employees=[
  {Emp:"Q",code:"1"},
  {Emp:"r",code:"2"},
  {Emp:"s",code:"3"},
  {Emp:"t",code:"4"},
  {Emp:"u",code:"5"},
  {Emp:"v",code:"6"},
  {Emp:"w",code:"7"},
  {Emp:"y",code:"8"},
  {Emp:"x",code:"9"},
  {Emp:"z",code:"10"},
];
for(const getDetails of Employees){
   console.log(getDetails.code);
}