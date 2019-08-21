exports.up = async function(knex, Promise) {
  return await knex.schema.hasTable("categories").then(exists => {
    if (!exists) {
      return knex.schema.createTable("categories", table => {
        table.increments();
        table.string("category_name");
      });
    }
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("categories");
};
