let prompt = require('prompt-sync')();

let num = parseFloat(prompt("Enter the number :"));
let num2 = parseFloat(prompt("ENter the 2nd number to add :"));

let sum = num+num2;
console.log('The sum of 2 numbers are : ',sum);

console.log("hellow");

// anything that has a meaning in js is a keyword
// variables and constants

var car = 'Toyota'; // variable declaration. This value can be changed               
let bike = 'Harley Davidson';  // let is block scoped, it can be used inside if statement or loop etc. It's not available outside of the block where it
const plane = 'Boeing';  // constant declaration, cannot be reassigned

car = 'Honda';
console.log(car);

// HOISTING IN JAVASCRIPT
//hoisting:- var and function hoisted which means there declarating is moved on the top of the code
// Hoisting  only works with variable declarations not values assignment
let x;
if (true) {
    let x = 10;

} else {
    let x = 20;
}
console.log(x); // Output: undefined

// Block scope vs Function Scope

console.log(a);
var a = 12;


// primitve and reference values
var a = 12; //real values are copyied only
var b = [12,3,5,6,87]; //here only reference value is copied

//CONDITONALS - if else else-if

if(a  > 10){
    console.log( "greater than 10" );
}else{
    console.log("less than or equal to 10");
}

// LOOPS - repeations or iterationgs
// TPYES OF LOOPS:- for, while,do-while,foreach

// for(start;end;change){
    
// }

for(let i =0;i<10;i++){
    console.log(i);
}

while(a<20){
    a++;
}

// Functions - Reuse the code again

function sayhi(){
    for(let i=0;i<4;i++){
        console.log("Hola amigo");

    }
}

sayhi();

// ARRAYS - collection of same items
// let arr = new arr();
let arr = [10,20,10,20,20303,4,404,0];
console.log(arr);
console.log(arr[0]);
// Push Pop Shift Unshift

arr.push(2011);
arr.pop();
arr.unshift(-56); //adds  at value at first position
arr.shift(9876); //removes and returns the first element in an array
arr.splice(2,1); //removes 2 index value


// OBJECTS
// objects in javascript  are like hashmaps or dictionaries
let person={name:"John",age:25};
console.log(person.name);

let women = {
    name:"ronita",
    age : 22,
    proffesion: "OF model\nonline whore"
};
console.log(women["proffesion"]);

let user = {
    name:"mark zukerberg",
    role:"Founder & CEO",
    company:"Facebook"
}

console.log(user["company"]);



function ShippingCost() {
    let totalPrice = 19;

    if(totalPrice<=10){
        ShippingCost = 5
    }else if(totalPrice<=20){
        ShippingCost = 3
    }else{
        ShippingCost = 0
    }
    console.log('Shipping cost is ',ShippingCost);

}

ShippingCost();

