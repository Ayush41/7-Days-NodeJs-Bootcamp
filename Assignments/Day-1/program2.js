// DAY 1 ASSIGNMENT 1

// PROBLEM STATEMENT 2:- VARIABLES(VAR AND CONST)
// Create a JS program to calculate the area of a rectangle. Ask the user for the length and wirdth of the rectangle and store them in variables.
// calculate and display the area using the formula: `area = length * width`

const prompt = require('prompt-sync')();

console.log("Enter values to find the area of rectangle");

let length = parseFloat(prompt("Enter the  Length of Rectangle : "));
let width = parseFloat(prompt("Enter teh width of rectangle :"));

let area = length*width;

console.log("The area of rectangle is :",area);
