const accountId = 64 //constant variable
let userName = "singlaparduman"
var password = "asdf"
/*let and var both are used for variable declaration
but the use of 'var' is discouraged
this is due to the problem of block scope and functional scope
example:
var name = "singla"
if(//some condition){
    var name = "parduman"
    console.log(name)
}
console.log(name)

now the name declared in the scope of if will change the value of name declared outside its scope

thus, use of 'let' is encouraged 
*/
accountEmail = "parduman@singla.com" //another possibility of declaring a variable
//but this method of declaring is generally discouraged

let accountState; //undefined



//accountId = 343 //must not be done, as it is a constant variable, it can not be modified once declared

console.log(accountId);
console.table([accountId, userName, password, accountEmail, accountState])
//console.table([ , , ]) prints the data of multiple variables in a tabulated format

var testVariable = 1
if(testVariable == 1){
    var testVariable = 2
    console.log(testVariable)
}
console.log(testVariable)
//both console.log() will print the value 2 due to the issue of scope with 'var'