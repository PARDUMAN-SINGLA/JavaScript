let marks = 57
// console.log(typeof(marks)) // number
// console.log(typeof marks) //number

// converts number to string
let stringMarks = String(marks)
// console.log(typeof stringMarks)

let marks1 = "83"
let marks2 = "39ds"

//converts string to number
let numberMarks1 = Number(marks1) 
let numberMarks2 = Number(marks2)
/* when a string like "39eui" is converted to a number then it will get converted to a number
but when we look at the actual converted value then it comes out to be NaN
 */

// console.log(typeof numberMarks1) // number
// console.log(numberMarks1) // 83
// console.log(typeof numberMarks2) // number
// console.log(numberMarks2) // NaN

let name = "SINGLA"
let numberName = Number(name) //similarly, it will convert name to number, but the actual value is NaN
// console.log(typeof numberName) // number
// console.log(numberName) // NaN

let var1 = null
let var2 = undefined
let var3 = false
let var4 = ""
let numberVar1 = Number(var1)
let numberVar2 = Number(var2)
let numberVar3 = Number(var3)
let numberVar4 = Number(var4)
// console.log(numberVar1) // 0 => null
// console.log(numberVar2) // NaN => undefined
// console.log(numberVar3) // 0 => false
// console.log(numberVar4) // 0 => empty string

// "88" => 88 (number)
// "93la" => NaN (not a number, but in actual its type is number)
// "singla" => NaN

let log1 = 1
let log2 = ""
let log3 = "PARDUMAN"
let log4 = 987
let boolLog1 = Boolean(log1)
let boolLog2 = Boolean(log2)
let boolLog3 = Boolean(log3)
let boolLog4 = Boolean(log4)
// console.log(boolLog1) // ture => 1
// console.log(boolLog2) // false => empty string
// console.log(boolLog3) // true => string
// console.log(boolLog4) // true => any number other than 0 or 1

// 1 => true
// 0 => false
// "" => false
// "any string" => true
// any number other than 0 or 1 => true

 /***********Operations***********/

 let value = 38
 let negValue = -value
// console.log(negValue)
// console.log(3+3) //addition
// console.log(4-1) //subtraction
 // console.log(3*3) //multiplication
// console.log(2**5) //power
// console.log(5/2) //division
// console.log(9%2) //modulus(remainder)

let str1 = "PARDUMAN "
let str2 = "SINGLA"
let str3 = str1 + str2
// console.log(str3)
// console.log(str1 + str2)
//output is PARDUMAN SINGLA for both

/*the following way of writing code is not appreciated, so, avoid using it, it may be good for exam practice purpose, or for solving tricky question, but in real world scenario these type of codes are not so readable, thus, are not appreciated

console.log("1" + 4) //14
console.log(4 + "2") // 42
console.log("4" + 9 + 2) // 492
//the first 4 is a string, thus the next numbers are treated as strings
console.log(4 + "9" + 2 + 2) // 4922
//the first 4 is treated as a number, then 9 is a string, after that all the numbers are treated as string
console.log(4 + 3 + "2") // 72, 
//the first 4 and 3 are treated as numbers and thus added, after that 2 is a string, hence, output 72
console.log(3 + 8 - 2 * 3 / 2 % 8)

console.log(+true) // 1
console.log(+"") // 0

let num1, num2, num3
num1 = num2 = num3 = 5 + 3
//this type of code must be avoided as it is not readable, it is not a good practice for writing a code
*/

let counter = 5000
counter++ //postfix
console.log(counter)
++counter //prefix
console.log(counter)

//study the documentation from the website of ECMA Script, or the MDN