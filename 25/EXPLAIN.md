- [დავალებებზე დაბრუნება](README.md)

### სატესტო API https://jsonplaceholder.typicode.com/

# get რექვესტი

თუ გვსურს API-დან მონაცემების მიღება ვაგზავნით get რექვესტს, რომელის ასე ჩაიწერება:

```js


async function getData() {
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  console.log(data);
}

getData();


```

###  try და catch-ი

```js

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


```