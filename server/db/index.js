var mysql = require('mysql2');

// Create a database connection and export it from this file.
// Confirm that the credentials supplied for the connection are correct.
// On your personal computer supply the correct credentials for your mySQL account -- likely
// user: 'root', password: ''
// OR
// user: 'root', password: 'some_password_you_created_at_install'


const connection = mysql.createConnection({
  password: '',
  user: 'root',
  database: 'chat'
});

connection.query(
  'SELECT * FROM `users`',
  function(err, results, fields) {
    console.log(results);
  }
);