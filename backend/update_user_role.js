const mysql = require('mysql2');
require('dotenv').config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

const updateUserRole = async () => {
  const email = process.argv[2] || 'admin@example.com';
  const role = process.argv[3] || 'admin';
  
  if (!email) {
    console.log('Usage: node update_user_role.js <email> [role]');
    console.log('Example: node update_user_role.js user@example.com admin');
    process.exit(1);
  }

  connection.connect(async err => {
    if (err) {
      console.error('Error connecting: ' + err.stack);
      return;
    }
    console.log('Connected to database.');

    try {
      const [result] = await connection.promise().query(
        'UPDATE users SET role = ? WHERE email = ?',
        [role, email]
      );
      
      if (result.affectedRows > 0) {
        console.log(`Successfully updated role for ${email} to ${role}`);
      } else {
        console.log(`User with email ${email} not found`);
      }
    } catch (err) {
      console.error('Error updating user role:', err);
    } finally {
      connection.end();
    }
  });
};

updateUserRole();
