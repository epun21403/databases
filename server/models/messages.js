var db = require('../db');

module.exports = {
  getAll: function () {}, // a function which produces all the messages
  create: function (body, callback) {
    db.query(
      `INSERT INTO messages (text, created_At, user_Id, chatroom)
      VALUES ('${body.text}', '${body.created_At}', '${body.user_Id}', '${body.chatroom}')`,
      function(err) {
        callback(err);
      }
    );
    console.log('messages success', body);
  } // a function which can be used to insert a message into the database
};
