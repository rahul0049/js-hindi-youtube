

// //{} is scope
// if(true){
//     let a=10
// const b=20
// var c=30
// }
// console.log(a,b,c) // it gives a,b is not defined that's why var is not used as it can be accessed outside scope 

// let d=10
// if(true){
//     let d=50
// }
// console.log(d) // gives 10 as d=50 is only inside scope 


// nested scope
function one(){
    const username="hitesh"
    function two(){
        const website="youtube"
        console.log(username)
    }
    // console.log(website) // can't be accessed here so two is not executed
    two()
}
one()

// similar for if else 








    
    //++++++++++++++   ++++++++++++//
function addone(num){
    return num+1
}
addone(5)


// hoisting of function
// function funName(){} can be accessed before initialization 
// but 
// const addOne=function(){} can't be accessed before it's initialization 