/**
### map
- This we will use A LOT in React.
- This is like forEach only, but we can return items from the callback function.
- This can be used to map and create a manipulated array.
- This can create a copy with the changes that we write in the callback function. Basically creating a 1-1 map with the source and the copy array.
- The difference will be the logic that we write in the callback function.
 */

// .map Method 
let students = [
    { FirstName: "MD", Roll: "1" },
    { FirstName: "Ak", Roll: "2" },
    { FirstName: "Sk", Roll: "3" },
    { FirstName: "SG", Roll: "4" }
  ];
  

let getname  = students.map(function(usernames){
    return(usernames.FirstName);
});
console.log(getname);

// map method  in Array by arrow function 

const numbers=[1,4,3,0,1,4,3]

const multiby2 = numbers.map((n)=>{
  return `${n} ka Square Is = ${n*n}`;
});
console.log(multiby2);


