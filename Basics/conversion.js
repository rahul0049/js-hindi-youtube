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



// Operations //
let value=3
let negValue=-value
console.log(negValue)
console.log("1"+2) // 12
console.log(1+"2")  //12
console.log("1"+2+2) //122
console.log(1+2+"2")  //32

// prefix increment and postfix increment ++a, a++
