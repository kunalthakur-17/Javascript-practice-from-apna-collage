// Arrays in JS Collections of items

// let heroes = [ "ironman","hulk","thor","“batman”" ];
// let marks = [ 96, 75, 48, 83, 66 ];
// let info = [ "rahul",86,"Delhi" ];

// Array Indices

// let marks = [ 96, 75, 48, 83, 66 ];
// console.log(marks[0])
// console.log(marks[2])
// console.log(marks[4])
// console.log(marks[8])

// let marks = [ 96, 75, 48, 83, 66 ];
// marks[4]= 100
// console.log(marks)

// Looping over an Array Print all elements of an array using for loop

// let marks = [ 96, 75, 48, 83, 66 ];

// for(let i = 0; i<marks.length; i++){
//     console.log(marks[i])
// }

// Looping over an Array Print all elements of an array using for while loop

// let marks = [ 96, 75, 48, 83, 66 ];
// let i=0
// while(i<marks.length){
// console.log(marks[i])
// i++
// }

// Looping over an Array Print all elements of an array using for do while loop

// let marks = [ 96, 75, 48, 83, 66 ];
// let i=0
// do{
//     console.log(marks[i])
// i++
// }while(i<marks.length)

// Looping over an Array Print all elements of an array using for of loop

// let marks = [ 96, 75, 48, 83, 66 ];

// for(let mark of marks){
//     console.log(mark)
// }



// Let‘s Practice 1
// For a given array with marks of students -> [85, 97, 44, 37, 76, 60] Find the average marks of the entire class.

// let student = [85, 97, 44, 37, 76, 60]
// let total = 0

// for(let i = 0; i<student.length;i++){
//     total+=student[i]
// }
// let averageMarks = total/student.length
// console.log(averageMarks)

// Practice 2

// For a given array with prices of 5 items -> [250, 645, 300, 900, 50] All items have an offer of 10% OFF on them. Change the array to store final price after applying offer.

let itemsPrice =  [250, 645, 300, 900, 50]
let newPrice = []
let offer = 10
for(let i = 0; i<itemsPrice.length; i++){
let item = itemsPrice[i]
let newOfferPrice = item*offer/100
let finalPrice = item-newOfferPrice
newPrice.push(finalPrice)

}

console.log(newPrice)