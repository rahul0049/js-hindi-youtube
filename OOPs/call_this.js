function setUserName(username){
    // complex db calls 
    this.username=username


}
function createUser(username,email,password){
    // setUserName(username) // it's called and as it is topmost in callstack it will 
    // execute and exit from call stack so no further refernce will be there 
    // also if we store in upper this.username variable , as it remove from call stack , its reference is also lost 
    // so we store in createUser function this
    setUserName.call(this,username)
    this.email=email
    this.password=password
}
const chai= new createUser("rahul", "r@gami.com","123")
console.log(chai) // here we didn't get username        