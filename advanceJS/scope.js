<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>closure</title>
</head>
<body>
    <button id="orange">Orange</button>
    <button id="green">Green</button>
</body>
<script>


function outer(){
    let username="rahul";
    function inner(){
        console.log(username)
    }
    function innertwo(){
        // innnertwo can't have access of variables of inner one . It only have parent variables access

    }
    inner()

}
outer()
// this is lexical scoping  -> i.e. child can access parent properties while parent can't access child properties
// also two child can't access each other properties 


// closure 
function makefun(){
    const name="mozilla";
    function displayName(){
        console.log(name);
    }
    // after this , function displayName scope is not present

    // closure-> only function will not go , if it's outer function exist then they will also go
    
    return displayName;
    // like here displayName is returned. Now not only displayName outer function scope is also present
    // i.e. complete lexical scope will return 
}
const myFun=makefun();
myFun()



//Practical implementation
// document.getElementById('orange').onclick=function(){
//     document.body.style.backgroundColor='orange'
// }
// document.getElementById('green').onclick=function(){
//     document.body.style.backgroundColor='green'
// }
// now if we were given 500 
function clickHandler(color){
    return function(){
        document.body.style.backgroundColor=`${color}` // here function has access color property of clickhandler
        // it is lexical scoping 
}
    }
    
document.getElementById('orange').onclick=clickHandler('orange')
document.getElementById('green').onclick=clickHandler('green')

</script>
</html>
