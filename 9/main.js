


let inp1 = document.getElementById("inp-1")

inp1.addEventListener("input", event => {
    let value = event.target.value

    // Number(value)  სთრინგი გადაყავს ციფრად
    // +value იგივეა რაც Number()

    // parseInt("45.89") აბრუნებს მხოლოდ მთელ რიცხვს
    // parseFloat("45.98") აბრუნებს წილად რიცხვს (ასევე მთელსაც..)

    // parseFloat("45.98px") შეუძლია აქედან ციფრის წაკითხვა (Number-და + ოპერატორს არ შეუძლია, თუ მარტო ციფრი არ გადავეცით სთრინგის სახით)


    console.log(+value);
})

// 5 % 2  აბრუნებს ნაშთს


let name1 = "სახელი, გვარი"
// name[0] დაბეჭდავს პირველ სიმბოლოს (მასივის მსგავსად შეგვიძლია მივმართოთ)



function enterName() {
    // prompt() გვაძლევს ტექსტის ჩაწერის საშუალებას დიალოგში
    let val = prompt("ჩაწერეთ სახელი")
    console.log(+val);
}
