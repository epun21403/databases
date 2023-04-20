var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.users.getAll(res.body, function(err) {
      console.log('control-get', res.body);
      if (err) {
        throw err;
      } else {
        res.status(200);
        console.log('body->', res.body);
        res.end(JSON.stringify(res.body));
      }
    });
  },
  post: function (req, res) {
    models.users.create(req.body, function(err) {
      if (err) {
        throw err;
      } else {
        res.status(201);
        res.end('success');
      }
    });
  }
};
