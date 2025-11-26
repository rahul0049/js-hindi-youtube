let myName="rahul   "
console.log(myName.length)
//now we want a new property called true length 


//Example
let myHeros=['thor','spiderman']
let heroPower={
    thor:"hammer",
    spiderman:'sling',
    getSpiderPower:function(){
        console.log(`spyder power is ${this.spiderman}`)
    }
}

Object.prototype.hitesh=function(){
    console.log(`Hitesh is present in all objects`)
}

heroPower.hitesh();

// as all things go through objects( strings , functions ,arrays ,..)
// The highest hierarchy is Object

// inheretence -> accessing properties of other objects 
const user={
    name:"rahul",
    email:'r@gmail.com'
}
const Teacher={
    maekVides:true
}
const teachingSupport={
    isAvailable:false
}
const TAsupport={
    makeAssignment:'JS assignment',
    fullTime:true,
    __proto__:teachingSupport
}

Teacher.__proto__=user // now teacher can access properties of User
// but these approach is outdated


// modern syntax
Object.setPrototypeOf(Teacher,user) // allowing teacher to access the properties of user

//solution //
let anotherUserName="chai aur code            "
String.prototype.truelength=function(){
    console.log(`${this}`)
    console.log(`True length is ${this.trim().length}`)
}   
anotherUserName.truelength()
"rahul        ".truelength
