'use strict';

var hotelRepo = require('../../app/Hotel/HotelRepository');

module.exports = function (req, res, next) {
    var hotel_id = req.params.hotelId ? req.params.hotelId : req.body.hotel_id;
    hotelRepo.prototype.get(hotel_id).then(
        function(result){
            if ( result.length == 0){
                return res.status(400).json({"message": "The hotel is not exist"})
            }
            next();
        }, function (error){
            return res.status(500).json(error);
        }
    );
};