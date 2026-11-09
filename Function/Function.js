// function a block of code that performs a specific task can be invoked whenever needed

// function myFunction(){
//     console.log("Kunal is doing well")
// }

// myFunction()

// write a function that return sum of two value

// function sum(a,b){
//     return a+b
// }
// console.log(sum(10,20))


// arrow function

// an arrow function is a shorter way to write a function in js. It was interoduced in 

// const multiPly = (a,b)=>{
//     return a*b
// }
// console.log(multiPly(10,20))

// Practice

// Create a function using the “function” keyword that takes a String as an argument & returns the number of vowels in the string

// function numberOfVowels(str){
// let count = 0
// let words = str.toLowerCase()
// for(let i=0;i<words.length;i++){
// let word = words[i]
// if(word==="a"||word==="e"||word==="i"||word==="o"||word==="u"){
//     count++
// }

// }
// return count
// }
// console.log(numberOfVowels("hello"))


// Create an arrow function and using the “function” keyword that takes a String as an argument & returns the number of vowels in the string

// const numberOfVowels = (str)=>{
// let words = str.toLowerCase()
// let count = 0
// for(let word of words){
//     if(word==="a"||word==="e"||word==="i"||word==="o"||word==="u"){
//         count++
//     }
// }
// return count
// }
// console.log(numberOfVowels("hello"))


// for each
// let arr = [1,2,3,4,5,6,7]

// arr.forEach((val)=>{
//     console.log(val)
// })

// prectice

// For a given array of numbers, print the square of each value using the forEach loop.


// let arr = [1,2,3,4,5,6,7]

// arr.forEach((val)=>{
//     console.log(val*val)
// })
//  map ():- map() is an array method used to create a new array by performing an operation on every element of an existing array.

// 1
// let arr = [1,2,3,4,5,6,7]

// let result = arr.map((val)=>{
//     return val*2
// })
// console.log(result)


//  2 

// let numbers = [1, 2, 3, 4];

// let result = numbers.map(num => num * 5);

// console.log(result);

// 3 

// let fruits = ["Apple", "Banana", "Mango"];

// let result = fruits.map((fruit, index) => {
//     return `${index}: ${fruit}`;
// });

// console.log(result);


// What is filter() in JavaScript?
// filter() is an array method used to filter elements from an existing array based on a condition and return a new array.

// In simple words, filter() checks every element and keeps only those elements that satisfy the given condition.

// let numbers = [10, 15, 20, 25, 30, 35];

// let result = numbers.filter((num) => {
//     return num % 2 === 0;
// });

// console.log(result);


// 2.

// let numbers = [10, 20, 30, 40, 50];

// let result = numbers.filter(num => num > 25);

// console.log(result);


// 3.

// let names = ["Kunal", "Aman", "Rahul", "Raj"];

// let result = names.filter(name => name.length > 4);

// console.log(result);

// 4 .

// let students = [
//     { name: "Kunal", age: 27 },
//     { name: "Rahul", age: 25 },
//     { name: "Aman", age: 17 }
// ];

// let result = students.filter(student => student.age >= 18);

// console.log(result);


// What is reduce() in JavaScript?
// reduce() is an array method used to reduce all array elements into a single value.

// In simple words, reduce() takes array elements one by one and combines them to produce one final result.
// 1

// let numbers = [10, 20, 30, 40];

// let result = numbers.reduce((total, num) => {
//     return total + num;
// }, 0);

// console.log(result);


// 2

// let products = [
//     { name: "Laptop", price: 50000 },
//     { name: "Mobile", price: 20000 },
//     { name: "Mouse", price: 1000 }
// ];

// let total = products.reduce((sum, product) => {
//     return sum + product.price;
// }, 0);

// console.log(total);



// prectice 

// We are given array of marks of students. Filter our of the marks of students that scored 90+

// let marks = [90,98,89,78,99,91]

// let result = marks.filter((val)=>{
//     return val>=90
// })
// console.log(result)

// Calculate the total salary.

let employees = [
    { name: "Kunal", salary: 30000 },
    { name: "Rahul", salary: 40000 },
    { name: "Aman", salary: 50000 }
];

let result = employees.reduce((sum,val)=>{
return sum+val.salary
},0)

console.log(result)
