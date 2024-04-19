console.log('server file is running');

function add(a,b){
    return a+b;
}

let add = function(a,b){
    return a+b;
}

let add = (a,b)=>{return a+b} //arrow function 箭头函数

let sub = (a,b) =>{
    return a*b;
}

var result = add(7,3);
console.log(result);

(function(a,b){
    console.log("ayush");
})();

// CallBack Function :- 

function callback(){
    console.log('I am calling a function :)');
}

// let sub = function(a,b,callback) {
//     let result = a - b;
//     console.log('sub is :',result);
// }

// sub(10,5,callback);  // Output

let add = (a,b,callback)=>{
    let result = a+b;
    console.log('result is :',result); //main functon work complete
    callback();
}

add(3,4,callback);