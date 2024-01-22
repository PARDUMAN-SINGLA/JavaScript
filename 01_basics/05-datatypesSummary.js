//interview prespective of data types
//data types are broadly of two types:
//primitive and non primitive (this classification is done on the basis of how the data is stored in the memory and how it is accessed from the memory)

//primitive - 7 categories (these are call by value, whenever these are copied from one to other, then a new copy is created rather than giving the reference to the original one)
//strings
//number
//boolean
//null
//undefined
//symbol
//BigInt

//reference type or non primitive (these are call by reference, a reference to the original memory is given whenever these are copied)
//arrays
//objects
//functions

/*
JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.

For example, in JavaScript, you can do the following:

let x = 10; // x is now a number
x = "Hello"; // x is now a string
x = true; // x is now a boolean
On the other hand, statically typed languages require you to declare the variable's type explicitly, and the type checking is done at compile-time, before the code is executed.

Languages like Java, C++, and TypeScript are statically typed, and they require you to specify the variable type explicitly when declaring them:

int x = 10; // x is a variable of type int
String name = "John"; // name is a variable of type String
JavaScript's dynamic typing allows for more flexibility but can lead to potential runtime errors if not handled carefully. Static typing, on the other hand, provides better type safety at the cost of some initial verbosity and strictness.
*/
/*
const value = 398.9844
let score = 84
let loggedIn = false
let outsideTemp = null
let userEmail
console.log(typeof value) //number
console.log(typeof score) //number
console.log(typeof loggedIn) //boolean
console.log(typeof outsideTemp) //object
console.log(typeof userEmail) //undefined

//declaring and use of symbol
const id = Symbol('3837')
const Id = Symbol('3837')
console.log(id == Id) //false, even though both have same values, but being of type symbol, both are treated as unique

//use of BigInt
let bigValue = 4579374937497349n
console.log(typeof bigValue) //bigint
bigValue = 87937748374873487384n
console.log(typeof bigValue)
console.log(bigValue)

//arrays
const superCars = ["Bugatti", "Lamborghini", "Pagani", "Koenigsegg"]

//objects
let myObject = {
    name: "PARDUMAN",
    age: 21,
    degree: "B.Tech",
    specialization: "CSE",
}

//functions
const myFunction = function(){
    console.log("this is a function")
}
console.log(typeof superCars) //object
console.log(typeof myObject) //object
console.log(typeof myFunction) //function
console.log(myFunction)
*/
/*
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
*/