
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('project_categories').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('project_categories').insert([
        { project_id: 1, category_id: 1 },
        { project_id: 2, category_id: 2 },
        { project_id: 3, category_id: 1 },
        { project_id: 4, category_id: 2 },
        { project_id: 1, category_id: 1 },
        { project_id: 2, category_id: 2 },
        { project_id: 3, category_id: 1 },
        { project_id: 4, category_id: 2 },
        { project_id: 1, category_id: 1 },
        { project_id: 2, category_id: 2 },
        { project_id: 3, category_id: 1 },
        { project_id: 4, category_id: 2 },
        { project_id: 1, category_id: 1 },
        { project_id: 2, category_id: 2 },
        { project_id: 3, category_id: 1 },
        { project_id: 4, category_id: 2 },
      ]);
    });
};
