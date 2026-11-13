// callback  call back are function that pass another function as argument and execute later. It is commaonly used in asynchronous operation event handling and arry method

// function sum(a,b){
// console.log(a+b)
// }

// function calculator(a,b,callback){
//     callback(a,b)
// }

// calculator(10,20,sum)

// function outer(){
//     let count = 5
//      function inner(){
//         count++
//         return count
//     } 
//     return inner;
// }

// let counter = outer()
// console.log(counter())
// console.log(counter())
// console.log(counter())


// Callback Hell happens when multiple callbacks are nested inside each other, making the code difficult to read, understand, and maintain.


// function getData(getDataId,getNextData){
//     setTimeout(()=>{
//         console.log(getDataId)
//         getNextData()
//     },2000)
// }

// getData(1,()=>{
// getData(2,()=>{
//     getData(3,()=>{
//         getData(4)
//     })
// })
// })


// A Promise is an object that handles asynchronous operations. It has three states: Pending, Fulfilled, and Rejected. We use then() to handle success and catch() to handle errors.


// function getData(getDataId){
//     return new Promise((resolve,reject)=>{
//       setTimeout(()=>{
//         console.log(getDataId)
//         resolve("success")
//       },2000)

//     })
// }



// getData(1).then((res)=>{
//     console.log(res)
//     return getData(2)
// }).then((res)=>{
//      console.log(res)
//     return getData(3)
// }).then((res)=>{
//      console.log(res)
// })


// Async/Await is a way to handle asynchronous operations. The async keyword makes a function return a Promise, and await waits for the Promise to settle. It makes code easier to read and maintain.

function getData(getDataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(getDataId)
            resolve("status:200")
        }, 2000)
    })
}

async function callData(){
    console.log("Geting data 1....")
    await getData(1234)
    console.log("Geting data 2....")
    await getData(123456)
    console.log("Geting data 3....")
    await getData(12345678)
    console.log("Success")

}

callData()