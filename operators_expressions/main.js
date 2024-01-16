 let a = 10;
 let b = 5;

 // Arithmetic Operators

 let sum = a + b;
 console.log(sum); // 15

 let sub = a - b;
 console.log(sub); // 5

 let mul = a * b;
 console.log(mul); // 50

 let div = a / b;
 console.log(div); // 2

 let mod = a % b;
 console.log(mod); // 0

 // Comparison Operator

 console.log(a==b);

 console.log(a===b);

 console.log(a!=b);

 console.log(a!==b);

 console.log(a < b);

 console.log(a > b);

 console.log(a <= b);

 console.log(a >= b);

 // Logical Operator

 let c = 4;
 let d = 2;

 // logical and 

if (a > b && c < d) {
    console.log('true')
} else {
    console.log('false')
}

// logical or
if (a > b || c > d) {
    console.log('true')
} else {
    console.log('false')
}

// logical not

let e = true;

console.log(e);

console.log(!e);

// assignment operator

let f = 20;
console.log(f);

f += 10; // f = f + 10;
console.log(f);

f -= 5; // f = f - 5;
console.log(f);

f *= 2; // f = f * 2;
console.log(f);

f /= 5; // f = f / 5;
console.log(f);

// Unary Operator 
let num = 20;
console.log(-num);

// Ternary Operator

if (num < 50) {
    console.log('less than 50');
} else {
    console.log('greater than 50');
}

console.log((num < 50) ? 'less than 50' : 'greater than 50');