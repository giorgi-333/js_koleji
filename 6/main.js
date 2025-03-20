

let res1 = document.querySelector("#res-1");

let x, y
x = 6

res1.innerHTML += `<h2> counter: ${x} </h2>
                   <h3> text h3 </h3>`

                
let newH4 = document.createElement("h4")
newH4.textContent = "rame text"
newH4.setAttribute("id","my-h4")

// document.body.append(newH4)

// res1.append(newH4)
// res1.after(newH4)
res1.before(newH4)

//
function deleteElem(elem) {
    console.log(elem.parentElement);
    // newH4.remove()
    elem.parentElement.remove()
}

// თაიმერები

// 5 წამში გამოდის შეტყობინება ერთხელ
// setTimeout( () => {
//     alert("Hello")
// },5000)

let z = 0   
let intId = setInterval(() => {
    z++
    console.log(z);
    if (z >= 5) {
        clearInterval(intId)
    }
},1000)


