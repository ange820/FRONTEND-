const mysql = require('mysql2');
require('dotenv').config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

connection.connect(async err => {
  if (err) {
    console.error('Error connecting: ' + err.stack);
    return;
  }

  try {
    await connection.promise().query('ALTER TABLE users ADD COLUMN role VARCHAR(50) DEFAULT "user"');
    console.log('Role column added successfully!');
  } catch (err) {
    console.error('Error:', err.message);
  } finally {
    connection.end();
  }
});
