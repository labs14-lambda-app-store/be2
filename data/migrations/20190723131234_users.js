exports.up = function(knex, Promise) {
  return knex.schema.hasTable("users", exists => {
    if (!exists) {
      knex.schema.createTable("users", table => {
        table.increments();
        table
          .string("username")
          .notNullable()
          .unique();
        table
          .string("email")
          .notNullable()
          .unique();
        table.string("password").notNullable();
        table.integer("sub_id").notNullable();
        table.string("first_name").notNullable();
        table.string("last_name").notNullable();
        table.string("pictureURL");
      });
    }
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("users");
};
