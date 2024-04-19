// DAY 1 ASSIGNMENT 1

// PROBLEM STATEMENT 1:- CONDITIONAL STATEMENTS
/*You run a movie theater and you want to offer discountes based on a person's age. Write a JS program that asks the user for their age and then dislpays a message:
--If the age is less than 18,display "You get 20% discount!"
--If the age is between 18 and 65(inclusive),display "Normal ticket price applies"
--If the age is 65 or older, dusplay "you get a 30% senior discount!"
*/
const prompt = require('prompt-sync')(); 

// Inut from the user
let age = prompt("Enter your age :");

// conditions
if(age <18){
    console.log("you get 20% discount");
}else if(age >= 18 && age <= 65){
    console.log("Normal Ticket price applies");
}else{
    console.log("you get a 30% senior discount!");
}

