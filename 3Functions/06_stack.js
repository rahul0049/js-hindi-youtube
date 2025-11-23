// Call stack how code is executed in js 
// two types -> execution context and call stack 
// Javascript Execution context -> how js run the code -> it run in two phases

//First is Global Execution Context . JAVASCRIPT is A SINGLE THREADED language
// Then Functional Execution Context
// Then Eval Execution Context  
/*
{}-> Memory Creation phase
  -> Execution Phase


*/

let val1=10
let val2=5
function addNum(num1,num2){
    let total=num1+num2
    return total

}
let result1=addNum(val1,val2)
let result2=addNum(10,33)
console.log(result1)

/*
Phase 1:- Global Execution and allocated in 'this'
Phase 2:- Memory Phase : val1->undefined , val2->undefined , addNum->definition , result1->undefined , result2->undefined 
Phase 3:- Execution Phase : val1->10,val2->5, addNum-> new Execution Context ->new variable environmnet + execution thread
(again memory phase and execution phase for addNum function)


Call Stack - LIFO last in first out 
*/
function one(){
    console.log("one")
    two()
    
}
function two(){
    console.log("two")
    three()
}
function three() {
    console.log("three")
}

one()
two()
three()


