var express = require('express');
var router = express.Router();
var user_data = require("../lib/userInfo")

/* GET home page. */
router.get('/', function(req, res, next) {
  return res.json({user_data: user_data});
});
router.get('/activeUsers', function(req, res, next) {
  return res.json({user_data: user_data});
  console.log(user_data);
});

module.exports = router;
