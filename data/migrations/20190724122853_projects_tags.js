exports.up = async function(knex, Promise) {
  return await knex.schema.hasTable("projects_tags").then(exists => {
    if (!exists) {
      return knex.schema.createTable("projects_tags", table => {
        table.increments();
        table
          .integer("project_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("projects")
          .onDelete("CASCADE")
          .onUpdate("CASCADE");
        table
          .integer("tag_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("tags")
          .onDelete("CASCADE")
          .onUpdate("CASCADE");
      });
    }
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("projects_tags");
};

//Fix for potential future bug involving upgrading migrations
