
let myDiv = document.querySelector("#div-1");

// toggle-ის გამოყენება ->
function changeColor() {
    // თუ არა არის ამატებს კლასს, თუ არის შლის
    myDiv.classList.toggle("red"); 
}


// ფუნქციის პარამეტრები ->
function sumNumbers(a,b) { //გამოცხადება
    // console.log(a + b);
    
    return a + b;
}

let x = 12;
// ფუნქციის პარამეტრების გამოყენება / გამოძახება
// sumNumbers(10,40);
let sumRes1 = sumNumbers(x, 4);
console.log(sumRes1);
console.log(sumNumbers(100, 200));

// ტექსტის შეცვლა html-დან პარამეტრით
function changeText(txt) {
    myDiv.textContent = txt;
}

// this-ის გამოყენება
function changeDiv(e) {
    e.style.color = "green"
    console.log(e.textContent);
}

// ინკრემენტი..

let i = 0;

// let k = i--;

i++;
console.log(i);


// სურათის შეცვლა

function changeImg(img) {
    img.src = "img/geo-flag.png"
}
