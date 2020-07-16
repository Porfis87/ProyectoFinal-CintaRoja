class ProductsClass {
    constructor(article, category, color, price, id) {
        this[id] = {
            article: article,
            category: category,
            color: color,
            price: price
        }
    }
}

module.exports = { ProductsClass }