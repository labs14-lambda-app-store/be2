exports.up = async function(knex, Promise) {
  return await knex.schema.hasTable("apps_tags").then(exists => {
    if (!exists) {
      return knex.schema.createTable("apps_tags", table => {
        table.increments();
        table
          .integer("app_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("apps")
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
  return knex.schema.dropTableIfExists("apps_tags");
};

//Fix for potential future bug involving upgrading migrations
