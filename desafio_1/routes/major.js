var express = require('express');
var router = express.Router();

var data = {
    maiorMenor: "maior",
    age: 0
};

/* GET home page. */
router.get('/:idade', function (req, res, next) {
    data.age = req.params.idade;
    res.render('result.njk', data);
});

module.exports = router;
