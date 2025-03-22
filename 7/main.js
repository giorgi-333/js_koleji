 
 let res1 = document.querySelector("#res-1");

 let personName = "nika"
 let personSurname = "iadze"
 let personMobile = "555998877"
 let personAge = 89

 let person = {
    name: "lika",
    surname: "diasamnidze",
    mobile: "555998877",
    age: 77,
    jobs: {
        a: {
            b: {
                c: {
                    name: "sxva"
                }
            }
        }
    }
 }

 let persons = {
    nika: {
        age: 34,
        jobs: "webv"
    },
    lika: {
        age: 55,
        jobs: "html maker"
    }
 }

//  person["mobile"] არის იგივე person.mobile

 function getPerson(myKey) {
    console.log(persons[myKey])
 }
 getPerson("nika")
 getPerson("lika")

//  console.log(person.jobs.a.b.c.name)

 console.log("name:", person.name, "age:",person.age)

//  res1.textContent = person

 console.log("name:", personName, "age", personAge)

//  

// let names = [1,4,3,6,2,67,23444]
let names = ["nika","sergo","giorgi"]
// names[2] 
console.log(names)

for(let i=0; i < names.length; i++) {
    console.log( names[i], i )
}

// res1.textContent = names[2]


// let redBoxes = document.getElementsByClassName("red")
let redBoxes = document.querySelectorAll(".red")

console.log(redBoxes)

for(let i =0; i< redBoxes.length; i++) {
    // redBoxes[i].classList.contains("active")
    // let j = i + 1
    redBoxes[i].textContent = "changed text " + (i+1)
}


 