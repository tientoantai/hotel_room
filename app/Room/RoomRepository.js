'use strict';

var Room = require('../Room/room');
var knex = require('../../database/knexConnection');

var RoomRepository = function (){

};

RoomRepository.prototype.all = function(hotel_id){
    return knex().select().from('rooms').where('hotel_id', '=', hotel_id).timeout(1000)
};

RoomRepository.prototype.lowest = function(hotel_id){
    return knex('rooms').orderBy('room_price', 'asc').limit(1).where('hotel_id', '=', hotel_id).timeout(1000)
};

RoomRepository.prototype.add = function(room){
    return knex.insert(room).into('rooms');
};

module.exports = RoomRepository;