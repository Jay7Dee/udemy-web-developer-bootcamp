var faker = require('faker');

function products(num){
     for(var i=0; i<num; i++){
        var randomProduct = faker.commerce.productName();
        var randomPrice = faker.commerce.price();
        var productDescription = randomProduct + " - $" + randomPrice;
        console.log(productDescription);
    }
}

console.log("\n ================== \n WELCOME TO MY SHOP \n ==================");
products(10);
