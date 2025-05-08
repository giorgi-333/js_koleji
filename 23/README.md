### [დოკუმენტაცია](EXPLAIN.md)

# დავალება 1

გააკეთეთ 3 გვერდი, ღილაკზე დაჭერით შეგეძლოთ ნავიგაცია ნებისმიერ გვერდზე და ასევე ყველა გვერდს ქონდეს უკან დაბრუნების ღილაკი ანუ ფოტო ( მსგავსი ისრის აიქონი: <-- )

# დავალება 2

- საიტის ჩატვირთვისას div-ში დაიბეჭდოს მთლიანი ეკრანის და ასევე გვერდის ზომები

- გვერდის ზომების შეცვლაზე გამოიტანეთ განახლებული ციფრები 

# დავალება 3

- დაბეჭდეთ ჰოსტის სახელი
- დაამატეთ რეფრეშის ღილაკი (აიქონი)

# დავალება 4

![არ ხსნის?](main-page.png)

- ფოტოზე და სახელზე დაჭერისას გაიხსნას ახალი გვერდი
- გვერდს პარამეტრად გადაეცით პროდუქტის აიდი
- გახსნილ გვერდზე აიდის მიხედვით გამოაჩინეთ პროდუქტის სრული ინფორმაცია (აღწერის `"description"-ის`  ჩათვლით)

![არ ხსნის?](product-page.png)

```js
const shopList = [
  {
      "id": 1,
      "name": "Faded-Effect Polo Shirt",
      "price": 55,
      "image": "./images/shirt3.jpg",
      "category": "t-shirt",
      "description": "This faded-effect polo shirt combines classic style with a modern twist. Made from soft, breathable fabric, it's perfect for casual outings or semi-formal events. Easy to pair with jeans or shorts."
  },
  {
      "id": 2,
      "name": "Lengo style retro",
      "price": 155,
      "image": "./images/shirt4.jpg",
      "category": "t-shirt",
      "description": "The Lengo style retro t-shirt features a unique vintage design and comfortable fit. Its high-quality cotton ensures durability and softness, making it ideal for everyday wear or special occasions."
  },
  {
      "id": 3,
      "name": "Nike Kids Revolution",
      "price": 22.9,
      "image": "./images/shoe3.jpg",
      "category": "shoes",
      "description": "Nike Kids Revolution shoes are designed for active children. Lightweight and supportive, they provide excellent cushioning and grip, making them perfect for running, playing, and all-day comfort."
  },
  {
      "id": 4,
      "name": "Embroidered T-Shirt",
      "price": 45,
      "image": "./images/shirt1.jpg",
      "category": "t-shirt",
      "description": "This embroidered t-shirt stands out with its intricate detailing and premium fabric. The relaxed fit ensures comfort, while the stylish embroidery adds a touch of elegance to any casual outfit."
  },
  {
      "id": 5,
      "name": "Skinny Fit Jeans",
      "price": 65,
      "image": "./images/jeans4.jpg",
      "category": "jeans",
      "description": "Our skinny fit jeans offer a sleek, modern silhouette. Crafted from stretch denim, they provide flexibility and comfort for all-day wear. Perfect for pairing with t-shirts, shirts, or jackets."
  },
  {
      "id": 6,
      "name": "Retro red shoe",
      "price": 19.9,
      "image": "./images/shoe2.jpg",
      "category": "shoes",
      "description": "Step back in time with these retro red shoes. Their bold color and classic design make them a standout choice. Durable materials ensure long-lasting wear for both casual and sporty looks."
  },
  {
      "id": 7,
      "name": "Stitch Disney Wide-Leg",
      "price": 119,
      "image": "./images/jeans3.jpg",
      "category": "jeans",
      "description": "The Stitch Disney wide-leg jeans feature playful embroidery and a relaxed fit. Made from premium denim, they offer comfort and style, making them a fun addition to any Disney fan's wardrobe."
  },
  {
      "id": 8,
      "name": "Wide-Leg Jeans",
      "price": 89,
      "image": "./images/jeans2.jpg",
      "category": "jeans",
      "description": "These wide-leg jeans provide a trendy, comfortable fit. Their versatile design makes them suitable for both casual and dressy occasions. Pair with your favorite top for a chic, effortless look."
  },
  {
      "id": 9,
      "name": "New Balance Kids",
      "price": 22.9,
      "image": "./images/shoe4.jpg",
      "category": "shoes",
      "description": "New Balance Kids shoes are built for comfort and durability. With a supportive sole and breathable materials, they keep little feet happy during sports, school, or everyday adventures."
  },
  {
      "id": 10,
      "name": "Marine Jeans",
      "price": 79,
      "image": "./images/jeans1.jpg",
      "category": "jeans",
      "description": "Marine jeans feature a classic cut and sturdy denim fabric. Their timeless style makes them a wardrobe staple, suitable for any occasion, from casual outings to more formal gatherings."
  },
  {
      "id": 11,
      "name": "T-Shirt with Embroidered",
      "price": 85,
      "image": "./images/shirt2.jpg",
      "category": "t-shirt",
      "description": "This t-shirt with embroidered details offers a blend of comfort and sophistication. The soft fabric and unique embroidery make it a standout piece for those who appreciate subtle, stylish accents."
  },
  {
      "id": 12,
      "name": "Retro traning",
      "price": 99.9,
      "image": "./images/shoe1.jpg",
      "category": "shoes",
      "description": "Retro training shoes combine vintage aesthetics with modern comfort. Their cushioned insole and durable outsole make them perfect for workouts, walks, or adding a retro vibe to your outfit."
  }
]
```
