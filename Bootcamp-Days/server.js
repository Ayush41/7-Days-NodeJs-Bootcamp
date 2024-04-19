// Using existing modules of nodejs
// const fs = require('fs'); //used to create files and file handling
// const os = require('os'); 


// let user = os.userInfo();
// console.log(user); 
// console.log(user.username);

// fs.appendFile('demo.txt','Hi' + user.username + '!\n',()=>{
//     console.log('file is created');
// });

var _ = require('lodash'); // '_'  is a shorthand for loadash, which is a part of lodash library

// const notes = require('./notes.js'); //using local  module 

// console.log('server file is available');                 

// let age = notes.age;

// let results = notes.addNumber(age+22,10);
// console.log(age);

// console.log('result is now ' + results);


let data= ['person','person',1,2,1,2,'name','age','2'];

let filter = _.uniq(data); //filters  out the unique elements from an array

console.log(filter);

console.log(_.isString('ayush raj')); //true
console.log(_.isString(20)); //false