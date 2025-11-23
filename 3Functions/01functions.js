function funName(){
    console.log("I am inside funName")
} // it is the syntax of function where {} is scope
funName // is it's reference
funName() // is it's execution

function addTwoNumbers(num1,num2){
    if(typeof num1==Number){
    console.log(num1+num2)
    }
    else{
        console.log("Argument is not a number")
    }
}
addTwoNumbers() // gives NaN because argument is not given
addTwoNumbers(3,4)
addTwoNumbers("one","two") // add both the strings 
addTwoNumbers("a",4)// checkin is necessary

// other way to gett arguments
function loginUserMessage(username){
    if(!username)
    {
        console.log("Please enter the username")
        return
    }
    return `${username} jussed logged in`
}
console.log(loginUserMessage("rahul"))
// just think void and int functions 
//if no argument is passed while calling the function then it gives undefined so we need to check for argument
console.log(loginUserMessage())
// default values can also be given like function loginUserMessage(username="rahul")
