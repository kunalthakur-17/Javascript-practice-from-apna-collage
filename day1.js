// Variables & Data Types

// Variables var let and const

// Data Types data type have two type primitive and non primitive
// primitive data type -> string, number, boolean, undifined, null, bigInt, symbol 
// non primitive data -> Array, object and funtction 
// primitive data type
let str = "Kunal Thakur " // string
console.log(str)
console.log(typeof(str))
let num = 123450929392 // number
console.log(num)
console.log(typeof(num))
let bool = true // boolean
console.log(bool)
console.log(typeof(bool))
let undif; // undifined
console.log(undif)
console.log(typeof(undif))
let nul = null // null
console.log(nul)
console.log(typeof(nul))
let bigints = 123456789123456789n
console.log(bigints)
console.log(typeof(bigints))
// symbol 
let id1 = Symbol("id");
let id2 = Symbol("id");
console.log(id1 === id2);
console.log(typeof id1);


// non primitive data
// object 
let obj = {
    name: "Kunal Thakur"
}
// function 
function sum(a,b){
    let result = a+b
    return result
}
// Array

let names = ["Kunal", "Arti", "Vishal", "Rutbi", 11234,true,null]
