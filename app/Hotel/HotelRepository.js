'use strict';

var Hotel = require('./Hotel');
var knex = require('../../database/knexConnection');

var HotelRepository = function (){

};

/**
 * @param Hotel hotel
 *
 */
HotelRepository.prototype.all = function(){
    return knex().select().from('hotels').timeout(1000)
};

/**
 * @param Hotel hotel
 *
 */
HotelRepository.prototype.add = function(hotel){
    return knex.insert(hotel).into('hotels');
};

HotelRepository.prototype.get = function(hotel_id){
    return knex.select().from('hotels')
        .where('hotel_id', '=', hotel_id);
};

module.exports = HotelRepository;