exports.up = function(knex, Promise) {
  return knex.schema
    .createTable("projects", table => {
      table.increments();
      table
        .string("name")
        .notNullable()
        .unique();
      table
        .integer("category_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("categories")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
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
      table.string("tags");
      table.boolean("in_development").defaultTo(true);
      table.boolean("is_live").defaultTo(false);
      table.boolean("is_featured").defaultTo(false);
    })
    .createTable("categories", table => {
      table.increments();
      table.string("category");
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("projects");
};
