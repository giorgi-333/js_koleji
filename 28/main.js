
// ბრუნდება Promise 1 წამში
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 1 წამში!");
    }, 1000);
});

promise1.then(result => { // Promise-ს გამოყენება then მეთოდით 
    console.log(result);
});

async function callPromise() {  // Promise-ს გამოყენება await-ის გამოყენებით
    try {
        const result = await promise1;
        console.log("შედეგი:", result);
    } catch (error) {
        console.log("ერორი:", error);
    }
}

callPromise(); // Async/Await-ის გამოყენება


// Promise-ის გამოყენება 
function sumOfNubers(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === "number" && typeof b === "number") {
                resolve(a + b);
            } else {
                reject("ორივე რიცხვი უნდა იყოს ციფრი.");
            }
        }, 2000);
    });
}

sumOfNubers(5, 7)
    .then(sum => {
        console.log("ჯამი:", sum); 
    })
    .catch(error => {
        console.log("ერორი:", error);
    });


// დოკუმენტის სრულად ჩატვირთვის შემდეგ ფუნქციის გამოყენება
document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded", Date.now());
});

console.log(Date.now());