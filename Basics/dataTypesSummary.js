//Primitive Data Types: Call by value-> copy is given and any change will change it's copy not original

//7 types:- String, Number, Boolean, null, undefined, Symbol , BigInt(scientic values)




const id=Symbol('123')
const anotherid=Symbol('123') // there both are different
const bigNumber=23123143242342n



// Non primitive / reference type:- pass by reference 
// arrays, objects ,functions
const heros=["df","kldjfkasj","fkdj"] // object
let myObj={
    name:"hitesh",
    age:22,
} // key value

const myFunction=function(){
    console.log("Hello World")
}
console.log(typeof myFunction) // it is a function object 





// Memory
/*
Stack is used for primitive types-> copy is created 
Heap for non primitive -> original value reference 
*/

let myYoutubeName="Chai aur code"
let anotherName=myYoutubeName
anotherName="rahul"
console.log(myYoutubeName) // it will not change the original name

let userOne={
    emmail:"r@gmail.com",
    upi:"use@ybl"
}
let userTwo=userOne
userTwo.email="rahul"
console.log(userOne.email) // the value is changed in both 