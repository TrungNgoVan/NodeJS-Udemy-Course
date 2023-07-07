'use strict'
const express = require('express');
const router = express.Router();
const productController = require('../controllers/shopController');

router.get('/', productController.index);
router.get('/products', productController.getProducts);
router.get('cart', productController.getCard);
router.get('/checkout', productController.checkout)
module.exports = router;
