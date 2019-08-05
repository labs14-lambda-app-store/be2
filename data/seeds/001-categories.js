exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("categories")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("categories").insert([
        { category_name: "Business" },
        { category_name: "Entertainment" },
        { category_name: "Education" },
        { category_name: "Games" },
        { category_name: "Music" },
        { category_name: "Medical" },
        { category_name: "Health & Fitness" },
        { category_name: "Food & Drink" },
        { category_name: "Finance" },
        { category_name: "Books" },
        { category_name: "Social Networking" },
        { category_name: "Shopping" },
        { category_name: "Photo & Video" },
        { category_name: "News" },
        { category_name: "Navigation" },
        { category_name: "Sports" },
        { category_name: "Travel" },
        { category_name: "Weather" },
        { category_name: "Miscellaneous" }
      ]);
    });
};
