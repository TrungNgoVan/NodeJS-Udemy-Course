// productModel.js

const fs = require('fs');
const path = require('path');
const rootPath = require('../util/path');

const pathData = path.join(rootPath, 'data', 'product.json');

const getProductsFromFile = cb => {
    try {
        const fileContent = fs.readFileSync(pathData);
        cb(fileContent.length ? JSON.parse(fileContent) : []);
    } catch (err) {
        console.log('Error:', err);
        cb([]);
    }
}
class Product {
    constructor(title) {
        this.title = title;
    }

    save() {
        try {
            getProductsFromFile(products => {
                products.push(this);
                fs.writeFileSync(pathData, JSON.stringify(products), (err) => {
                    console.log(err);
                })
            })
        } catch (err) {
            console.log('Error:', err);
        }
    }

    static fetchAll(cb) {
        getProductsFromFile(cb);
    }
}

module.exports = Product;
