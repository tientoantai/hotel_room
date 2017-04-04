var express = require('express');
var router = express.Router();
var controller = require('../http/controller/roomController');

router.get('/rooms/:hotelId', controller.allOfHotel);

router.get('/lowestPrice/:hotelId', controller.lowest);

router.post('/room', function(req, res, next) {
    //TODO
});

module.exports = router;
