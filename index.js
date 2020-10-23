const winston = require("winston");
const express = require("express");
const config = require("config");
const app = express();
const multer = require('multer');
const path = require('path');
require("./startup/logging")();
require("./startup/cors")(app);
require("./startup/routes")(app);
require("./startup/db")();
require("./startup/config")();
require("./startup/validation")();
require('./startup/prod')(app);

const storage = multer.diskStorage({
  destination:'public/uploads',
  filename : function(req,file,callback){
    callback(null,file.fieldname+'-'+Date.now()+path.extname(file.originalname));

  }
})
const upload = multer({
  storage:storage
}).single('myImage');


const port = process.env.PORT || config.get("port");
const server = app.listen(port, () =>
  winston.info(`Listening on port ${port}...`)
);

module.exports = server;
