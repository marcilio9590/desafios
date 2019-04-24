var express = require('express');
var router = express.Router();
const https = require('https');

var data = {
  title: "Formulário de Idade",
  name:"age"
};

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index.njk', data);
});

module.exports = router;