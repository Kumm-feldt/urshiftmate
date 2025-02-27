const http = require('http');
const express = require('express');
const app = require("./app/app.js");

const config = require('./config.js')
const logger =  require("./logger.js")


// Create the server
const server = http.createServer(app);


// start the server
server.listen(config.httpPort, ()=>{ // function called once the server is running
    logger.info(`Server listening on port ${config.httpPort}`);

})

