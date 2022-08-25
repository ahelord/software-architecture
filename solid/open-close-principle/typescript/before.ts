class Shoes {
    private sku: number
    private size: number
    public getSku() {
        return this.sku
    }
}
class Catalog {
    private shoes: Shoes
    public getSkus() {
        return this.shoes.getSku()
    }
}

// need add more products to catalog
class Videogame {
    private platform: string
    private sku: string
    public getSku() {
        return this.sku
    }
}
class Catalog {
    private shoes: Shoes
    private videogame: Videogame

    public getSkus(): string[] {
        const skus: string[] = [];
        skus.push(this.videogame.getSku())
        skus.push(this.shoes.getSku())
        return skus
    }
}