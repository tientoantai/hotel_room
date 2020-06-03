
exports.up = function(knex, Promise) {
    return knex.schema.alterTable('rooms', function (table) {
        table.float('room_price').alter();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.alterTable('rooms', function (table) {
        table.string('room_price').alter();
    });
};
