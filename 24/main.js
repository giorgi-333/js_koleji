
// let posts = []

// fetch('https://jsonplaceholder.typicode.com/posts')
//       .then(response => response.json())
//       .then(json => {
//         posts = json
//         console.log(json)
//         console.log(json[1])
// })

fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
      .then(response => response.json())
      .then(json => {
        console.log(json)
})

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        name: 'nika gagnidze',
        age: 30
    }),
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));





