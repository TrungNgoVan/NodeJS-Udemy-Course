'use strict'
const http = require('http');
const fs = require('fs');
const bodyParser = require('body-parser');

const express = require('express');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/add-product', (req, res, next) => {
    res.send('<form action="/product" method="POST"><input type ="text" name="title"><button type="submit">Add product</button></form>');
});

app.use('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

app.use('/', (req, res, next) => {
    console.log('Hello ExpressJS');
    res.send('<h1>ExpressJS Server</h1>');
    // next(); // Allows the request to continue to the next middleware in line
});

app.listen(3000, () => {
    console.log('http://localhost:3000');
});
