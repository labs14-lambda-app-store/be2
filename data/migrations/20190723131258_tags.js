exports.up = function(knex, Promise) {
  return knex.schema.hasTable("tags", exists => {
    if (!exists) {
      knex.schema.createTable("tags", table => {
        table.increments();
        table.string("tag_name");
      });
    }
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("tags");
};

//Fix for potential future bug involving upgrading migrations

// knex.schema.hasTable("tags", exists => {
//   if (!exists) {

//   }
// });
