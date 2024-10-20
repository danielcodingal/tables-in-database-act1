// Import the sqlite3 module
var sqlite3 = require('sqlite3').verbose();

// Open a connection to the database
var db = new sqlite3.Database('mydb.db', function (err) {
    if (err) {
        return console.error("Error connecting to the database: ", err.message);
    }
    console.log("Connected to the SQLite database.");
});

// SQL query to create a table
var createTableQuery = `
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL
);`;

// Execute the query to create the table
db.run(createTableQuery, function (err) {
    if (err) {
        return console.error("Error creating table: ", err.message);
    }
    console.log("Table 'users' created (if it didn't exist already).");
});

// Close the database connection
db.close(function (err) {
    if (err) {
        return console.error("Error closing the database: ", err.message);
    }
    console.log("Database connection closed.");
});
