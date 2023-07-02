'use strict'
const adminRouter = require('./routes/adminRouter');
const shopRouter = require('./routes/shopRouter');

const path = require('path');
const bodyParser = require('body-parser');

const express = require('express');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRouter);
app.use('/', shopRouter);

// Handle 404 page 
app.use((req, res, next) => {
    res.status = 404;
    res.sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000, () => {
    console.log('http://localhost:3000');
});
