// DAY 1 ASSIGNMENT 1

// PROBLEM STATEMENT 4:- ARRAYS
// You're organising a party and want to keep track of the guest list. Create an array called "Guest List" and add the names of at least 5 guests. Then, write a program that checks if a given name is on the guestlist. If the name is found, display "welcome to the party.[name]!"; otherwise, display "Sorry, you're not on the guest list."
let prompt = require('prompt-sync')();




GuestList = ['Ronaldo','Messi', 'Neymar','Son','Pogba','Darshan Raval'];
console.log("The Guest List is: " + GuestList);

let check_name = prompt("Enter name to check  if it's in the guest list : ");


if(GuestList.includes(check_name)){
    console.log("Yes " + check_name + "is in our guest lists");
}else{
    console.log('NO ' + check_name + 'is not in our guest lists');
    }
