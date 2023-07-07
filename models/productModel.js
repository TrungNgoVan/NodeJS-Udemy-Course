// productModel.js

const fs = require('fs');
const path = require('path');
const rootPath = require('../util/path');


class Product {
    constructor(title) {
        this.title = title;
    }

    save() {
        const pathData = path.join(rootPath, 'data', 'product.json'); // Create path to file
        try {
            const fileResult = fs.readFileSync(pathData);
            let products = [];
            if (fileResult.length != 0) {
                products = JSON.parse(fileResult);
            }
            products.push(this);
            fs.writeFileSync(pathData, JSON.stringify(products), (err) => {
                console.log(err);
            })
        } catch (err) {
            console.log('Error:', err);
        }
    }

    static fetchAll() {
        const pathData = path.join(rootPath, 'data', 'product.json');
        try {
            const fileContent = fs.readFileSync(pathData);
            const products = fileContent.length ? JSON.parse(fileContent) : [];
            return products;
        } catch (err) {
            console.log('Error:', err);
            return [];
        }
    }
}

module.exports = Product;
