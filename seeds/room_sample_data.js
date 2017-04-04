
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('rooms').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('rooms').insert([
          {room_id: 1, room_name: 'Sun flowers', room_price: 100, hotel_id: 1},
          {room_id: 2, room_name: 'Roses', room_price: 95, hotel_id: 1},
          {room_id: 3, room_name: 'Cherry', room_price: 101, hotel_id: 2}
      ]);
    });
};
