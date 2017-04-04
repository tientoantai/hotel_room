// Update with your config settings.

module.exports = {

    development: {
        client: 'mysql',
        connection: {
            host : '127.0.0.1',
            user : 'root',
            password : 'root',
            database : 'hotel_test'
        }
    },

    staging: {
        client: 'mysql',
        connection: {
            host : '127.0.0.1',
            user : 'your_database_user',
            password : 'your_database_password',
            database : 'myapp_test'
        },
        pool: {
          min: 2,
          max: 10
        },
        migrations: {
          tableName: 'knex_migrations'
        }
    },

    production: {
        client: 'postgresql',
        connection: {
          database: 'my_db',
          user:     'username',
          password: 'password'
        },
        pool: {
          min: 2,
          max: 10
        },
        migrations: {
          tableName: 'migrations'
        }
    }

};
