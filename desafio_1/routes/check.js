var express = require('express');
var router = express.Router();
const https = require('https');

/* GET home page. */
router.post('/', function (req, res, next) {
    let age = req.body.age;
    res.redirect(obterRota(age));
});

function obterRota(age) {
    let path = age >= 18 ? '/major' : '/minor';
    path += "/" + age;
    return path;
}

module.exports = router;