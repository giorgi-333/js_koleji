
// fetch(`https://jsonplaceholder.typicode.com/posts/3`)
//   .then(response => response.json())
//   .then(data => {
//     console.log(data)
//   })


// async function getData() {
//   const response = await fetch('https://jsonplaceholder.typicode.com/posts/3');
//   const data = await response.json();
//   console.log(data);
// }

// getData();


async function getData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

getData();


try {
  getName();

} catch (error) {
  console.log(error);
}

// getName();

console.log(44);
