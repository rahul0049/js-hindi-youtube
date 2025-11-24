const myNums=[1,2,3,4,5,6,7,8]
const newNums=myNums.map((num)=> num+10) // or myNums.map((num)=>{return num+10})
console.log(newNums)

//Chaining 
const newNums1=myNums.map((num)=> num*10 ).map((num)=>num+1).filter((num)=>num>=40) // in second map the num is previous num+10 and in filter num is 
// (num+10)+1
console.log(newNums1)
// map iterate over all the elements while filter fiter out according to the coditions 



//Reduce ->call back function we get accumulator and currentValue
// first time the value of accumulator is 0 then the next accumulator is the result of the previous operation

const myNums1=[1,2,3,4,5]
const myTotal=myNums1.reduce( function(acc,curr){
    console.log(`${acc} and ${curr}`)
    return acc+curr;
} ,0) // 0 is the value of accumulator
console.log(myTotal)
//0 and 1
// 1 and 2
// 3 and 3
// 6 and 4
// 10 and 5

//using arrow function
const myTotal1=myNums1.reduce((acc,curr)=>{
    return acc+curr
})
console.log(myTotal1)
