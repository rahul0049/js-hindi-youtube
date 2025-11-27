// Class constructor and static

class User {
    // as new keyword is called , constructor is called
    constructor(username,email,password){
        this.username=username;
        this.email=email;
        this.password=password
    }
    encryptPassword(){
            return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}
const chai= new User('chai','chai@gmail.com','212')
console.log(chai.encryptPassword())
console.log(chai.changeUsername())

// behind the scenes 
function Usern(username,email,password){
    this.username=username;
        this.email=email;
        this.password=password
}
Usern.prototype.encryptPassword =function(){
    return `${this.password}abc`
}
const tea=new Usern('tea','@gmail.com','123')
console.log(tea.encryptPassword())


// inheretence in classes
class users{
    constructor(username){
        this.username=username
    }
    logME(){
        console.log(`Username is ${this.username}`)
    }
}
class teacher extends users{ // extends is used for inheretence
    constructor(username,email,password){
        super(username) // it will automatically use call
        this.email=email;
        this.password=password;
    }
    addCourse(){
        console.log("course is added")
    }
}

const rahul= new teacher("rahul",'r@gmail.com','123')
rahul.addCourse()
const anurag=new users('anurag','gmail.com','23')
// anurag.addCourse() // gives error as it don't have access for teacher 

