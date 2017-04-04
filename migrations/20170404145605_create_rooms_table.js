'use strict';
exports.up = function(knex, Promise) {
    return knex.schema.createTable('rooms', function (table) {
        table.increments('room_id');
        table.string('room_name');
        table.string('room_price');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('rooms')
};