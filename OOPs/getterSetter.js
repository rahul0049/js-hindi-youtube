class User{
    constructor(email,password){
        this.email=email
        this.password=password
    }
    get password(){
        return this._password.toUpperCase()
    }
    set password(val){
        this._password=val
    } // here both constructor and setter is setting the value of password so we use _password.
}

// Important
// here the value of password is set exact in DB but while someone is getting / accessing it will get .toUpperCase
//

const rahul=new User("rahul@gmail.com",'abc')
// lwt we don't want to give access of some properties 
// it can be done by getter and setter
console.log(rahul.password)


// older method before class 
function user1(email,password){
    this._email=email;
    this._password=password;

    Object.defineProperty(this,'email',{
        get:function(){
            return this._email.toUpperCase()
        },
        set:function(val){
            this._email=val
        }
    })
}
const chai=new user1("chai@gmai.com",'ch')
console.log(chai.email)




// similarly object based get, set
const user2={
    _email:'h@gmail.com',
    _password:"abc",

    get email(){
        return this._email.toUpperCase() 
    },
    set email(val){
        this._email=val
    }
}
// almost all are class based syntax 
const tea=Object.create(user2) // factory function (using Object.create(on which basis to create object))
console.log(tea.email)