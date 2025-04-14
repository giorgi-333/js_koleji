


let date1 = new Date("2000-04-12");

// typeof date1 - აბრუნებს ცვლადის ტიპს

console.log(date1);

date1.setFullYear(date1.getFullYear() + 2)

console.log(date1);

result.innerHTML = date1.getFullYear() + "<br>";
result.innerHTML += date1.getDate() + "<br>";
result.innerHTML += date1.getMonth() + "<br>";



function getSelectedDate(el) {
    let date2 = new Date(el.value)
    console.log(date2);
}

let str1 = "15"


console.log(str1.padStart(2, "0"))

