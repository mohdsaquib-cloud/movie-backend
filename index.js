
const winston = require('winston')
const express = require('express');
const app = express();
const cors = require('cors')
app.use(cors())
require('./startup/logging')();
require('./startup/routes')(app);
require('./startup/db')();
require('./startup/config')();
require('./startup/validation')();

const port = process.env.PORT || 7000;
const server  = app.listen(port, () => winston.info(`Listening on port ${port}`))
module.exports = server;