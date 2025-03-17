
let btn2 = document.querySelector("#btn-2")
let inp1 = document.getElementById("inp-1")


function testPrint() {
    alert("text")
}

function meore_funqcia() {
    alert('meore_')
}

// let brunva = () => {
//     alert('sxva')
// }
// brunva()
 // ანალოგიური ჩანაწერები
// function brunva() {
//     alert('sxva')
// }

// console.log(btn2);

// კლიკზე ფუნქციის გამოძახება
// btn2.addEventListener("click", testPrint)

btn2.addEventListener("click", (event) => {
    console.log(event.target);
    // event.target ელემენტი რომელზეც დავაკლიკეთ
    // event.target.textContent = "sxva teqsti"
})

btn2.addEventListener("contextmenu", (event) => {
    //contextmenu არის მაუსის მარჯვენა ღილაკის დაჭერის ივენთი
    // აუქმებს ბრაუზერის ჩაშენებულ ფუნქციებს
    event.preventDefault() 
    console.log(event.target);
})

inp1.addEventListener("input", event => {
    let val = event.target.value
    // val.length - აბრუნებს სიმბოლოების რაოდენობას
    console.log(val, val.length);
})



