exports.up = async function(knex, Promise) {
  return await knex.schema.hasTable("comments").then(exists => {
    if (!exists) {
      return knex.schema.createTable("comments", table => {
        table.increments();
        table.string("comment").notNullable();
        table
          .integer("app_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("apps")
          .onDelete("CASCADE")
          .onUpdate("CASCADE");
      });
    }
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("comments");
};
