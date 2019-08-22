/* For testing on a local sqlite environment DO NOT run seeds. */
exports.seed = function(knex, Promise) {
  return knex("users_apps")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("users_apps").insert([
        { user_id: 2, app_id: 2 },
        { user_id: 2, app_id: 3 },
        { user_id: 3, app_id: 3 },
        { user_id: 3, app_id: 4 },
        { user_id: 4, app_id: 28 },
        { user_id: 4, app_id: 29 }
      ]);
    });
};
