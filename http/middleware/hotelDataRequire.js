'use strict';

module.exports = function (req, res, next) {
    if ( ! req.body.hotel_name){
        return res.status(422).json({"message": "Hotel name is required"})
    }
    if ( ! req.body.hotel_address){
        return res.status(422).json({"message": "Hotel address is required"})
    }
    next();
};