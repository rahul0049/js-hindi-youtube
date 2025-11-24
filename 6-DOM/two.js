const parent=document.querySelector(".parent")
console.log(parent)
console.log(parent.children[1].innerHTML="tuesday")// we get HTML collection
for(let i=0;i<parent.children.lenth;i++){
    console.log(parent.children[i].innerHTML)
}

parent.children[1].style.color="orange"
console.log(parent.firstElementChild) // we get monday as child
// it is very important similarly parent.lastElementChild also improtant
// child to parent also possible 

const day1=document.querySelector('.day')
console.log(day1)
// querySelector is complete a tree model so it takes time to traverse complete tree to find parent using qeurySelector
// so we can use .parent
console.log(day1.parentElement)
console.log(day1.nextElementSibling)

console.log("nodes:",parent.childNodes) // it gives 9 nodeList because it is a complex tree structure
// like every element will be counted like comment, linebreak
// ReactJS

// clearting nodeList