
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'Example Project 1', url: 'www.lambdaappstore2.herokuapp.com', description: 'Example description'},
        {name: 'Example Project 2', url: 'www.lambdaappstore2.herokuapp.com', description: 'Example description'},
        {name: 'Example Project 3', url: 'www.lambdaappstore2.herokuapp.com', description: 'Example description'},
      ]);
    });
};
