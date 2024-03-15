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

let descriptionSplitCount = [];

products.forEach(product => {
    let splitCount = product.description.split(" ");
    descriptionSplitCount.push(splitCount.length + 1);
});

let wordCuntForDescription = 0

for (let i = 0; i < descriptionSplitCount.length-1; i++) {
    wordCuntForDescription += descriptionSplitCount[i];
    
}

countAverageWords = wordCuntForDescription / descriptionSplitCount.length

console.log(parseInt(countAverageWords));


// 3. count average characters per description

let charactersLength = [];

products.forEach(product => {
    let splitCount = product.description.split(" ");
    charactersLength.push(product.description.length - splitCount.length);
    
});

const totalCharacters = charactersLength.reduce((acc, character) => acc + character, 0);


countAverageCharacter = totalCharacters / charactersLength.length

console.log(countAverageCharacter);


// 4. count maximum words in descriptions

let maxWords = 0;

products.forEach(product => {
    let splitCount = product.description.split(" ");
    if(maxWords<splitCount.length + 1){
        maxWords = splitCount.length + 1
    }
    
});

console.log(maxWords);

// 5. count minimum price in descriptions

let minPrice = 0

products.forEach(product => {
    if(minPrice<product.price){
        minPrice = product.price
    }
    
});

console.log(minPrice);