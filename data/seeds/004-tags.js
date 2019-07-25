exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("tags")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("tags").insert([
        { tag_name: "Example tag  1" },
        { tag_name: "Example tag 2" },
        { tag_name: "Example tag 3" },
        { tag_name: "Example tag 4" },
        { tag_name: "Example tag 5" },
        { tag_name: "Example tag 6" },
        { tag_name: "Example tag 7" },
        { tag_name: "Example tag 8" },
        { tag_name: "Example tag 9" },
        { tag_name: "Example tag 10" },
        { tag_name: "Example tag 11" },
        { tag_name: "Example tag 12" },
        { tag_name: "Example tag 13" },
        { tag_name: "Example tag 14" },
        { tag_name: "Example tag 15" },
        { tag_name: "Example tag 16" }
      ]);
    });
};
