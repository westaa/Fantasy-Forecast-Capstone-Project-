var bcrypt = require('bcrypt');

exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('users').del(),
    // Inserts seed entries
    knex('users').insert({
        username: 'andrew',
        password: bcrypt.hashSync('test', 8),
        email: "westaa@colorado.edu",
        is_admin: true
    }),
    knex('users').insert({
        username: 'drew',
        password: bcrypt.hashSync('test', 8),
        email: "saints2010@gmail.com",
        is_admin: false
    })
  );
};
