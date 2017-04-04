'use strict';

var Hotel = require('./Hotel');
var knex = require('knex')({
    client: 'mysql',
    connection: {
        host : '127.0.0.1',
        user : 'root',
        password : 'root',
        database : 'hotel_test'
    },
    useNullAsDefault: true
});

var HotelRepository = function (){

};

/**
 * @param Hotel hotel
 *
 */
HotelRepository.prototype.all = function(){
    knex().select().from('hotels').timeout(1000)
        .then(function (res) {
            return res;
        }, function(error) {
            console.log(error);
        });

};

/**
 * @param Hotel hotel
 *
 */
HotelRepository.prototype.add = function(hotel){
    knex()
};

module.exports = HotelRepository;