var express = require('express');
var router = express.Router();
var controller = require('../http/controller/hotelController');

router.get('/hotels', controller.all);

router.post('/hotel', function(req, res, next) {
    //TODO
});

module.exports = router;
