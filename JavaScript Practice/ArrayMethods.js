/* 
.length() ✔️
.typeof()
toString()✔️
  .push()✔️
  .pop()✔️
  sort()✔️
 splice()✔️
 .slice()✔️
   .join()✔️
 .shift()✔️
   .unshift()✔️
  .reverse()
  - reduce
 - map ✔️
 - filter ✔️
 flat()
 .concat() ✔️
   .split() 
- forEach ✔️
- findIndex`
- every
- fill
- some
- find
.findLast()



# Aug-08, 2022

## Array
- It's a collection of data.
- The data type can be anything in a single array.
- Ideally, you should have similar type of data in your array.
- heterogenous -> Mixed
- Arrays are Objects!

## Creation of an Array
### Approach 1 - Square bracket syntax.
- const <variable_name> = [];
- Square brackets means it is an array.
- You can put the values inside it.
- All the values are separated by comma.

### Approach 2 - Using the constructor
- In JS, there is a class called Array.
- We just need to instantiate (create) an object of that class.
- new keyword is used here.
- Usage: const <variable_name> = new Array(<elements>);
- In the constructor, the elements are separated by the comma.

## Index
- This is used to identify which element is which.
- This is plain and simple counting.
- Counting starts from 0.
- These are all integer numbers.
- 0, 1, 2, 3, 4, 5...

### Access elements from an array
- Using the [];
- Usage: <variable>[<index>];
- Indexes should be integers.

### Updating an element
- Usage arr[<index>] = <whatever_value>;

### Adding an element ==> .push()

- A built in function-> <variable>.push()
- Whatever value we need to push, we will put in as an argument.
- This will automatically put that element at the last location.
- Basically, this is equivalent to append.

### Removing an element ==> .pop()
- A built in function -> <variable>.pop()
- This will remove and also return the value/element which it has removed.
- Pop will remove from the last.
- What if I want to remove from the middle.
- I have and index and I want to remove an element from there.

### splice
- First argument we send is the starting index.
- Second argument we send it the counter of delete.
- After that, any arguments we send will be used to insert.
- Usage - <array_variable>.splice(<starting_idx>, <len_to_delete>, <insertion_values>);
- It will start deleting from the startin index and keep on deleting upto length number of items.
- Once done, it will check if there are element to insert, if yes then it will proceed to insert those elements.
- This will change the original array.

### slice
- It is basically substring, but for arrays.
- This one you give string and ending indexes.
- It will include the staring index but exlude the ending index.
- If we give negative index. then it will start from the last.
- This will not change the original array.
- This returns a copy (Shallow copy).

### join
- This combines an array into a string.
- We pass the glue as an argument. This is also called as separator
- This will join the elements and return a string.

### shift
- This is like pop but from the 0th index.
- This also returns the removed element in case if we need it.

### unshift
- This is opposite of push
- push will push from the last index.
- unshift will push from the 0th index.


### length
- For any array, we can find the size (in terms of number of elements).
- This can be done by using the length property.
- This is a property and NOT a function.
- It does not care about the custom keys that we try to make.
- If we add a valid key which is a very large number, it will try to accomodate that by increasing the size of the array.

**Shift and pop are similar (in sense of removing), whereas Unshift and push are similar (in sense of adding).**
**Arrays are collections of elements.**

## Task:
1. We have a string, we can take any value for that and we need to calculate the number of words of that string.
2. Create an array of random numbers (take 10 elements). Sort that array and then find:
 - Mean
 - Median
 - Mode

# Aug-09, 2022

## Array Methods
- These are the built in functions of Arrays.
- We call them methods because they are part of the Array Class.

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#instance_methods


### forEach:
- This is used to loop on every element of your array.
- This takes input as a callback. In the callback, this will give commonly 2 parameters that we need. Element and index.
- We can write whatever logic that we want on those elements.
- However, we cannot return.
- We cannot manipulate that array.
- This is the exact basic alternate to for of. 
- There is 1 difference, we cannot use break and continue keywords here.

### map
- This we will use A LOT in React.
- This is like forEach only, but we can return items from the callback function.
- This can be used to map and create a manipulated array.
- This can create a copy with the changes that we write in the callback function. Basically creating a 1-1 map with the source and the copy array.
- The difference will be the logic that we write in the callback function.
// Print the datatype of each element

// const arr = ["Anything", 1234, "ABCD", false, _ => {}, "another string"];

// for(let i = 0; i < arr.length; i = i + 1) {
//   if(arr[i] == "ABCD") {
//     break;
//   }
//   console.log(typeof arr[i]);
// }

// console.log("");
// magic of in-built function === typeof 
// // for(let element of arr) {
// //   console.log(typeof element);
// // }




### some
- This will return true/false (boolean) on whether some elements match the condition or not.
- Some means 1 or more than 1.
- The purpose of this is just to check.
- From the callback function, we will return boolean.
- If for 1 or more cases the some function gets boolean true. Then it returns true.
- Meaning, there are atleast 1 elements which match the condition.
- This also accepts a callback. That callback will have element, index and original_arr.
- Callback will return boolean.

### filter
- This is similar to some, but instead of just returning true/false. This will return the array of elements that match the condition.
- This also takes callback.
- This will return a list of elements that match the condition.
- If for any element, we are rerturning true, then that element will be added to the filtered list, otherwise it will be ignored.

### find
- This is kind of just like filter. But this returns the FIRST element which matches.
- Filter returns the ARRAY of all elements that matches whereas find returns the element itself.
- ONLY RETURNS FIRST OCCURENCE.
- Usage: When you are search for something, it will return that.
- In a case where we have more than one elements which matches, then it will return the first occurence.

### findLast
- Kind of same as find, but this returns the LAST occurence.


### findIndex
- This is just like find, but instead of returning the element, it will return the index.
- We pass the callback function, that function will get 3 parameters, element, index and original_arr. The callback can return boolean.
- This will give INDEX of the first element which matches the condition.

### findLastIndex
- Kind of same as findIndex, but this return the index of LAST occurence.

**We do have indexOf method, but that method does not accept any callback, therefore that method cannot be used for complicated arrays.**


### reverse
- This will reverse the array.
- [1, 2, 3, 4, 5].reverse() => [5, 4, 3, 2, 1];
- This will change the original array.
- This is an in place algorithm. Which means, this will change the original array.
- We have to be a little careful with this.

Reverse

const arr = [1, 2, 3, 4, 5];
console.log(arr);
console.log(arr.reverse());



const num = "ABCD";
console.log(num.reverse());

### flat
- This is used to flatten the array.
- Reducing the dimensionality.
- This method by default will reduce the dimensionality by 1. 
However, in case we wat to reduce even more, then we can pass the depth no. as an argument.


const multi_dimension = ["a", "b", "c", [1, 2, 3, ["x", "y", "z"]]];
const flat = console.log(multi_dimension.flat()); 
console.log(flat)

const flat = multi_dimension.flat(2);
console.log(flat);


["a", "b", "c", [1, 2, 3, ["x", "y", "z"]]];
["a", "b", "c", 1, 2, 3, ["x", "y", "z"]]; //Depth of 1
["a", "b", "c", 1, 2, 3, "x", "y", "z"]; //Depth of 2


# Assignment:
- Use this object:

const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

### Task 1:
- Use a forEach and calculate the total price of the products.
### Task 2:
- Use a filter and filter out the products with invalid prices.
### Task 3:
- Use find to find the price of avocado.

## Multi dimensional arrays 

*/

// Manipulate and store square of each element of the aray. and create new arr for sqr no. 

const numbers = [2, 3, 5, 4, 1, 7];
const sqr_arr = [];
numbers.forEach((element, index) => {
  const sqr = element * element;
  sqr_arr[index] = sqr;
});
console.log(numbers);
console.log(sqr_arr);

// Practice =>>>=

// ==> .length(): to find length of array;
let MyArray = ["Red", "Green", "blue", "Yellow"];
console.log(MyArray.length);

// ==>  to String() : The Javascript Array method toString() converts a array value to string  separated by a comma,
// Example
let colors = ["Red", "Green", "blue", "Yellow"];
console.log(colors.toString());

//==> join()  : The ajvaScript join () method combines all array element into a string .it is simliar to toString() method bt here we can specify or change it and show [-] Dash Symbol insted of Comma .
//Here we go
let Mycolors = ["Red", "Green", "blue", "Yellow"];
console.log(Mycolors.join(" - "));
//O/P : Red - Green - blue - Yellow

// ==> concat() : - This method combines two Arrays together OR Add more items to an array an return a new Array:

let colors1 = ["Red", "Green", "blue", "Yellow"];
let colors2 = ["Red", "Green", "blue", "Yellow"];
let MergedBothArray = colors1.concat(colors2);
console.log(MergedBothArray);

//==> push() : This method will add items to end of the Array and change it the Original Array.
let AddcolorsArray = ["Red", "Green", "blue", "Yellow"];
AddcolorsArray.push("Adding Via push() Method - ", "Black", "White");
console.log(AddcolorsArray);

//==> pop() : This method will remove one item from end of the Array and change it the Original Array.
function PopMethod() {
  let PopcolorsArray = ["Red", "Green", "blue", "Yellow"];
  PopcolorsArray.pop();
  console.log(PopcolorsArray);
}

// OP: ["Red", "Green", "blue"]

//==> shift() : This method will remove one item from starting of the Array and change it the Original Array.
function shiftMethod() {
  let arr = ["Red", "Green", "blue", "Yellow"];
  arr.shift();
  console.log(arr);
}
shiftMethod();

// Op :  ["Green", "blue", "Yellow"]

//==> unShift() : This method will add one or more item from  to the beginning of  Array and change it the Original Array.
function unshiftMethod() {
  let arr = ["Red", "Green", "blue", "Yellow"];
  console.log(arr.unshift("RGB"));
  console.log(arr);
}
unshiftMethod();

//==> // filter
let array = [7, 5, 4, 3, 2, 1];
const moreThen3 = array.filter((nums) => {
  return nums > 3;
});
console.log(moreThen3); //

// ==> ForEach ()
const arrayOfNumbers = [1, 21, 13, 43, 55, 76, 57];
function myFunction(n, ind) {
  console.log(`index is ${ind} And The Value Is ${n}`);
}
arrayOfNumbers.forEach(myFunction);

//==>  using 'For Of' ();
//similar  Like A loop ;

let students = [
  { FirstName: "MD", Roll: "1" },
  { FirstName: "Ak", Roll: "2" },
  { FirstName: "Sk", Roll: "3" },
  { FirstName: "SP", Roll: "4" },
];
for (const getdata of students) {
  console.log(getdata.FirstName);
}
// Op :
/* 
MD
Ak
Sk
SP */

// ==>.map Method
let studentsArrObj = [
  { FirstName: "MD", Roll: "1" },
  { FirstName: "Ak", Roll: "2" },
  { FirstName: "Sk", Roll: "3" },
  { FirstName: "SG", Roll: "4" },
];
let getname = studentsArrObj.map(function (usernames) {
  return usernames.FirstName;
});
console.log(getname);

// OP: Is
// [ 'MD', 'Ak', 'Sk', 'SG' ]

/* 
### splice
- First argument we send is the starting index.
- Second argument we send it the counter of delete.
- After that, any arguments we send will be used to insert.
- Usage - <array_variable>.splice(<starting_idx>, <len_to_delete>, <insertion_values>);
- It will start deleting from the starting index and keep on deleting upto length number of items.
- Once done, it will check if there are element to insert, if yes then it will proceed to insert those elements.
- This will change the original array.

*/

// const arr3 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
// console.log(arr3);
// arr3.splice(3, 2, "April-04", "May-05");

// // arr3.splice(3, 7);

// console.log(arr3);

/*
### ==> slice()
- It is basically substring, but for arrays.
- This one you give string and ending indexes.
- It will include the staring index but exlude the ending index.
- If we give negative index. then it will start from the last.
- This will not change the original array.
- This returns a copy (Shallow copy).
 */

const arr3 = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
// console.log(arr3.slice(1, 4)); //It includes the starting index but excludes the ending index.
// // [ 'Feb', 'Mar', 'Apr' ]

// console.log(arr3.slice(-3)); //Negative value will give from the last element.

// console.log(arr3.join(", "));
// //  [ 'Oct', 'Nov', 'Dec' ]

// const removed_element = arr3.shift();
// console.log(removed_element);
// console.log(arr3);

arr3[3.5] = "sfjhdjkfhdjjd";
arr3[3.6] = "sfjhdjkfhdjjd";
arr3[3.7] = "sfjhdjkfhdjjd";
arr3[3.8] = "sfjhdjkfhdjjd";
arr3[3.9] = "sfjhdjkfhdjjd";
arr3[3.1] = "sfjhdjkfhdjjd";
arr3[3.2] = "sfjhdjkfhdjjd";

arr3[1000] = "Something";
arr3.unshift("Geekmonth");
console.log(arr3.length);
console.log(arr3);

// OP:
/*
 [ 'Feb', 'Mar', 'Apr' ]

 [ 'Oct', 'Nov', 'Dec' ]
Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec
Jan
[
  'Feb', 'Mar', 'Apr',
  'May', 'Jun', 'Jul',
  'Aug', 'Sep', 'Oct',
  'Nov', 'Dec'
] */
