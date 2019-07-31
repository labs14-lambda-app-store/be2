exports.up = function(knex, Promise) {
  return knex.schema.createTable("projects", table => {
    table.increments();
    table
      .string("name")
      .notNullable()
      .unique();
    table.string("category_name").notNullable();
    table.boolean("is_approved").defaultTo(false);
    table.string("description");
    table
      .string("hosted_url")
      .notNullable()
      .unique();
    table.string("frontend_url");
    table.string("backend_url");
    table.string("submitted_at").notNullable();
    table.string("approved_at").defaultTo("");
    table.string("display_image");
    table.boolean("in_development").defaultTo(true);
    table.boolean("is_live").defaultTo(false);
    table.boolean("is_featured").defaultTo(false);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("projects");
};

//Fix for potential future bug involving upgrading migrations

// knex.schema.hasTable("projects", exists => {
//   if (!exists) {

//   }
// });
