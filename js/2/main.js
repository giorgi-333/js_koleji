


// console.log(y)

// var x = 4
// let dark_mode = true


// console.log(5);

// y = 25

// console.log(25);

// const pi = 3.14

// let saxeli
// let saxeli12
// let Saxeli
// let saxeliGvari
// let saxeli_gvari
// let _saxeli
// let $saxeli

// function printTest() {
//     console.log('test');
// }

let result = document.querySelector("#result-1.ab")

function shetyobineba() {
    // let name = 'nika'
    // alert("რაიმე ტექსტი")
    // let result = document.getElementById("result-1")
    console.log(result.innerHTML);
    result.innerHTML = "ახალი ტექსტი";
}


function hideText() {
    // result.style.color = "red"
    // result.style.backgroundColor = "#333"
    result.style.display = "none"
}

function changeStyle() {
    result.classList.add("dark-mode")
}

function removeStyle() {
    result.classList.remove("dark-mode")
}
