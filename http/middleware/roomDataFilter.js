'use strict';

module.exports = function (req, res, next) {
    if ( ! req.body.room_name){
        return res.status(422).json({"message": "Room name is required"})
    }
    if ( ! req.body.room_price){
        return res.status(422).json({"message": "Room price is required"})
    }
    if ( ! req.body.hotel_id){
        return res.status(422).json({"message": "You have to provide Hotel of this room"})
    }
    next();
};