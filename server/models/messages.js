var db = require('../db');

module.exports = {
  getAll: function (callback) {
    var queryStr = 'SELECT messages.id, messages.message, messages.roomname FROM messages ORDER by messages.id DESC';
    db.query(queryStr, function(err, results) {
      callback(err, results);
    });
  },
  create: function (params, callback) {
    var queryStr = 'INSERT INTO messages (message, roomname, username) VALUES (?, ?, ?)';
    db.query(queryStr, params, function(err, results) {
      callback(results);
    });
  }
};
