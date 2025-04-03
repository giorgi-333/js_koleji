

// let value  = ""

// let x = value || 10
// //  ეს არის მოკლე ჩანაწერი, ქვემოთ მოცემული if else-ის
// if (value) {
//     x = value
// } else {
//     x = 10
// }



// if-ში false-ს აბრუნებს null, undifined, ""(ცარიელი სთრიგნი)

// x.trim() შლის დაშორებებს

let numbers = [34, 54, 23, "qutaisi", 24, 244, 2333, "tbilisi"]
let objsList = [
    {
        name: "nika",
        surname: "shavdia",
        age: 17
    },
    {
        name: "giga",
        surname: "metreveli",
        age: 28
    },
    {
        name: "sxva",
        surname: "metreveli",
        age: 40
    }
]

// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }

// for (let i in numbers) {
//     console.log(numbers[i]);
// }

// for (let item of numbers) {
//     console.log(item);
// }

// objsList.forEach( (item, i) => {
//     console.log(item, item.name, i);
// })


// filter() აბრუნებს ახალ გაფილტრულ მასივს

console.log(objsList);

let newList = objsList.filter(item => {
    return item.age > 18
})

// let newList = objsList.filter(item => item.age > 18 ) // return-ის თვითონა აკეთებს

console.log(objsList);

console.log("ახალი სია: ", newList);


