exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("apps_tags")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("apps_tags").insert([
        { app_id: 1, tag_id: 1 },
        { app_id: 1, tag_id: 2 },
        { app_id: 2, tag_id: 1 },
        { app_id: 2, tag_id: 2 }
      ]);
    });
};