- [დავალებებზე დაბრუნება](README.md)

### სატესტო API https://jsonplaceholder.typicode.com/

# get რექვესტი

თუ გვსურს API-დან მონაცემების მიღება ვაგზავნით get რექვესტს, რომელის ასე ჩაიწერება:

```js


fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));


```

###  პარამეტრებთან ერთად გაგზავნა

ამისთვის შეიძლება უბრალოდ გადავცეთ სთრინგში: `fetch('https://example.com?name=nika&age=45')`  

- სთრინგში, რა თქმა უნდა, შეგვიძლია პარამეტრების გადაცემა:
```js
fetch(`https://example.com?name=${name}&age=${age}`)
```

ან შეიძლება მსგავსი ჩანაწერიც: (რომელსაც თვითონ გადაყავს სთრინგში)
```js
fetch('https://example.com?' + new URLSearchParams({
    name: 'nika',
    age: 22
}).toString()
)
```

# post რექვესტი 

გამოიყენება მონაცემების გასაგზავნად 

```js
fetch('https://api.example.com/data', {
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
```

