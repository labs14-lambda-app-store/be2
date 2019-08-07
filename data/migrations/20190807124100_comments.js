exports.up = async function(knex, Promise) {
  return await knex.schema.hasTable("comments").then(exists => {
    if (!exists) {
      return knex.schema.createTable("comments", table => {
        table.increments();
        table.string("comment").notNullable();
        table
          .integer("project_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("projects")
          .onDelete("CASCADE")
          .onUpdate("CASCADE");
      });
    }
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("comments");
};

//Fix for potential future bug involving upgrading migrations
