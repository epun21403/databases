var models = require('../models');

var headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept, authorization',
  'access-control-max-age': 10,
  'Content-Type': 'application/json'
};

module.exports = {
  get: function (req, res) {
    res.writeHead(200, headers);
    // we have to call controllers.messages.getAll & .create
    console.log(models.messages.getAll, '<- getAll');
    models.messages.getAll((rows) => {
      response.end(JSON.stringify(rows));
    });
  }, // a function which handles a get request for all messages
  post: function (req, res) {} // a function which handles posting a message to the database
};
