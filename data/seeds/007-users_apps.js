/* For testing on a local sqlite environment DO NOT run seeds. */
exports.seed = function(knex, Promise) {
  return knex("users_apps")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("users_apps").insert([
        { app_id: 1, user_id: 1 },
        { app_id: 1, user_id: 2 },
        { app_id: 1, user_id: 3 },
        { app_id: 1, user_id: 4 },
        { app_id: 1, user_id: 5 },
        { app_id: 1, user_id: 6 },
        { app_id: 1, user_id: 7 },
        { app_id: 2, user_id: 1 },
        { app_id: 2, user_id: 6 },
        { app_id: 2, user_id: 3 },
        { app_id: 2, user_id: 2 },
        { app_id: 3, user_id: 4 },
        { app_id: 3, user_id: 11 },
        { app_id: 3, user_id: 12 },
        { app_id: 4, user_id: 1 },
        { app_id: 4, user_id: 2 },
        { app_id: 4, user_id: 3 },
        { app_id: 5, user_id: 12 },
        { app_id: 5, user_id: 5 },
        { app_id: 5, user_id: 9 },
        { app_id: 6, user_id: 1 },
        { app_id: 6, user_id: 3 },
        { app_id: 6, user_id: 4 },
        { app_id: 7, user_id: 8 },
        { app_id: 7, user_id: 9 },
        { app_id: 7, user_id: 10 },
        { app_id: 8, user_id: 4 },
        { app_id: 8, user_id: 5 },
        { app_id: 8, user_id: 6 },
        { app_id: 9, user_id: 6 },
        { app_id: 9, user_id: 2 },
        { app_id: 9, user_id: 5 }
      ]);
    });
};
