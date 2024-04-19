// console.log('Server is started with nodemon :)');
// convert JSON STRING to JSON OBJECT

const jsonstring = '{"name":"Ayush Raj","age":19,"city":"Doon"}';
const jsonobject = JSON.parse(jsonstring); //converts  string into object

console.log(jsonobject);
console.log(jsonobject.name);

// convert JSON Object to String

const obj = {
    name: "John",
    age: 31,
    city:"New York"
};

const json = JSON.stringify(obj); // converts an object into a string
console.log(typeof json);
console.log(json);