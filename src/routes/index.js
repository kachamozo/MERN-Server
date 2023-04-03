const express = require('express');
const products = require('./products');

const server = express.Router();

server.use('/', products);
module.exports = server;
