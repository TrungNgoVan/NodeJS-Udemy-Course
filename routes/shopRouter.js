const path = require('path');
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    console.log('Express hello');
    res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
    // next(); // Allows the request to continue to the next middleware in line
});

module.exports = router;
