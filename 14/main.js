


let mas = [1, 2, 3, 4, 5]

let mas2 = [...mas, 7, 8, 9] // ...mas იღებს მასივიდან მხოლოდ კონტენტს

let obj1 = {
    name: "giorgi",
    age: "99"
}

let obj2 = { ...obj1, mobile: '66677788' } // ... (spread operator) მუშაობს მსგვსად როგორც მასივზე

// console.log(obj2);

// map მეთოდი აბრუნებს ახალ მასივს, არ ცვლის მიმდინარე მასივს

// console.log(mas);

let createdForMap = mas.map((item, index) => {
    let changedItem = item + 10
    return changedItem
})

// console.log(createdForMap);

let objsArry = [
    { a: 1, b: true },
    { a: 33, b: false }
]

let editedObjectsArray = objsArry.map(
    (item, i) => {
        // item.name = "test"
        // return item 
       
        return {
            ...item,
            name: 'test2'
        }
    })

// console.log(editedObjectsArray);

// Find აბრუნებს პირველ მოძებნილ ელემენტს

// console.log(mas);

// let founded = mas.find(item => {
//     return item > 2
// })

// console.log(founded);


let numbers = [3, 6, 7, 45, 33, 88]

// Splice

// numbers.splice(3,0,"rt","r2",100)// მოცემული მასივიდან შლის

// console.log(numbers);

// Slice

console.log(numbers);

// numbers[numbers.length-1] არის იგივე რაც numbers.slice(-1)

let newNumbers = numbers.slice(-1)

console.log(newNumbers);



