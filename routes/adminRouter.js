'use strict'
const express = require('express');
const router = express.Router();
const productController = require('../controllers/adminController');

// /admin/add-product => GET
router.get('/add-product', productController.addProduct);

// /admin/add-product => GET
router.get('/products', productController.checkProduct);

// /admin/add-product => POST
router.post('/add-product', productController.postProduct);

module.exports = router;
