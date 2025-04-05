
// let info = {
//     name: "tbilisi",
//     population: 1200000,
//     country: "Georgia"
// }

// let cities = ["თბილისი","ქუთაისი","ხაშური","სამტრედია","ფოთი","ამბროლაური"]

// console.log(cities)

// cities = [] ანიჭებს ცარიელ მასივს (ფაქტიურად აცარიელებს)

// cities.length = 0 // მასივის სიგრძეს ანოლებს ანუ აცარიელებს

// delete cities[0] მასივის ელემენტის ამოშალა
// delete info.name ობიექტის ელემენტის წაშლა

// for(let item of [1,3,5,13]) {
//     console.log(item)
//     if(item == 3) {
//         break; // ციკლის შეჩერებას
//     }
    
// }



function multiple(x) {
    // if(x === 0) {
    //     console.log("არ გადმოცე 0")
    // } else {
    //     console.log(x * 10)
    // }
        // ორივე if-ი იგივეს აკეთებს
    // if(x) {
    //     console.log(x * 10)
    // } else {
    //     console.log("არ გადმოცე 0")
    // }

    if(!x) {
        console.log("არ გადმოცე 0")
        return // აჩერებს ფუნქციის მუშაობს
    }

    // sxva kodi
    console.log(x * 10)
   
}

// multiple(0)

// console.log(cities)


// მასივები და ციკლები

// let cities = ["თბილისი","ქუთაისი","ხაშური","სამტრედია","ფოთი","ამბროლაური"]


// cities.forEach((item,index) => {
//     // cities[index] = "ონი"
//     console.log(item, index)

// })

// console.log(cities)


// cities.forEach(prinCities)

// function prinCities(item, index) {

//     console.log(item, index)

// }

let numbers = [3,6,213,344,55,33,444]

// let filtred = numbers.filter(item => item < 100 )

// let filtred = numbers.filter(item => {
//     //
//     return item > 100 // ფილტრავს
// })

// console.log(filtred)


let city = "ქუთაისი"

// city.includes("აისი")  თუ შეიცავს აბრუნებს true-ს თუ არადა false-ს

// if( city.includes("აისი") ) {
//      console.log('aris')
// } else {
//     console.log('ar aris')
// }

let cities = ["თბილისი","ქუთაისი","ხაშური","სამტრედია","ფოთი","ამბროლაური", "თბილისი 2"]

if( cities.includes("თბილისი") ) {
    console.log('aris')
} else {
   console.log('ar aris')
}

let filtred2 = cities.filter(item => {

    return item.includes("ლი")
})

console.log(filtred2)













