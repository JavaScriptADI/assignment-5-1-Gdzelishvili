# Homework5

კომენტარის სახით ახსენით თითოეული ხაზი რას აკეთებს.

შემდეგ შეასრულეთ მოცემული ამოცანები:

1. count average price
2. count average words per description
3. count average characters per description
4. count maximum words in descriptions
5. count minimum price in descriptions


(მოგიწევთ გაარკვიოთ რა არის object-ი)

```javascript
const PRODUCT_COUNT = 50;

const products = [];

// Generate Products
// ეს ფუნქცია იღებს 2 პარამეტრს მინიმუმ ციპრს და მაქსიმუმს მათ შორის იძლევა რანდომ
// ციპრს


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

// ეს ფუნქცია ირებს პარამეტრად სტრინგის სიგრძეს და აგენერირებს რანდომ სტრინგს
function getRandomString(length) {
    let text = '';
    for (let i = 0; i < length; i++) {
        if (getRandomInt(0, 100) > 10)
            text += String.fromCharCode(getRandomInt(97, 122));
        else
            text += ' ';
    }
    return text;
}
// ეს კი 50 პროდუქტს უმატებს რანდომ სტრინგების სახით არაეის
for (let i = 0; i < PRODUCT_COUNT; i++)
    products.push({
        title: getRandomString(getRandomInt(30, 60)),
        price: getRandomInt(500, 5000),
        description: getRandomString(getRandomInt(300, 1000))
    })

```
