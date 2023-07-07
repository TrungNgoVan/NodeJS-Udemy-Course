'use strict'
const products = [];

const addProduct = (req, res, next) => {
    res.render('add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
    });
};

const postProduct = (req, res, next) => {
    products.push({ title: req.body.title });
    res.redirect('/');
};

const getProduct = (req, res, next) => {
    res.render('shop', {
        prods: products,
        pageTitle: 'Shop',
        path: '/',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
    });
}

module.exports = {
    addProduct,
    postProduct,
    getProduct
}


