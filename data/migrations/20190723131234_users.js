exports.up = async function(knex, Promise) {
  return await knex.schema.hasTable("users").then(exists => {
    if (!exists) {
      return knex.schema.createTable("users", table => {
        table.increments();
        table
          .string("username")
          .notNullable()
          .unique();
        table
          .string("email")
          .notNullable()
          .unique();
        table.string("sub_id").notNullable();
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

//Fix for potential future bug involving upgrading migrations
