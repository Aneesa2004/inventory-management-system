// ========================
// PART 1: Product Class
// ========================

// Calculates the total value of the product (price × quantity)

class Product {
    constructor(name, price, quantity) {
      this.name = name;
      this.price = price;
      this.quantity = quantity;
    }
  
    // Calculate total value in stock
    getTotalValue() {
      return this.price * this.quantity;
    }
  // Returns a formatted string with product details
    // Return a string describing the product
    toString() {
      return `Product: ${this.name}, Price: $${this.price.toFixed(2)}, Quantity: ${this.quantity}`;
    }
  
    // Static method to apply discount to an array of products
    static applyDiscount(products, discount) {
      products.forEach(product => {
        product.price -= product.price * discount;
      });
    }
  }
  
  // ==============================
  // PART 2: PerishableProduct Class
  // ==============================
  // Overrides toString to also show expiration date

  class PerishableProduct extends Product {
    constructor(name, price, quantity, expirationDate) {
      super(name, price, quantity);
      this.expirationDate = expirationDate;
    }
  
    // Override toString() to include expiration date
    toString() {
      return `${super.toString()}, Expiration Date: ${this.expirationDate}`;
    }
  }
  
  // ========================
  // PART 3: Store Class
  // ========================
  // Adds a product to the store's inventory
  class Store {
    constructor() {
      this.inventory = [];
    }
  
    // Add a product to the inventory
    addProduct(product) {
      this.inventory.push(product);
    }
  
    // Calculate total value of all products
    getInventoryValue() {
      return this.inventory.reduce((total, product) => {
        return total + product.getTotalValue();
      }, 0);
    }
  
    // Find a product by its name
    findProductByName(name) {
      return this.inventory.find(product => product.name === name) || null;
    }
  }
  
  // ========================
  // PART 4: Testing the System
  // ========================
  
  // Create normal products
  const apple = new Product("Apple", 2.5, 50);
  const banana = new Product("Yellow Banana", 1.2, 30);
  const rice = new Product("Rice", 10.0, 10);
  
  // Create perishable products
  const milk = new PerishableProduct("Milk", 1.5, 10, "2024-12-31");
  const yogurt = new PerishableProduct("Yogurt", 2.0, 5, "2024-11-15");
  
  // Create a store and add all products
  const store = new Store();
  store.addProduct(apple);
  store.addProduct(banana);
  store.addProduct(rice);
  store.addProduct(milk);
  store.addProduct(yogurt);
  
  // Print inventory value before discount
  // Log total inventory value before applying any discount
  console.log("Inventory value before discount: $" + store.getInventoryValue().toFixed(2));
  
  
  // Apply 15% discount to all products
  Product.applyDiscount(store.inventory, 0.15);
  
  // Print inventory value after discount
  // Log inventory value after applying 15% discount
  console.log("Inventory value after 15% discount: $" + store.getInventoryValue().toFixed(2));
  
  // Find and print a product by name
  // Search for a specific product in the inventory by name
  const foundProduct = store.findProductByName("Milk");
  if (foundProduct) {
    console.log("Found product: " + foundProduct.toString());
  } else {
    console.log("Product not found.");
  }
  