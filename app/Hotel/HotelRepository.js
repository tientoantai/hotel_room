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

module.exports = HotelRepository;