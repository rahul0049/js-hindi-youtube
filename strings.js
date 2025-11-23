const name="rahul"
const repocnt=50
console.log(name+repocnt+"saini")

 
console.log(`Hello my name is ${name} and my repocnt is ${repocnt}`) // it is string interpolation

const gameName=new String("rahul") // object -> it gives key value pairs and also prototypes, methods , length etc

console.log(gameName[0]) // access 0 key
console.log(gameName.__proto__); // to access get all method 
console.log(gameName.length) //
console.log(gameName.toUpperCase()) // original value is not changed here 
console.log(gameName.charAt(0)) // character att 0th position 
console.log(gameName.indexOf('t')) // first index of 't'

// String methods -> we can get string methods in browser 
const newString=gameName.substring(0,4) // 4 is not included
const anotherString=gameName.slice(0,4)// negative index can also be used
const newStringOne="  rahul  "
console.log(newStringOne.trim()) // trim , trimStart, trimEnd

const url="https://hitesh.com/hitesh%20choudhary"
const newurl=url.replace('%20','-')
console.log(newurl)

// converting string into array
const newStringTwo="Hitesh-choudhary-youtube"
const newArr=newStringTwo.split('-')// - is symbol from which we can separate 
console.log(newArr)