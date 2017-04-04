var knexConnecyionProvider = require('knex')({
    client: 'mysql',
    connection: {
        host : '127.0.0.1',
        user : 'root',
        password : 'root',
        database : 'hotel_test'
    },
    useNullAsDefault: true
});

module.exports = knexConnecyionProvider;