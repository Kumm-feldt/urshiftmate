const http = require('http')
const app = require("./app.js");
const config = require("./config/config.js")
const logger = require("./logger.js")

// database
const db = require('./db.js')

// Create the server
const server = http.createServer(app);

// Call it the same way, but only pass config in dev
if (process.env.MODE === "dev") {
  db.connect(config.dbInfo)
    .then(() => {
      logger.info("Database connected (dev)");
      server.listen(config.PORT, () => {
        logger.info(`Server listening on port ${config.PORT}`);
      });
    })
    .catch((err) => {
      logger.error("Database connection failed", err);
    });
} else {
  db.connect()
    .then(() => {
      logger.info("Database connected (prod)");
      server.listen(config.PORT, () => {
        logger.info(`Server listening on port ${config.PORT}`);
      });
    })
    .catch((err) => {
      logger.error("Database connection failed", err);
    });
}
