'use strict';

var roomRepository = require('../../app/Room/RoomRepository');

module.exports.allOfHotel = function (req, res, next){
    roomRepository.prototype.all(req.params.hotelId).then(
        function (result){
            res.status(200).json(result);
        }, function (error){
            next(error);
        }
    );
};

module.exports.lowest = function (req, res, next){
    roomRepository.prototype.lowest(req.params.hotelId).then(
        function (result){
            res.status(200).json(result);
        }, function (error){
            next(error);
        }
    );
};

module.exports.add = function (req, res, next){
    roomRepository.prototype.add(req.body).then(
        function (result){
            res.status(201).json({"message": "Inserted"});
        }, function (error){
            next(error);
        }
    );
};