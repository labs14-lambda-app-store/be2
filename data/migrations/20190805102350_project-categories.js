exports.up = function(knex, Promise) {
      return knex.schema.createTable("project_categories", table => {
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
          .integer("category_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("categories")
          .onDelete("CASCADE")
          .onUpdate("CASCADE");
      });
    };
    
    exports.down = function(knex, Promise) {
      return knex.schema.dropTableIfExists("project_categories");
    };