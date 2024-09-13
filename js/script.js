// JavaScript Variables
// Variables are Containers for Storing Data
// JavaScript Variables can be declared in 4 ways:

// variables
// vary + able

// Automatically
// Using var    keyword old version
// Using let    keyword es6 2015
// Using const  keyword es6 2015

// variablekeyword storingname = value;  /* 5 way variables*/

// var functional scope
// and var global scope 

//  var a = 10;  
//  var a = 20; update
//  console.log(a);
//  ans = 20

// let block scope

// let a = 60;
// a = 50; update
// console.log(a);
// ans = 50

// const pi = 3.14;
// pi = 4566; Not assigned
// console.log(pi);

// javascript data types 2

// 1. primitive
// 2. non-primitive

/*JavaScript has 8 Datatypes
1. primitive Datatypes
String
Number
Bigint
Boolean
Undefined
Null
Symbol
Object*/

// string --> "", '', ``;

// let country = "bangladesh"
// console.log(' it is my ' + country + ' i love ' + country);
// let country = "bangladesh"
// console.log(`it is my  ${country} i love ${country}`); interpoleson

// Boolean -> true, false

// Undefined
// let a;
// console.log(a)

// let a = null
// console.log(a);
// ans = null

// 2. non-primitive

// Array --> []

// let random = [120, 10, 50, "jahid", "hasan"]
// let result = random.push('10');
// console.log(random);

// let fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// let result = fruits.slice(2);
// console.log(fruits);


// let fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// let result = fruits[2];
// console.log(fruits);


// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// let result = fruits.shift();
// console.log(fruits);


// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// let result = fruits.unshift("Apple");
// console.log(fruits);


// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// let result = fruits.delete(0);
// console.log(fruits);





// Object --> {}

// let studentInfo = {
//     name: 'jahid',
//     age: 24,
//     id: '20',
//     address: {
//         upazila: "Bhuapur",
//         zila: "Tangail"
//     }
// }
// console.log(studentInfo.address.zila);


// jAVASCRIPT OPERATORS
// 1. arithematic (+,-,*,/,%,**)
// 2. Assignment (=, -=, +=, *=,)
// 3. Logical ( && and, || or, ! not,)
// 4. comparsion (>,<) greater than - less than
 
// let a = 10;
// let b = 10;
// console.log(a == b);
// ans = true

// let a = 10;
// let b = 20;
// console.log(a == b);
// ans = false

// let a = 30;
// let b = 20;
// console.log(a == b);
// ans = false

// let a = 30;
// let b = 30;
// console.log(a === b);
// ans = true 

// let a = 40;
// let b = "40";
// console.log(a === b);
// ans = false

// let a = 30;
// let b = "40";
// console.log(a === b);
// ans = false

// let a = 30;
// let b = "20";
// console.log(a === b);
// ans = false


// comparsion

// let a = 50;
// let b = 40;

// if(a > b ){
//     console.log("a is big");
    
// } else if ( a == b){
//     console.log("a is equal b");
    
// }else{
//     console.log("b is big");
    
// }


let a = 80;
let b = 25;

if (a > b){
    console.log("exam tumi pass korso");
    
}else if(a == b){
    console.log("exam tumi pass korso kintu tumi c paiso");
    
}else{
    console.log("tumi f fail korso");
    
}


