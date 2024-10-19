class ProductPriceManager {
    constructor() {
        this.productPrices = new Map();
    }

    addProduct(product, price) {
        this.productPrices.set(product, price);
    }

    increasePrice(product) {
        if (this.productPrices.has(product)) {
            const currentPrice = this.productPrices.get(product);
            const newPrice = currentPrice * 1.10; // გაზრდილი ფასი 10%-ით
            this.productPrices.set(product, newPrice);
            console.log(`${product} ახალი ფასი: ${newPrice.toFixed(2)}`);
        } else {
            console.log(`პროდუქტი ვერ მოიძებნა: ${product}`);
        }
    }
}

// გამოყენება
const manager = new ProductPriceManager();
manager.addProduct("სკუპი", 50.0);
manager.addProduct("ყინული", 30.0);

manager.increasePrice("სკუპი"); // გაზრდილი ფასი
manager.increasePrice("ყინული"); // გაზრდილი ფასი
manager.increasePrice("პური"); 

