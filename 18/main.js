

// localStorage.setItem("userId",88)

localStorage.userId = 99
localStorage.userName = "giorgi"

let users = [
    {
        id: 1,
        name: 'dato'
    }, 
    {
        id: 2,
        name: 'nika'
    }
]

localStorage.users = JSON.stringify(users)


if(!localStorage.counter) {
    localStorage.counter = 1 
} else {
    localStorage.counter = +localStorage.counter + 1
}