exports.up = function(knex, Promise) {
  return knex.schema.createTable('players', function(table) {
    table.increments('id').primary();
    table.string('name').notNullable().unique();
    table.string('team').notNullable();
    table.string('position').notNullable();
    table.string('ffnId').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('players');
};
