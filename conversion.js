let score="23a"
console.log(typeof score)

let valueInNumber=Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber) // NaN is also a type of number 
/*
 "33"=>33
"33abc"=>NaN
true=>1

*/

let isLogginin="f"
let booleanIsLogginIn=Boolean(isLogginin)
console.table([isLogginin,booleanIsLogginIn])
// 1=>true; 0=>false
// ""=>false
//"rahul"=>true