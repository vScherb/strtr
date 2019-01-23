// 1st party
const path = require('path');

// 3rd party
const express = require('express');
const bodyParser = require('body-parser');

// globals
const router = express.Router();

router.use('/', express.static('dist'));

router.use(bodyParser.json());

router.use('/ajax', require('./ajax'));

router.use((request, response) =>
{
  response.sendFile(path.join(path.dirname(require.main.filename), 'dist/index.html'));
});

module.exports = router;