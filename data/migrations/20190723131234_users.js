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
        table.string("role").notNullable();
        table.string("sub_id").notNullable();
        table.string("first_name");
        table.string("last_name");
        table.string("pictureURL");
        table.string('github_link').defaultTo('')
        table.string('linkedin_link').defaultTo('')
        table.string('preferred_pronoun').defaultTo('')
        table.string('birthday').defaultTo('')
      });
    }
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("users");
};
