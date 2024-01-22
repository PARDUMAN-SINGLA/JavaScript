/*normal comparison operators
console.log(5<1) //false
console.log(5>1) //true
console.log(4==2) //false
console.log(4!=94) //true
console.log(5<=3) //false
console.log(5>=3) //true

console.log("3">2) //true
console.log("043"<12) //false
console.log(3=="03") //true
console.log(3!="3") //false
//here javascript converted the string to number then compared it and returned the result
//however we must keep in mind that sometimes this kind of camparisons donot give predictable results, thus, we must avoid such practices and must convert the strings to number before comparing
//unpredictable results example
console.log(null < 0) //false
console.log(null > 0) //false
console.log(null <= 0) //true
console.log(null >= 0) //true
console.log(null == 0) //false
console.log(null != 0) //true
//equality check(==) and comparison operators(<,>,<=,>=) works in different manner
//that's why null >= 0 or null<=0 or null!= 0 is true and null == 0 is false
//comparisons convert null to a number, treating it as 0

//similarly for undefined
console.log(undefined < 0) //false
console.log(undefined > 0) //false
console.log(undefined <= 0) //false
console.log(undefined >= 0) //false
console.log(undefined == 0) //false
console.log(undefined != 0) //true
//for every comparison and equality check it gives false, while for != it gives the answer as true, thus, making the comparison results unpredictable

//strict check ===
//it along with value checks the datatype of the values being compared
console.log("3" == 3) //it will give true as "3" is converted to number and then compared with 3
console.log("3" === 3) //it will give false as it won't convert "3" to a number, instead it will also compare the data types of the values being compared
console.log("73" === "73") //true, as both are in string, and have same value of 73
console.log(3===3) //true
console.log("singla" == "singla") //true
console.log("singla" === "singla") //true
console.log("parduman" == "singla") //false
console.log("pardumann" === "singla") //false
*/