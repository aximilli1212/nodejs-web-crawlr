var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(`NWC API - listening on port`)
});

module.exports = router;
