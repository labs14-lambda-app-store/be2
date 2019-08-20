exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users_apps")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("users_apps").insert([
        { user_id: 2, app_id: 2 },
        { user_id: 2, app_id: 3 },
        { user_id: 3, app_id: 3 },
        { user_id: 3, app_id: 4 }
      ]);
    });
};
