var express = require('express');
var router = express.Router();
const UsersController = require('../controllers/usersController');

const usersController = new UsersController();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/register', usersController.register.bind(usersController));

router.post('/login', usersController.login.bind(usersController));

module.exports = router;
