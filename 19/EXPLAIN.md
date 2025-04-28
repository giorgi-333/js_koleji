
- [დავალებებზე დაბრუნება](README.md)

# sessionStorage

გამოყენება ხდება ისე როგორც localStorage-ის. (ნახეთ მე-18 ფოლდერი)  
მაგ:

```js

sessionStorage.id = 56

console.log(sessionStorage.id)

```
<!-- 
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
 -->
