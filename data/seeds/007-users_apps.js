exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("table_name")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("table_name").insert([
        { user_id: 2, app_id: 2 },
        { user_id: 2, app_id: 3 },
        { user_id: 3, app_id: 3 },
        { user_id: 3, app_id: 4 }
      ]);
    });
};
