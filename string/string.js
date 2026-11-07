// String :- A String is a JavaScript data type used to store text, such as names, addresses, sentences, and words.

// let str = "Kunal Thakur"

// console.log(str.length)

// console.log(str[2])

// console.log(str.toUpperCase())


// Template Literals in JS
// A way to have embedded expressions in strings

// To create strings by doing substitution of placeholders
//    let str = `this is a template literal`

//    console.log(str)


// string method

// let str = "Kunal Thakur"

// console.log(str)

// let str = "Kunal Thakur"
// let newStr= str.toUpperCase()
// console.log(newStr)

// let str = "Kunal Thakur"
// let newStr= str.toLowerCase()
// console.log(newStr)

// let str = "  Kunal Thakur  "
// let newStr= str.trim()
// console.log(newStr)

// let str = "Kunal Thakur"
// let newStr= str.slice(1,4)
// console.log(newStr)

// let str1 = "Kunal"
// let str2 = "Thakur"
// let newStr= str1.concat(str2)
// console.log(newStr)

// let str = "Kunal Thakur"
// let newStr= str.replace("Thakur", "Singh")
// console.log(newStr)

// let str = "Kunal Thakur"
// let newStr= str.charAt(1)
// console.log(newStr)

// practice

// Prompt the user to enter their full name. Generate a username for them based on the input. Start username with @, followed by their full name and ending with the fullname length.


let firstName = "Kunal"
let secondName = "Thakur"
let concateName = firstName.concat(secondName).toLowerCase()
let lengthOfName = concateName.length
console.log(`@${concateName}${lengthOfName}`)
