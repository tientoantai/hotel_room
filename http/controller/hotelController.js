'use strict';

var hotelRepository = require('../../app/Hotel/HotelRepository');

module.exports.all = function (req, res, next){
    return hotelRepository.prototype.all();
};