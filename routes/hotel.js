var express = require('express');
var router = express.Router();
var controller = require('../http/controller/hotelController');

router.get('/hotels', controller.all);

router.post('/hotel', controller.add);

module.exports = router;
