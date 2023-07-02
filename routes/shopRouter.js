const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    console.log('Express hello');
    res.send('<h1>ExpressJS Server</h1>');
    // next(); // Allows the request to continue to the next middleware in line
});

module.exports = router;
