// Filter Method in Array
// filter Method Works On Boolean Condition, Like it will filter if the condition is true otherwise false or nothing
const Allnumbers = [1, 4, 3, 2, 10, 9, 11, 6, 12];
console.log(Allnumbers);
const evenNo = function (num) {
  return num % 2 === 0;
};
const EvenFilterNums = Allnumbers.filter(evenNo);
console.log(EvenFilterNums + " Are Even No.s ");

const odd = function (n) {
  //return n%2===1;
  return n % 2 !== 0;
};
const oddFilterNums = Allnumbers.filter(odd);
console.log(oddFilterNums + " Are Odd No.s");

// filter
let array = [7, 5, 4, 3, 2, 1];
const moreThen = array.filter((nums) => {
  return nums > 3;
});
console.log(moreThen); //

// practice

const FindClubs = [
  { club: "Bar", country: "spain" },
  { club: "Bar1", country: "china" },
  { club: "Bar", country: "spain" }, 
  { club: "Bar2", country: "china" },
  { club: "Bar", country: "spain" },
  { club: "Bar7", country: "spain" },
  { club: "Bar3", country: "china" },
];
let stay = FindClubs.filter((selecting)  => {
    return selecting.country=="china"
});
console.log(stay);


//program to check if a number is prime or not

// take input from the user
const number = parseInt(prompt("Enter a positive number: "));
let isPrime = true;

// check if number is equal to 1
if (number === 1) {
    console.log("1 is neither prime nor composite number.");
}

// check if number is greater than 1
else if (number > 1) {

    // looping through 2 to number-1
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${number} is a prime number`);
    } else {
        console.log(`${number} is a not prime number`);
    }
}

// check if number is less than 1
else {
    console.log("The number is not a prime number.");
} 
