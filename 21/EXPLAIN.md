
- [დავალებებზე დაბრუნება](README.md)

# Cookies

### შენახვა: 

```js

document.cookie = "user=nika nemsiwveridze; path=/; expires=Fri, Thu, 18 Dec 2026 12:00:00 UTC";


```

### მიღება: 

```js

console.log(document.cookie)

```

### ვადის გასვლის დრო: მინიჭება / დაანგარიშება
---

- `date.toUTCString()` - თარიღის ფორმატი

```js

const date = new Date();
date.setTime(date.getTime() + (2 * 60 * 1000)); //  ამჟამინდელ დროს + 2 წუთი

const expires = "expires=" + d.toUTCString();

document.cookie = `testCookie=gamarjoba test; ${expires}; path=/`;

```

### წაშლა
---

წასაშლელად უბრალოდ ვანიჭებთ წარსულ დროს

```js

document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

```

## წაკითხვა key-ის მიხედვით

- `substring(indexStart)` -  **იწყებს სთრინგის წაკითხვას მითითებული ინდექიდან** (შეიძლება 2 პარამეტრის მითითებაც: დაწყება დასრულება ინდექსის)

```js

    const name1 = "user"
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookies = decodedCookie.split('; ');
    
    const cookie = cookies.find(c => c.startsWith(name1 + '='));
    
    console.log(cookie);
    
    if (cookie) {
        let value = cookie.substring(name1.length + 1);
        console.log(value);
    }

```

