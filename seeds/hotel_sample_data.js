
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('hotels').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('hotels').insert([
          {hotel_id: 1, hotel_name: 'New World', hotel_address: 'HCM City'},
          {hotel_id: 2, hotel_name: 'New World', hotel_address: 'HCM City'},
          {hotel_id: 3, hotel_name: 'New World', hotel_address: 'HCM City'},
      ]);
    });
};
