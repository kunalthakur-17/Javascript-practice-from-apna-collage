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