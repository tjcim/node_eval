var express = require('express');
var router = express.Router();

var user_controller = require('../controllers/userController');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/cool/', function(req, res, next) {
  res.send('You got it');
});

router.post('/here', user_controller.user_eval_post);

module.exports = router;
