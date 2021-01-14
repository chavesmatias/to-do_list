var express = require('express');
const indexController = require('../controllers/indexController');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.render ('index')
//   //res.send('respond with a resource');
// });

router.get ('/', indexController.task)
router.post ('/task', indexController.crear)

module.exports = router;
