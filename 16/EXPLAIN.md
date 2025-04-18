- [დავალებებზე დაბრუნება](README.md)


# თარიღები

### თარიღის ობიექტის შექმნა

```js
const date1 = new Date();
const date2 = new Date("2000-04-12"); // yyyy-MM-dd
const date3 = new Date("2025-04-11T10:26") // თარიღი და დრო
const date4 = new Date(2025, 3, 12, 16, 30); // წელი, თვე (0-დან), დღე, საათი, წუთი

console.log(date1,date2,date3); 
```

### თარიღიდან სხვადასხვა ინფორმაციის მიღება

> ყველა მეთოდისთვის იხილეთ ცხრილი

```js 
date1.getFullYear() // 2025
```

### თარიღის შეცვლა

ცვლის დღეებს ანუ ამატაბეს 7 დღეს
```js
date1.setDate(date1.getDate() + 7); // ამატებს 
```

### თარიღების სხვაობა

```js
  const start = new Date("2025-04-01");
  const end = new Date("2025-04-12");

  // განსხვავებას აბრუნებს მილიწამებში
  const diffInMs = end - start;

  // მილიწამის გადაყვანა დღეებში & დამრგვალება მეტობით
  const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));
```

### თარიღის ინფუთები Html-ში
`type="date"` აბრუნებს და იღებს ფორმატს: `"yyyy-MM-dd"` <br>
`type="datetime-local"` აბრუნებს და იღებს ფორმატს: `"yyyy-MM-ddThh:mm"` (`T` სიმბოლო უბრალოდ ემატება თარიღის და დროის გამოსაყოფად).
```html
<input type="date"> 
<input type="datetime-local">
```

### თარიღის მეთოდები


| მეთოდი                  | აღწერა                   |
|-------------------------|---------------------------|
| `getFullYear()`         | აბრუნებს წელს            |
| `getMonth()`            | თვე (0-11)               |
| `getDate()`             | თვის დღე ანუ რიცხვი (1-31)         |
| `getDay()`              | კვირის დღე (0-6)        |
| `getHours()`            | საათი (0-23)             |
| `getMinutes()`          | წუთი (0-59)             |
| `getSeconds()`          | წამი (0-59)              |
| `getMilliseconds()`     | მილიწამი (0-999)        |
| `setFullYear(year)`     | ანიჭებს წელს             |
| `toISOString()`         | გადაყავს ISO 8601 სტანდარტის string-ში          |
| `toDateString()`        |  `"Sun Apr 13 2025"`                            |
| `toTimeString()`        | `"16:41:57 GMT+0400 (Georgia Standard Time)"`   |

### ციფრების ფორმატირების მეთოდები

| მეთოდი       | აღწერა                          | Example   |
|---------------|---------------------------------|-----------|
| `Math.ceil()` | მეტობით დამრგვალება            | 4.1 → 5   |
| `Math.floor()`| კლებადობით დამრგვალება        | 4.9 → 4   |
| `Math.round()`| უახლოეს ციფრზე დამრგვალება    | 4.5 → 5   |

მაგალითი: 
```js
let res = Math.ceil(4.1) // 5
```

### თარიღის ფორმატირების აღმნიშვნელი სიმბოლოები

> ცხრილი გამარტივებულია, [დეტალებისთვის გაეცანით ამ ვებგვერდს](https://cldr.unicode.org/translation/date-time/date-time-symbols)

| სიმბოლო | აღწერა           | მაგალითი |
|----------|------------------|-----------|
| yyyy     | წელი            | 2025       |
| MM       | თვე             |  04       |
| dd       |  რიცხვი         | 30       |
| hh       | საათი           | 10       |
| mm       | წუთი           | 30       |

### ციფრების სთრინგზე გადაყვანა

```js
let x = 34
let a = String(34) // მაგალითი #1
let b = x.toString() // მაგალითი #2

```

### padStart მეთოდი

მოცემული მეთოდი მუშაობს სთრინგებზე
`str1.padStart(length, insertSymbols)`

- `length` - რამდენი სიმბოლო გვსურს დააბრუნოს
- `insertSymbols` - სიმბოლოები რომლებსაც დაამატებს სთრინგს მანამ სანამ მითითებულ რაოდენობამდე არ შეავსებს

მაგალითი:
```js
const str1 = "5";

console.log(str1.padStart(2, "0")); // 05

```

მაგალითი #2:
```js
const str1 = "25";

console.log(str1.padStart(2, "0")); // 25 
// ანუ აქ არაფერი დაუმატა რადგან 2 სიმბოლოს დაბრუნება გადავეცით, მაგრამ უკვე იყო სთრინგი 2 სიმბოლოსგან შემდგარი

```





