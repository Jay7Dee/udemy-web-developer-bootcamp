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

//Should print this below.

 ================== 
 WELCOME TO MY SHOP 
 ==================
Licensed Granite Fish - $919.00
Rustic Granite Gloves - $318.00
Handmade Metal Table - $366.00
Small Soft Chips - $400.00
Refined Granite Pants - $161.00
Handmade Rubber Mouse - $431.00
Sleek Steel Shoes - $64.00
Practical Plastic Bike - $894.00
Generic Fresh Table - $172.00
Small Soft Towels - $669.00
