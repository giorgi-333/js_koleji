

btn.addEventListener("contextmenu", (e) => {
    e.preventDefault()
    let item = e.target.dataset
    console.log(e, item);
    console.log(Number(item.id));
})


document.body.addEventListener('click', event => {
    console.log(event);
    ap.style.left =  event.clientX + "px"
    ap.style.top = event.clientY + "px"
})


function rt(e) {
    console.log(e);
    we.remove()
}

inpId.addEventListener("input",inp)

function inp(e) {
    e.preventDefault()
    console.log(e.target.value);
}