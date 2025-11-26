/*
JS is prototype language
OOP
Object-> collection of proper properties and methods like toLowerCase, promise

Parts of oops:-
Object literal 
Constructor 
Prototype
Instances(new , this )




*/

//-> Objects literals are making objects
// const user={
//     name:"rahul",
//     isSignedIn:true,
//     email:"rahul@gmail.com",// these are properties 
//     getUserDetail:function(){
//         console.log("Returend")
//         console.log(`${this.username}`) // this is necessary to give context   
//         console.log(this) // give current context ( all values )
//     }
// }
// console.log(user.getUserDetail())
// const date=new Date // here new keyword is construction function used for creating new context

function user(username,loginCount,isLoggedIn){
    this.username=username // LHS is variable and RHS is parameter that is passed like myusername=username
    this.loginCount=loginCount
    this.isLoggedIn=isLoggedIn
    this.greeting=function(){
        console.log("ok")
    } // it is a method

    return this 

}   

const userOne=user('rahul',12,true)

const userTwo=user("saini",22,true)
console.log(userOne) // values becomes overwrite . here saini is in userOne
console.log(userOne.constructor)// reference to itself

// so new keyword should be used for new instance
const userThree=new user("ok",22,true)

//so constructor gives new instances

//1-> when new is called new empty object created called instance
// 2-> constructor function is called then
//3-> this keyword assign to the values
