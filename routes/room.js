var express = require('express');
var router = express.Router();
var controller = require('../http/controller/roomController');
var hotelIdFilter = require('../http/middleware/hotelIdFilter');
var roomDatafilter = require('../http/middleware/roomDataFilter');

router.get('/rooms/:hotelId', hotelIdFilter, controller.allOfHotel);

router.get('/lowestPrice/:hotelId', hotelIdFilter,controller.lowest);

router.post('/room', roomDatafilter, hotelIdFilter, controller.add);

module.exports = router;
