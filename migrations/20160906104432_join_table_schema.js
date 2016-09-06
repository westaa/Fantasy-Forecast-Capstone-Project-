exports.up = function(knex, Promise) {
  return knex.schema.createTable('usersPlayers', function(table) {
    table.increments('id').primary();
    table.integer('userId').unsigned().references('id').inTable('users');
    table.integer('playerId').unsigned().references('id').inTable('players');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('usersPlayers');
};

  // table.integer('carId',11).unsigned().inTable('cars').references('id');
