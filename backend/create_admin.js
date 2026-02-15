const mysql = require('mysql2');
const bcrypt = require('bcryptjs');
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
    const [existing] = await connection.promise().query('SELECT * FROM users WHERE email = ?', ['admin@example.com']);
    
    if (existing.length > 0) {
      console.log('Admin already exists.');
      connection.end();
      return;
    }

    const hashedPassword = await bcrypt.hash('admin123', 10);
    await connection.promise().query(
      'INSERT INTO users (username, email, password, role) VALUES (?, ?, ?, ?)',
      ['admin', 'admin@example.com', hashedPassword, 'admin']
    );
    
    console.log('Admin created successfully!');
    console.log('Email: admin@example.com');
    console.log('Password: admin123');
  } catch (err) {
    console.error('Error:', err);
  } finally {
    connection.end();
  }
});
