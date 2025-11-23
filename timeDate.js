let myDate=new Date()
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleTimeString())
// console.log(myDate.toUTCString())


console.log(typeof myDate)// object
let myCreatedDate=new Date(2023,0,12) // month start from 0
console.log(myCreatedDate.toDateString())

let myCreatedDate2=new Date(2023,0,12,5,3)// 5 hours 3 minutes 
let myCreatedDate3=new Date("2023-01-14") // YYYY-MM-DD here month start from 1 not zero

let myTimeStamp=Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime()) // now it can be compared with myTimeStamp

console.log(Math.floor(Date.now()/1000)) // to convert milliseconds in seconds

// .get method for day, month ,year , day etc

