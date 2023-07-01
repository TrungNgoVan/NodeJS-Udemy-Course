'use strict'
const http = require('http');
const fs = require('fs');

const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log('Hello ExpressJS');
    next(); // Allows the request to continue to the next middleware in line
})

app.use((req, res, next) => {
    console.log('Hello another ExpressJS');
})

app.listen(3000, () => {
    console.log('http://localhost:3000');
})
