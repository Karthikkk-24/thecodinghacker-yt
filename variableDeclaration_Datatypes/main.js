// Variable Declaration and Datatypes

// var 
var a = 10;

console.log(a);

a = 20;

console.log(a);


// let 

let b = 10;

console.log(b);

b = 20;

console.log(b);


// const

const c = 50;

console.log(c);


function printValue(value) {
    let name = 'demo';
    console.log(name);
    console.log(value);
}

printValue(b);

// hoisting in javascript

// console.log(alpha);

let alpha = 'demo';

// declaring something again...

var color = 'black';

console.log(color);

var color = 'red';

console.log(color);

var colors = {
    primary: 'red',
    secondary: 'blue'
};

console.log(colors);

let numbers = [1, 2, 3, 4, 5];

console.log(numbers);