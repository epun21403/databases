var controller = require('./controllers');
var router = require('express').Router();

//Connect controller methods to their corresponding routes
router.get('/messages', controller.messages.get);
// done +
router.post('/messages', controller.messages.post);

router.get('/users', controller.users.get);
// done +
router.post('/users', controller.users.post);


module.exports = router;

