var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/thanks', function(req, res, next){
  res.render('thankyou',{title: "Thank you"});
})


module.exports = router;
