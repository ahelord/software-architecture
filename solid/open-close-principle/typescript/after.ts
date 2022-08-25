abstract class Product {
    private sku: number
    public getSku() {
        return this.sku
    }
}
class Shoes extends Product {
    private size: number
}

class Videogame extends Product {
    private platform: string
}

class Catalog {
    private products: Product[]

    public getProducts(): Product[] {
        return this.products
    }
    public addProduct(product: Product): void {
        this.getProducts().push(product)
    }
    public getSkus(): string[] {
        return this.getProducts.map(product => product.getSku())
    }
}

const catalog = new Catalog()
const shoes = new Shoes()
const videogame = new Videogame()
catalog.addProduct(videogame);
catalog.addProduct(shoes);
catalog.getSkus()
