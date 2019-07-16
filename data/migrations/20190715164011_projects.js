
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('projects', table => {
      table.increments()
      table.string('name').notNullable()
      table.string('url').notNullable()
      table.string('description')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema
  .dropTableIfExists('projects')
};
