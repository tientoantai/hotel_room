'use strict';

var hotelRepository = require('../../app/Hotel/HotelRepository');

module.exports.all = function (req, res, next){
    hotelRepository.prototype.all().then(
        function (result){
            res.status(200).json(result);
        }, function (error){
            next(error);
        }
    );
};

module.exports.add = function (req, res, next){
    hotelRepository.prototype.add(req.body).then(
        function (result){
            res.status(201).json({"message": "Inserted"});
        }, function (error){
            next(error);
        }
    );
};