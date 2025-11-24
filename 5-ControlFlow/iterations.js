// for (let index = 0; index < array.length; index++) {
//     const element = array[index];

// }
// there is no unbound in js , it is undefined if we go out of the index



// 

// while loop
// initialization
// while (condition) {
// code
// update    
//}




// do {
//     // code to be executed
// } while (condition);
// code and update

// do {
//     console.log("hello");
// }
// while (true) {

// }




//for of loop
const nums=[1,2,3,4,5]
for (const num of nums) {  
    console.log(num);
    // it can be applied on every thing like object , arr
    
}

const greetings="Hello World!"
for(const greet of greetings){
    console.log(greet)
}

//maps -> no duplicates allowed
const mp=new Map()
mp.set("Hyderabad",1)
mp.set("jaipur",2)
mp.set("Bengaluru",3)
console.log(mp)

for ( const [key,value] of mp){
    console.log(key,value)
}
// this can't be done for object because objects are not iterable  , there are other ways for object iterations 

const myObje={
    js:"javascript",
    cpp:"C++",
    rb:"ruby",
    swift:"swift by apple"
}

for(const key in myObje){
    console.log(key) // to get keys 
    console.log(myObje[key]) // to get values of keys 
}

//for in loop in arr
const programming=["js","rb","py","java","cpp"]
for(const key in programming){
    console.log(key) // it gives keys of arrays i.e. 0,1,2,3,4
    console.log(programming[key])
}

// for in loop can't be used for maps 



//for each loop
//method 1
const coding =["js","ruby","java","python","cpp"]
coding.forEach( function (item) {
    console.log(item)
}) // call back function no need to give name 
console.log()

// method 2 -> arrow function
coding.forEach((item)=>{
    console.log(item)
})

// method 3-> using another function
function printMe(item){
    console.log(item)
}
coding.forEach(printMe)

//method 4
coding.forEach((item,index,arr)=>{
    console.log(item,index,arr)
})

//objects in array
const myCoding=[
    {
        languageName:"js",
        languageFileName:"javascript"
    },

    {
        languageName:"js",
        languageFileName:"javascript"
    },

    {
        languageName:"js",
        languageFileName:"javascript"
    }
]
myCoding.forEach((item)=>{
    console.log(item.languageFileName)
})
// forEach  can't return anything

const values=coding.forEach((item)=>{
    console.log(item)
    return item
})
console.log(values) // it does not return anything


const myNums=[1,2,3,4,5,6,7,8,9]
//filter is also takes a callback function and returns values . Also condition is also given in filter 
let newNums=myNums.filter((num)=>num>4) // it returns the values
console.log(newNums)




const newNums1=myNums.filter(()=>{
   return nums>4
})// gives empty error because values return only () not {}. In order to return value using {} use return keyword
console.log(newNums1)



//using forEach 
const newNums2=[]
myNums.forEach((num)=>{
    if(num>4) return newNums2.push(num)
})
console.log(newNums2)





const books=[
    {title:"Book one",genre:"Fiction",publish:1981,edition:2004},
    {title:"Book two",genre:"Non-Fiction",publish:1992,edition:2009},
    {title:"Book three",genre:"History",publish:1999,edition:2001},
    {title:"Book four",genre:"Non-Fiction",publish:1989,edition:2008},
    {title:"Book five",genre:"Science",publish:2009,edition:2007},
    {title:"Book six",genre:"Fiction",publish:1987,edition:2007},
    {title:"Book seven",genre:"History",publish:1986,edition:2003},
    {title:"Book eight",genre:"Science",publish:1988,edition:2006},
    {title:"Book nine",genre:"Fiction",publish:1989,edition:2004},
];
// user is using filter option 
const userBooks=books.filter((bk)=>bk.genre=="History")
const userBooks1=books.filter((bk)=>bk.publish>=1990)
const userBooks2=books.filter((bk)=>bk.genre=="Science")
console.log(userBooks)
console.log(userBooks1)
console.log(userBooks2)


