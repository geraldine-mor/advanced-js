/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
// function addTwoNumbers(a, b) {
//     return a + b;
// }
// let sum = addTwoNumbers(3, 5);
// console.log(sum);

// Arrow Function With Parameters
const addTwoNumbers = (a, b) => {
    return a + b;
}
let sum = addTwoNumbers(3, 5);
console.log(sum);
// Single Line Arrow Function With Parameters
const addTwoNumbers2 = (a, b) => a + b; // const addTwoNumbers2 = (a, b) => (a + b); also valid

let sum2 = addTwoNumbers2(6, 5);
console.log(sum2);

// Implicit Returns
const saySomething = message => console.log(message);
saySomething("Hello World!");

const sayHello = () => console.log("Hello");
sayHello();

// Returning Multiple Lines
const returnMultiLines = () => (
    `<p>
    This is a multi line String
    </p>`
)
console.log(returnMultiLines());