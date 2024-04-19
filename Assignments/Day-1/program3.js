// DAY 1 ASSIGNMENT 1

// PROBLEM STATEMENT 3:- OBJECTS AND PROPERTIES

// You're are creating an online store. Define a JS object named "product" with the following properties:
// - name(string)
// - price(number)
// - inStock(boolean)
// Create at least three products using your object template and display their details using console.log


const product = {
    name: "",
    price: 0,
    inStock:false,
    
    displayDetails: function() {
        console.log(`Name: ${this.name}, Price: $${this.price}, In Stock: ${this.inStock ? 'Yes' : 'No'}`);
      }
};

const product1 =  Object.create(product);
product1.name = "shirt";
product1.price=25;
product1.inStock=true;
product1.displayDetails();

const product2 = Object.create(product);
product2.name = "Shorts";
product2.price=20;
product2.inStock= false;
product2.displayDetails();

const product3 = Object.create(product);
product3.name = "Laptops";
product3.price = 450;
product3.inStock= true;
product3.displayDetails();