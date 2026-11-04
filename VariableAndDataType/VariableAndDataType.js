// var age = 27;

// let name = "Kunal Thakur";

// const mobileNo = 8278851806

// console.log(age,name,mobileNo)

// how to add name
// var my_firstName = "Kunal"
// console.log(my_firstName)

// var _myLastName = "Thakur"
// console.log(_myLastName)

// var 123myAge = 27;
// console.log(123myAge)  //Invalid

// var $cityName = "New York";
// console.log($cityName)

// var my@Email = "kunalthakur@gmail.com"
// console.log(my@Email)  //Invalid


// Data type

// primitive data type
// String: Text written inside quotes.
let name = "Kunal";
console.log(name)
console.log("name",typeof(name))

// Number: Numeric values, including whole numbers and decimals.
let age = 25;
let price = 99.5;
console.log(age)
console.log(price)
console.log("age",typeof(age))
console.log("price",typeof(price))
// Boolean: A value that is either true or false.
let isWorking = true;

console.log(isWorking)
console.log("isWorking",typeof(isWorking))

// Undefined: A variable that has been declared but has not been assigned a value.
let city;
console.log(city)
console.log("city",typeof(city))

// Null: An intentional absence of a value.
let selectedUser = null;
console.log(selectedUser)
console.log("selectedUser",typeof(selectedUser))

// BigInt: Used to store very large whole numbers. The n at the end makes it a BigInt.
let bigNumber = 12345678901234567890n;
console.log(bigNumber)
console.log("bigNumber",typeof(bigNumber))

// Symbol: A unique value often used as a special identifier.
let id = Symbol("id");
console.log(id)
console.log("id",typeof(id))

// Object: Stores related data as key-value pairs.
let user = { name: "Kunal", age: 25 };





// Array: Stores multiple values in an ordered list. Each value has an index, starting from 0.
let colors = ["red", "blue", "green"];





// Function: A reusable block of code that performs a task. It can take inputs and return a result.
function add(a, b) {
  return a + b;
}