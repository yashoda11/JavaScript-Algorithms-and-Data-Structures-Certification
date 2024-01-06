// 71 - Introducing Else Statements

// When a condition for an if statement is true, the block of code following it is executed. What about when that condition is false? Normally nothing would happen. With an else statement, an alternate block of code can be executed.

// if (num > 10) {
//   return "Bigger than 10";

// } else {
//   return "10 or Less";
// }

// QUESTION :

// Combine the if statements into a single if/else statement.

// SOLUTION :

function testElse(val) {
    let result = "";
    // Only change code below this line
  
    if (val > 5) {
      result = "Bigger than 5";
    }
  
    else {
      result = "either 5 or Smaller than 5";
    }
  
    // Only change code above this line
    return result;
  }
  
var val = 4;
var result = testElse(val);
console.log(`
The given number ${val} is ${result}
`);