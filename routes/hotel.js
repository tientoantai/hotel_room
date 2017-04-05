var express = require('express');
var router = express.Router();
var controller = require('../http/controller/hotelController');
var hotelDataFilter = require('../http/middleware/hotelDataRequire');

router.get('/hotels', controller.all);

router.post('/hotel', hotelDataFilter, controller.add);

module.exports = router;
