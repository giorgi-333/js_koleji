
function openLink() {
    window.open("news.html?id=77","_self")
}


console.log(window.innerWidth, window.innerHeight);

// console.log(navigator.userAgent);

console.log(screen.width, screen.height);

function goBack() {
    history.back()
}

console.log(location.href);
console.log(location.hostname);
console.log(location.search);

const params = new URLSearchParams(location.search);

if (params.has("id")) {
    console.log(params.get("id"))
}