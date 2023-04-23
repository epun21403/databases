var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.messages.getAll(function(err, results) {
      res.json(results);
    });
  },
  post: function (req, res) {
    console.log('controller-post-messages', req.body);
    var params = [req.body.message, req.body.roomname, req.body.username];
    models.messages.create(params, function(err, results) {
      res.json(results);
    });
  }
};
