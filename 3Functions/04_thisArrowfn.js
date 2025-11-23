// this tells about current context 
const user={
    username:"rahul",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username} , welcome to website`); // direct {username} cannot be used
        // here this is used for current username,price 
        console.log(this) // this gives complete object
    }
}
user.welcomeMessage() // because it is a method
user.username="anurag"
user.welcomeMessage() // here it gives anurag only when we use this otherwise it gives username not defined
console.log(this) // here there is no context in golobal so it gives empty object
// but in browser the gloabal object is window object


function chai(){
    let username="hitesh"
    console.log(this) // inside function we get many values 
    console.log(this.username)// gives error because it works only in object
}
chai() 


//other way to write a function
const chai1=function(){
    let username="hitesh"
    console.log(this) // inside function we get many values 
    console.log(this.username)// gives error because it works only in object
}
chai1()

//Arrow function remove function and after () , use =>
const chai2=()=>{
    let username="rahul"
    console.log(this)
}
chai2()


//arrow function 
//  ()=>{} is a arrow function 
const addTwo=(num1,num2)=>{
    return num1+num2;
}

//Implicit return arrow function-> no need to write return keyword
const addThree=(num1,num2,num3)=> (num1+num2+num3) ;
//if {} return is must , if () then no need to write return

// this is important in react

//() must be used while returning a object without () an object can't be returned 

const myArr=[2,4,3,5,23,22];
myArr.forEach(()=>{}) // arrow function in a loop
