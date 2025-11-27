const descriptor=Object.getOwnPropertyDescriptor(Math,'PI') //  to get hidden properties
console.log(descriptor)
// we get 
//  value: 3.141592653589793,
 // writable: false,
  //enumerable: false,
  //configurable: false

const chai={
    name:"ginger",
    price:250,
    isAvailable:true,
    orderChia:function(){
        console.log('chai not prepared')
    }
}
console.log(chai)
console.log(Object.getOwnPropertyDescriptor(chai)) // undefined because it is object 
console.log(Object.getOwnPropertyDescriptor(chai,'name')) // now name is property
Object.defineProperty(chai,'name',{
    writable:false,
    enumerable:false,
})
console.log(Object.getOwnPropertyDescriptor(chai,'name'))
// writable: false,
//   enumerable: false,
//   configurable: true
//now name is not writable 

// for (let [key,value] of chai) {
//     console.log(`${key}`)
    
// not iterable because it is object

//don
for (const [key,value] of Object.entries(chai)) {
    if(typeof value!='function'){
    console.log(`${key} and ${value}`)
}}
// like writable  -> iterable is also a property . So we can prevent iteration( enumerable false to prevent iteration)