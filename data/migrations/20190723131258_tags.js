exports.up = async function(knex, Promise) {
  return await knex.schema.hasTable("tags").then(exists => {
    if (!exists) {
      return knex.schema.createTable("tags", table => {
        table.increments();
        table.string("tag_name");
      });
    }
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("tags");
};
