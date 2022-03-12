// Use the MariaDB Node.js Connector
var mariadb = require("mariadb");

// Create a new (connection) Pool
var pool = 
  mariadb.createPool({
    host: "127.0.0.1", 
    port: 3306,
    user: "socialsv", 
    password: "125425496",
    database: "social"
  });

// Expose the Pool object within this module
module.exports = Object.freeze({
  pool: pool
});