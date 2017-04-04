
exports.up = function(knex, Promise) {
    return knex.schema.table('rooms', function (table) {
        table.integer('hotel_id').unsigned();
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.table('room', function(table){
        table.dropColumn('hotel_id');
    })
};
