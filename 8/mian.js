


let user = {
    name: "giorgi",
    mobile: "666777888",
    "1age": 44,
    jobs: {
        name: 'et',
        address: 'kinkladze'
    },
    56: 'text'
}
// console.log(user.name);

// user.name იგივეა რაც user["name"]

// console.log(user.jobs.name);

let paramName = "mobile"

// user["mobile"] იგივეა რაც user[paramName]

// console.log(user.mobile);
// console.log(user[paramName])

// user.1age არის შეცდომა მაგრამ user["1age"] სწორია
// user.56 არის შეცდომა, სწორია: user[56]


let newObj = {} // ობიექტის გამოცხადება

newObj.name = "nika"
newObj.address = "tbilisi"

// console.log(newObj);


// if პირობის ოპერატორი
// let x = 5
// && და ოპერატორი - ყველა პირობა უნდა იყოს სწორი
// || ან ოპერატორი - ერთ-ერთი პირობა უნდა იყოს სწორი
// x != 5    x თუ არ უდრის 5-ს


// მასივები

let usersList = ["ნიკა", "გიორგი", "სანდრო", "ვატო", "გია"]

// usersList.length - მასივის ელემენტების რაოდენობა

// usersList[0] = "გია" // შევცვალეთ პირველი ელემენტის მნიშვნელობა

// usersList.push("გია") ამატებს მასივის ბოლოში
// usersList.unshift("გია") ამატებს მასივის დასაწყისში

// usersList.pop() შლის ბოლო ელემენტს
// usersList.shift() შლის პირველ ელემენტს

console.log(usersList);


for (let i = 0; i < usersList.length; i++) {
    console.log(usersList[i], i);
    // usersList[i] იგივეა რაც usersList[0], 
    // usersList[1] და ა.შ.
}


console.log("---------------");

// მასივში ობიექტები

let users2 = [
    {
        name: "nika",
        age: 45
    },
    {
        name: "lika",
        age: 44
    }
]


for (let i = 0; i < users2.length; i++) {
    console.log(users2[i].name);
    // users2[i].name  მასივიდან წვდება ობიექტების name-ს
}






