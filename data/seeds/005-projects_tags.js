exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("projects_tags")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("projects_tags").insert([
        { project_id: 1, tag_id: 1 },
        { project_id: 1, tag_id: 2 },
        { project_id: 2, tag_id: 1 },
        { project_id: 2, tag_id: 2 }
      ]);
    });
};
