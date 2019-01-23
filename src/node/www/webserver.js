// 1st party
const path = require('path');

// 3rd party
const express = require('express');

// globals
const app = express();

app.set('port', process.env.PORT || 47129);

app.use(require.main.require('./src/node/www/router'));

module.exports = app;