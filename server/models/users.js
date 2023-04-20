var db = require('../db');

module.exports = {
  getAll: function (callback) {
    db.query('SELECT * FROM users', function(err, results) {
      if (err) {
        callback(err);
      } else {
        callback (results);
      }
    });
  },
  create: function (body, callback) {
    db.query(
      `INSERT INTO users (name) VALUES ('${body.username}')`,
      function(err, results) {
        if (err) {
          throw (err);
        } else {
          callback(results);
        }
      }
    );
  }
};
