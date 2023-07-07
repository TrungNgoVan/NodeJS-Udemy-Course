'use strict'

const Product = require('../models/productModel');

const index = (req, res, next) => {
    res.render('shop/index', {
        pageTitle: 'Shop',
        path: '/',
        activeShop: true,
        productCSS: true
    });
}

const checkout = () => {

}

const getCard = (req, res, next) => {
    res.render('shop/cart');
}

const getProducts = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('shop/product-list', {
            prods: products,
            pageTitle: 'Shop',
            path: '/products',
            hasProducts: products.length > 0,
            activeShop: true,
            productCSS: true
        });
    });
}

module.exports = {
    checkout,
    getCard,
    getProducts,
    index,
}


