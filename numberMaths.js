// const score=400
// const balance=new Number(100)// explicitly defining that balance is a Number datatype
// console.log(balance);
// console.log(balance.toString().length)
// console.log(balance.toFixed(2)) // precision value i.e. value after decimal is 2
// const otherNumber=23.8966
// console.log(otherNumber.toPrecision(3))// returns a string . It gives 23.9

// const hundreds=1000000
// console.log(hundreds.toLocaleString('en-In'))// to see number of zeros easiy


//++++++++++++++++++  Maths   +++++++++++++++++++

console.log(Math) // an object
console.log(Math.abs(-4)) // absolute value 
console.log(Math.round(4.3))    
console.log(Math.ceil(4.2))
console.log(Math.floor(4.2))
// Math.sqrt,.pow,.
console.log(Math.min(3,2,23,22,2))

console.log(Math.random()) // between 0 to 1
console.log(Math.floor(Math.random()*10)+1)// between 1 to 9 . 1 is added because there may be 0 as random which is not betwen 1 to 10
const min=10
const max=20
console.log(Math.floor((Math.random()*(max-min+1))+min))