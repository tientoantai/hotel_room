var express = require('express');
var router = express.Router();
var controller = require('../http/controller/roomController');
var hotelIdFilter = require('../http/middleware/hotelIdFilter');
var hotelId = require('../http/middleware/hotelDataRequire');

router.get('/rooms/:hotelId', hotelIdFilter, controller.allOfHotel);

router.get('/lowestPrice/:hotelId', hotelIdFilter,controller.lowest);

router.post('/room', function(req, res, next) {
    //TODO
});

module.exports = router;
