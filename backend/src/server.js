const http = require('http')
const app = require("./app.js");
const config = require("./config/config.js")
const logger =  require("./logger.js")

// database
const db = require('./db.js')


// Create the server
const server = http.createServer(app);


// Call it the same way, but only pass config when in dev

    db.connect(config.dbInfo)
    .then(()=>{
        logger.info("Database connected")
        // start the server
        server.listen(config.httpPort, ()=>{ // function called once the server is running
        logger.info(`Server listening on port ${config.httpPort}`);

    })
    })
    .catch(err=>{
        logger.error(err)

    })

