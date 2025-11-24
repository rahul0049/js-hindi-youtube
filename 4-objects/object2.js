const tinderUser2=new Object() // it is an singleton obect
const tinderUser = {};  // create object

tinderUser.id = "123abc";
tinderUser.name = "sammy"; // key is name and value is "sammy"
tinderUser.isLoggedIn = false;
console.log(tinderUser);

// object inside object i.e. nested object
const regularUser={
    email:"rahulrajoriya089@gmail.com",
    fullName:{
        userfullname:{
            firstName:"Rahul",
            lastName:"Saini"
        }
    }
}
console.log(regularUser.fullName?.userfullname.firstName) // ? is used . It is used if fullName is present or not 

// combining objects 
const obj1={
    1:"a",
    2:"b"
}
const obj2={
    3:"a",
    4:"b"
}
const obj3={obj1, obj2} // it wil not combine both the objects it will only create two objects
console.log(obj3)
const obj4=Object.assign({},obj1,obj2) // it returns the object and {} is optional which is target and obj1,obj2 are source
console.log(obj4)
// if {} is not used then obj2 is combined in obj1 i.e. obj1 changed . If {} is used then both will be combine in new {} and obj1 will not change
console.log(obj1)

const obj5=Object.assign(obj1,obj2)
console.log(obj5)
console.log(obj1)

//another method is spread
const obj6={...obj1,...obj2}

// if we get values from database then it comes in form of arrays i.e. objects in an array
const users=[
    {
        id:1,
        email:"h@gmail.com"
    },
]
console.log(users[0].id)


console.log(tinderUser);
console.log(Object.keys(tinderUser)) // to get all keys of tindeUser object and it's datatype is array 
// it is important that we get array as output
// similarly 
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser)) // gives array of object

// if key-value pair is not exist in an object then it gives array so we can use hasOwnProperty to check
console.log(tinderUser.hasOwnProperty('isLoggedIn'))