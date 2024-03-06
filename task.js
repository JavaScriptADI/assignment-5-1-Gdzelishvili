const PRODUCT_COUNT = 50;

const products = [];

// Generate Products
// ეს ფუნქცია იღებს 2 პარამეტრს მინიმუმ ციფრს და მაქსიმუმს მათ შორის იძლევა რანდომ
// ციპრს


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

// ეს ფუნქცია იღებს პარამეტრად სტრინგის სიგრძეს და აგენერირებს რანდომ სტრინგს
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
// ეს კი 50 პროდუქტს უმატებს რანდომ სტრინგების სახით ერეის

for (let i = 0; i < PRODUCT_COUNT; i++)
    products.push({
        title: getRandomString(getRandomInt(30, 60)),
        price: getRandomInt(500, 5000),
        description: getRandomString(getRandomInt(300, 1000))
    })

    console.log(products);

    // 1. count average price



const totalPrice = products.reduce((acc, product) => acc + product.price, 0);


const averagePrice = totalPrice / products.length;

console.log(averagePrice);


// 2. count average words per description

products.forEach(description => {
    let splitCount = [];
    products.description.split("");
    splitCount++;

});