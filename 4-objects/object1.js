// two ways for objects

//object literals
Object.create// singleton 

const mySymbol=Symbol("key1")


const JsUser={
    name:"Rahul",
    email:"r@gmail.com",
    //using symbol as a key
    [mySymbol]:"mykey1",// here we are refering to the above symbol
    // mySymbol:"mykey1" is like normal key value pair
    class:"BTech 3rd Year",
    age:18,
    location:"jaipur",
    isLoggedIn:false,
    lastLoginDays:["monday","sat"]
} // object is created

console.log(JsUser.email)
console.log(JsUser["email"])

JsUser.email="rahul@gmail.com"; // to overwrite the value
// Object.freeze(JsUser) ;// now the values can be updated 

JsUser.greeting=function(){
    console.log("Namaste Js user")
}
console.log(JsUser.greeting)
console.log(JsUser.greeting())

JsUser.greeting2=function(){
    console.log(`Namaste Js user,${this.name}`)// this is used for reference 
}
console.log(JsUser.greeting2)
console.log(JsUser.greeting2())
