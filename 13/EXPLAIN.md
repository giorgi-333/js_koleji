


This project is a simple JavaScript application designed to demonstrate basic functionality and serve as a starting point for further development.

```javascript
// Your JavaScript code goes here
console.log("Hello, World!");
```
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
fruits.reverse();

This is how JavaScript's internal sorting engine works:

  fruits.sort((a, b) => a.localeCompare(b, 'ka')); // 'ka' = Georgian locale



# სორტირება JavaScript-ში

სორტირება არის ელემენტების გარკვეული წესრიგით განლაგების პროცესი, მაგალითად, ზრდადობით ან კლებადობით. JavaScript უზრუნველყოფს `sort()` მეთოდს მასივებისთვის, რომელიც შეიძლება მორგებული იყოს შედარების ფუნქციის გამოყენებით.

## ნაგულისხმევი სორტირება
ნაგულისხმევად, `sort()` მეთოდი გარდაქმნის ელემენტებს სტრინგებად და სორტირებას ახდენს ლექსიკოგრაფიულად.

```javascript
const numbers = [40, 100, 1, 5, 25, 10];
numbers.sort();
console.log(numbers); // შედეგი: [1, 10, 25, 40, 5, 100]
```

## მორგებული სორტირება შედარების ფუნქციით
რიცხვების ან კონკრეტული წესრიგით სორტირებისთვის, შეგიძლიათ მიაწოდოთ შედარების ფუნქცია.

### ზრდადობით სორტირება
```javascript
const numbers = [40, 100, 1, 5, 25, 10];
numbers.sort((a, b) => a - b);
console.log(numbers); // შედეგი: [1, 5, 10, 25, 40, 100]
```

### კლებადობით სორტირება
```javascript
const numbers = [40, 100, 1, 5, 25, 10];
numbers.sort((a, b) => b - a);
console.log(numbers); // შედეგი: [100, 40, 25, 10, 5, 1]
```

## სტრინგების სორტირება
სტრინგები ნაგულისხმევად ლექსიკოგრაფიულად სორტირდება.

```javascript
const fruits = ["banana", "apple", "cherry"];
fruits.sort();
console.log(fruits); // შედეგი: ["apple", "banana", "cherry"]
```

### რეგისტრისგან დამოუკიდებელი სორტირება
```javascript
const fruits = ["Banana", "apple", "Cherry"];
fruits.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
console.log(fruits); // შედეგი: ["apple", "Banana", "Cherry"]
```

## ობიექტების სორტირება
ობიექტების სორტირებისას საჭიროა მიუთითოთ შედარების თვისება.

```javascript
const people = [
    { name: "John", age: 25 },
    { name: "Jane", age: 30 },
    { name: "Alice", age: 20 }
];

people.sort((a, b) => a.age - b.age);
console.log(people);
// შედეგი: [
//   { name: "Alice", age: 20 },
//   { name: "John", age: 25 },
//   { name: "Jane", age: 30 }
// ]
```

## სტაბილური სორტირება
თანამედროვე ძრავებში JavaScript-ის `sort()` სტაბილურია, რაც ნიშნავს, რომ თანაბარი ელემენტები ინარჩუნებენ თავდაპირველ რიგს.

```javascript
const items = [
    { name: "item1", value: 10 },
    { name: "item2", value: 10 },
    { name: "item3", value: 5 }
];

items.sort((a, b) => a.value - b.value);
console.log(items);
// შედეგი: [
//   { name: "item3", value: 5 },
//   { name: "item1", value: 10 },
//   { name: "item2", value: 10 }
// ]
```

## შეჯამება
- გამოიყენეთ `sort()` ძირითადი სორტირებისთვის.
- მორგებული სორტირებისთვის მიაწოდეთ შედარების ფუნქცია.
- ფრთხილად იყავით რიცხვების სორტირებისას ნაგულისხმევი სტრინგზე დაფუძნებული სორტირებით.
- სორტირება სტაბილურია თანამედროვე JavaScript ძრავებში.
