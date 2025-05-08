- [დავალებებზე დაბრუნება](README.md)

# Window ობიექტი

```js

  window.open("news.html") // ლინკის გახსნა 
  window.open("news.html", "_self") // ლინკის გახსნა ახალ გვერდზე
  window.innerWidth // გვერდის სიგანე
  window.innerHeight // გვერდის სიმაღლე

```

# Navigator ობიექტი

```js

  navigator.userAgent // ინფორმაცია ბრაუზერის და ოპერაციული სისტემის შესახებ

```

# Screen ობიექტი

```js

  screen.height // მოწყობილობის ეკრანის სიგანე
  screen.width // მოწყობილობის ეკრანის სიმაღლე

```

## ეკრანის ზომის შეცვლის ივენთი

`window.addEventListener('resize', event => {})`

# History ობიექტი

```js

history.back(); // წინა გვერდზე დაბრუნება
history.forward(); //  დაბრუნებულ გვერდზე დაბრუნება
  
```

# Location ობიექტი

```js

  location.href // სრული მისამართის მიღება
  location.href = "news.html"; // მისამართის შეცვლა
  location.hostname	// ჰოსტის სახელის მიღება: მაგ."example.com"
  location.search // პარამეტრების მიღება: მაგ. "?name=nika&age=30"
  location.reload() // გვერდის დარეფრეშება

```

# URl პარამეტრებთან მუშაობა

```js

const params = new URLSearchParams(location.search);

if (params.has('name')) {
  console.log(params.get('name'));
}

```