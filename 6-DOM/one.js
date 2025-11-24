// const title = document.getElementById("title")
// undefined
// title
// <h1 id=​"title" class=​"heading">​Dom Learning on Chai aur Code​</h1>​
// title.style.backgroundColor="green"
// 'green'
// title.style.padding="15px"
// '15px'
// title.style.borderRadius="18px"
// '18px'



//                  Important
// title.textContent
// 'Dom Learning on Chai aur Code'
// title.innerHTML
// 'Dom Learning on Chai aur Code'
// title.outerHTML
// '<h1 id="title" class="heading">Dom Learning on Chai aur Code</h1>'
// title.innerText
// 'Dom Learning on Chai aur Code




// const myul = document.querySelector("ul");

// undefined
// const li = myul.querySelector("li");

// undefined
// li.style.backgroundColor="green"
// 'green'





// const myTxt=document.querySelector("ul")
// undefined
// myTxt.innerHTML="OK"
// 'OK'



//document.querySelectorAll() gives a NodeList(it is not an complete array)
// const tempList=document.querySelectorAll("li")
// undefined
// tempList
// NodeList(3) [li, li, li]
// tempList[0].style.backgroundColor="green"

// even if we have only one element in querySelectorALl then also we need to define it's index 



//forEach in nodeList
// tempList.forEach((l)=>{
//     l.style.backgroundColor="green"
// })



//getElementByClassName
//const tempClassList = document.getElementsByClassName('list')  here we get HTMLCollection not 
// so convert to array
//Array.from(tempClassList)  now we get array functions like forEach
// const myConvertedArr=Array.from(tempClassList)
// myConvertedArr.forEach(function(li){
// li.style.color='orange'})

