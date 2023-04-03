const express = require('express');
const cors = require('cors');
const server = require('./routes/index');

const app = express();

app.use(express.json());
app.use(cors());
app.use('/public', express.static(`${__dirname}/storage/imgs/`));

app.use('/', server);

module.exports = app;
