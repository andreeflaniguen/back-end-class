class ProductManager {

    #products;
    static ids = 0;

    constructor() {
        this.#products = [];
    }

    addProduct(title, description, price, thumbnail, code, stock = 30) {
        ProductManager.ids += 1; 
        const newProduct = {
            id: ProductManager.ids,
            title,
            description,
            price: parseFloat(price), 
            thumbnail,
            code,
            stock: parseInt(stock, 10), 
        };

        this.#products.push(newProduct);

        return 'Producto agregado correctamente';
    }

    getProducts() {
        return this.#products;
    }

    getProductsById(id) {
        const product = this.#products.find(p => p.id == id);
        return product ? product : 'Not Found';
    }
}

const producto = new ProductManager(); 


console.log(producto.addProduct('Play', 'description', 2500, 'https://www.playstation.com/', '123456', 10));
console.log(producto.addProduct('Xbox', 'descriptiondos', 500, 'https://www.xbox.com/', '65421', 5));


console.log(producto.getProductsById(1));
// console.log(producto.getProducts());
console.log(producto.getProductsById(3));
