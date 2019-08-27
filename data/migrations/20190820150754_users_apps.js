exports.up = async function(knex, Promise) {
  return await knex.schema.hasTable("users_apps").then(exists => {
    if (!exists) {
      return knex.schema.createTable("users_apps", table => {
        table.increments();
        table.unique(["user_id", "app_id"]);
        table
          .integer("user_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("users")
          .onDelete("CASCADE")
          .onUpdate("CASCADE");
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
  return knex.schema.dropTableIfExists("users_apps");
};
