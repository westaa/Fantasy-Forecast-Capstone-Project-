// Update with your config settings.

// Update with your config settings.
module.exports = {

  development: {
    client: 'postgres',
    connection: 'postgres://localhost:5432/fantasy_forecast'
  },
  production: {
    client: 'postgres',
    connection: process.env.DATABASE_URL
  }

};
