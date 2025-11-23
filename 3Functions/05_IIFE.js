//Immediately Invoked Function Expressions
// when we need to something which need to immediately start like database files to execute just when site is called
// no pollution from global scope 

// function chai(){
//     console.log(`DB Connected`)
// }
// chai()

// to invoke immediately
(function chai1(){
    //named IIFE
    console.log(`DB connected immediately`);
})();

// (function definition)( immediately execution) , we used chai() . So to use immediately use ()()
((name)=>{
    console.log(`DB connected 2 ${name}`)
})("rahul") // it is just like calling function 

// there must a semicolon to end the immediately invoked function
