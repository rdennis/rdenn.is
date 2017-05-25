var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    page: {
      title: 'rdenn.is',
      permalink: '/',
      styles: ['index.css', 'foo.css']
    }
  });
});

module.exports = router;
