'use strict';
exports.up = function(knex, Promise) {
    return knex.schema.createTable('hotels', function (table) {
        table.increments('hotel_id');
        table.string('hotel_name');
        table.string('hotel_address');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('hotels')
};