const mysql = require('mysql')

module.exports = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "tribal12",
    database: "remedfrontend",
    port: "3306"
});