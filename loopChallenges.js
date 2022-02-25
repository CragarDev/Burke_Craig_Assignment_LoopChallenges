console.log();
// -- Craig Burke - Loop Challenges --
//

// Loop Challenges

// Objectives

// Get comfortable with loops: for and while.
// Get comfortable with conditionals: if/else.
// Please work on the following challenges and upload your work when done.

console.log();
//

//todo Print odds 1-20
// Using a loop write code that will console.log all of the odd values from 1 up to 20.

function printOdds() {
  for (var i = 1; i <= 20; i += 2) {
    console.log(i);
  }
  return;
}
// call the function
console.log("1. Print odd 1-20");
printOdds();
console.log();
//

//todo Decreasing Multiples of 3
// Using a loop write code that will console.log all of the values
// that are evenly divisible by 3 from 100 down to 0.

function decreasingMultiplesOfThree() {
  for (var i = 100; i >= 0; i--) {
    if (i % 3 == 0) {
      console.log(i);
    }
  }
  return;
}
// call the function
console.log("2. Decreasing Multiples of 3");
decreasingMultiplesOfThree();
console.log();
//

//todo Print the sequence
// Using a loop write code that will console.log the values in this sequence 4, 2.5, 1, -0.5, -2, -3.5.

var arr = [4, 2.5, 1, -0.5, -2, -3.5];

function printTheSequence(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
  return;
}
// call the function
console.log("3. Print the sequence");
printTheSequence(arr);
console.log();
//

//todo Sigma
// Write code that will add all of the values from 1-100 onto some variable sum and at the end console.log
// the result 1 + 2 + 3 + ... + 98 + 99 + 100. We should get back 5050 at the end.

function sigma() {
  var sum = 0;
  for (var i = 1; i <= 100; i++) {
    sum += i;
  }
  console.log(sum);
  return arr.length;
}
// call the function
console.log("4. Sigma");
sigma();
console.log();
//

//todo Factorial
// Write code that will multiply all of the values from 1-12 onto some variable product and at the end console.log
// the result 1 * 2 * 3 * ... * 10 * 11 * 12. We should get back 479001600 at the end.

function factorial() {
  var mult = 1;
  for (var i = 1; i <= 12; i++) {
    mult *= i;
  }
  console.log(mult);
  return arr.length;
}
// call the function
console.log("5. Factorial");
factorial();
console.log();
//

//
console.log();
