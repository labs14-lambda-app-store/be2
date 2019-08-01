exports.up = function(knex, Promise) {
  return knex.schema.createTable("categories", table => {
    table.increments();
    table.string("category_name");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("categories");
};

//Fix for potential future bug involving upgrading migrations

// knex.schema.hasTable("categories", exists => {
//   if (!exists) {
//   }
// });
