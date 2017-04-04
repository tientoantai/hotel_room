'use strict';

var hotelRepository = require('../../app/Hotel/HotelRepository');

module.exports.all = function (req, res, next){
    hotelRepository.prototype.all().then(
        function (res){
            console.log(res);
        }, function (error){
            console.log(error);
        }
    );
};