

// function testFunc(cat, id) {
//     console.log(cat, id)
// }

let list = document.querySelectorAll(".list-item")

// list[0].dataset.new = "text" ქმნის ახალ დატას, იგივეა რაც html-ში data-new

list.forEach(item => {
    item.addEventListener("click",event => {
        let element = event.target
        let category = element.dataset.categoryName
        let id = element.dataset.id
        console.log(category,id)
    })
})

// 

let myInput = document.querySelector('input[name="info"]')

// console.log(myInput.value)

let arr = [11,53,74]
let arr2 = [5,6,7]

//let newarr = [...arr,...arr2]
// ეს ორი ერთი და იგივეა, ორივე მასივებს აერთიანებს
// let newarr = arr.concat(arr2)

// console.log(newarr)

let obj1 = {
    a: 1
}
let obj2 = {
    b: 2
}

// let newObj = { ...obj1, ...obj2 }

let newObj = Object.assign(obj1, obj2);


console.log(arr)

let index = arr.findIndex(item => {
    return item == 55
})

// თუ ელემენტი არ მოიძებნა index არის -1 

console.log(index)






