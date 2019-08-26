
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'G4life06', password: 'password123'},
        {id: 2, username: 'Guero10', password: 'pass11'}
      ]);
    });
};
