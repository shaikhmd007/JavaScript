//Q1.  //Implementation	"Swap two numbers without using third variable. And Convert String  to number
function swaping() {
  let n1 = 10;
  let n2 = 20;
  document.write("Before Swap N1 is = " + n1 + " And N2 is =" + n2 + "<br>");
  n1 = n1 + n2;
  n2 = n1 - n2;
  n1 = n1 - n2;
  document.write("After Swap N1 is = " + n1 + " And N2 = " + n2 + "<br><br>");
}

//Q2.Given number is Even Or odd.

function CheckEvenOrOdd() {
  let n = prompt("Enter A No. To Check Its Even  Or Odd !!");

  if (n % 2 == 0) {
    document.write("Its Is A Even No.");
  } else {
    document.write("its Odd No. !!<br><br>");
  }
}

//Q3.Given number is Prime Or Not;
function PrimeOrNot() {
  let number = prompt("Enter A No. To Check Its Prime Or Not !.");
  let temp = true;
  if (number <= 1) {
    document.write("Enter No. More Than 1");
  } else {
    for (let i = 2; i < number; i++) {
      if (number % i == 0) {
        temp = false;
      }
    }

    if (temp) {
      document.write("It Is Prime No.");
    } else {
      document.write("Not A Prime No.");
    }
  }
}
/* PrimeOrNot();
CheckEvenOrOdd();
 */

//write a code for finding prime number from 1 to 100

function Prime_No_B_W_100() {
  for (var counter = 0; counter <= 100; counter++) {
    var CheckPrime = false;
    for (var i = 2; i <= counter; i++) {
      if (counter % i === 0 && i !== counter) {
        CheckPrime = true;
      }
    }
    if (CheckPrime === false) {
      console.log(counter);
    }
  }
}
Prime_No_B_W_100();

// sum all digits till you get answer in single digit of 2^N

// Javascript program to find sum of
// digits of a number until
// sum becomes single digit.
	let n = 1234;
	//Function to get sum of digits
	function getSum(n) {
		let sum = 0;
		while (n > 0 || sum > 9) {
			if(n == 0) {
				n = sum;
				sum = 0;
			}
			sum = sum + n % 10;
			n = Math.floor(n / 10);
		}
		return sum;
	}
//function call
	document.write(getSum(n));
	
