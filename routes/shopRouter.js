const rootDir = require('../utils/path');

const path = require('path');
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;
