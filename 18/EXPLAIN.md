### [დავალებებზე დაბრუნება](README.md) 

# localStorage 

### ლოკალურ მეხსიერებაში მონაცემების შენახვა:

```js

// ცვლადი გადაყავს json-ის string ფორმატში
const jsonUsers = JSON.stringify(users); 

// შენახვა, სადაც key ამ მაგალითში არის "userList"
localStorage.setItem("userList", users);

// შენახვის მეორე ვარიანტი - იგივეს აკეთებს
localStorage.userList = users;

```

### ლოკალური მეხსიერებიდან მონაცემების მიღება:

```js

// getItem() მეთოდში ეთითება მისაღები key, ამ შემთხვევაში "userList"
// parse() მეთოდს json string-ი გადაყავს JS-ის ცვლადის ფორმატში
const users = JSON.parse(localStorage.getItem("userList"));

localStorage.getItem("userList")
// -ის ალტერნატივა არის:
localStorage.userList

```

### ლოკალური მეხსიერებიდან მონაცემების წაშლა

```js

// key-ის დახმარებით წაშლა
localStorage.removeItem("userList");

// ყველას წაშლა
localStorage.clear();

```