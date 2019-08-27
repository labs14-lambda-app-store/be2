/* For testing on a local sqlite environment DO NOT run seeds. */
exports.seed = function(knex, Promise) {
  return knex("users_apps")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("users_apps").insert([
        { app_id: 1, tag_id: 1 },
        { app_id: 1, tag_id: 2 },
        { app_id: 1, tag_id: 3 },
        { app_id: 1, tag_id: 4 },
        { app_id: 1, tag_id: 5 },
        { app_id: 1, tag_id: 6 },
        { app_id: 2, tag_id: 1 },
        { app_id: 2, tag_id: 2 },
        { app_id: 3, tag_id: 1 },
        { app_id: 3, tag_id: 3 },
        { app_id: 3, tag_id: 4 },
        { app_id: 3, tag_id: 5 }
      ]);
    });
};
