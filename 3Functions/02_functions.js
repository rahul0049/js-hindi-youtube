// undefined number of arguments i.e. we don't know the number of items in cart of a shopping cart
//use rest operator ... (both are rest and spread)
function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(34,2,200))

const user={
    username:"rahul",
    price:199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is 
        ${anyobject.price}`)
}
handleObject(user)

// similarly there may be array instead of object 



 