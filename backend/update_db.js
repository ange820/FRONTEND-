const mysql = require('mysql2');
require('dotenv').config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

connection.connect(err => {
  if (err) {
    console.error('Error connecting: ' + err.stack);
    return;
  }
  console.log('Connected to database.');

  const addRoleColumn = "ALTER TABLE users ADD COLUMN role VARCHAR(50) DEFAULT 'user' AFTER password";

  connection.query(addRoleColumn, (err, results) => {
    if (err) {
      if (err.code === 'ER_DUP_COLUMN_NAME') {
        console.log('Role column already exists.');
      } else {
        console.error('Error adding role column:', err);
      }
    } else {
      console.log('Role column added successfully.');
    }
    connection.end();
  });
});
