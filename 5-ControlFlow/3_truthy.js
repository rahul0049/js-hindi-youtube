const userEmail="@hitesh.ai"
if(userEmail){
    console.log("Got user email"

    )

}
else {
    console.log("don't have a user email")
}

// Falsy value-> false,0,-0,BigInt 0n,"",null, undefined , Nan
// except these all are truthy values also "0",'false'," ",[],{},function(){}

//checking array
if(userEmail.length==0){
    console.log("array is empty")
}

const emptyObj={}
if(Object.keys(emptyObj).length==0){
    console.log("object is empty")
}

// Nullish Coalescing Operator(??):null undefined -> check for null and undefined
let val1;
val1=5??10 // 5
val2=null??10 // 10

//Ternary Operator
// condition ? true:false
const iceTeaPrice=100
iceTeaPrice>=80 ? console.log("less than 80" ) : console.log("Greater than 80")