
let dark_mode = false
let x = 6

if(x > 5) {
    console.log('metia')
} else if( x == 5) {
    console.log('tolia')
} else {
    console.log('naklebia')
}

// let result = x > 5 ? "მეტია" : "ნაკლებია"
// console.log(result)

function shedareba(param) {
    // dark_mode = !dark_mode
    console.log(dark_mode)
    // if(param > 5) {
    //     return "მეტია"
    // } else {
    //     return  "ნაკლებია"
    // } 
    //ტერნარი, იგივე ვარიანტი რაც ზემოთ if else-ით
    return param > 5 ? "მეტია" : "ნაკლებია"
}

console.log(shedareba(3))


let weekDayNumber = new Date().getDay()
let weekDay

switch(7) {
    case 0: weekDay = "კვირა"; break;
    case 1: weekDay = "ორშაბათი"; break;
    case 2: weekDay = "სამშაბათი"; break;
    case 3: weekDay = "ოთხშაბათი"; break;
    case 4: weekDay = "ხუთშაბათი"; break;
    case 5: weekDay = "პარასკევი"; break;
    case 6: weekDay = "შაბათი"; break;
    default: weekDay= "არასწორი ციფრი"
}

console.log(weekDay)

// if(weekDayNumber == 0) {
//     weekDay = "კვირა"
// } else if (weekDayNumber == 1) {
//     weekDay = "ორშაბათი"
// } else if (weekDayNumber == 2) {
//     weekDay = "სამშაბათი"
// }else if (weekDayNumber == 3) {
//     weekDay = "ოთხშაბათი"
// }else if (weekDayNumber == 4) {
//     weekDay = "ხუთშაბათი"
// }else if (weekDayNumber == 5) {
//     weekDay = "პარასკევი"
// } else if (weekDayNumber == 6) {
//     weekDay = "შაბათი"
// }




     