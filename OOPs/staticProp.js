class user{
    constructor(username){
        this. username=username
    }
    logMe(){
        console.log(`${this.username}`)
    }
   static createId(){ // when we don't want to give access of any particular method during inheretence
            // then we use static keyword 
            // it will not given access even to his child object like hitesh.createId
        return `123`
    }
}
const hitesh=new user('hitesh')
//hitesh.createId() will not be allowed because of static of createId
console.log(user.createId())

class teacher extends user{
    constructor(email,username){
        super(username)
        this.email=email
    }
}

const aryan=new teacher('aryan@gmai.com','aryan')
console.log(aryan.logMe())
console.log(aryan.createId()) // gives error as createId is not a function 

