exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('categories')
  .truncate()
    // .raw(
    //   "TRUNCATE TABLE categories RESTART IDENTITY CASCADE"
    // ) /* This .raw function allows for truncation while being referenced in a foreign key */
    .then(function() {
      // Inserts seed entries
      return knex("categories").insert([
        { category_name: "Business" }, //1
        { category_name: "Entertainment" }, //2
        { category_name: "Education" }, //3
        { category_name: "Games" }, //4
        { category_name: "Music" }, //5
        { category_name: "Medical" }, //6
        { category_name: "Health & Fitness" }, //7
        { category_name: "Food & Drink" }, //8
        { category_name: "Finance" }, //9
        { category_name: "Books" }, //10
        { category_name: "Social Networking" }, //11
        { category_name: "Shopping" }, //12
        { category_name: "Photo & Video" }, //13
        { category_name: "News" }, //14
        { category_name: "Navigation" }, //15
        { category_name: "Sports" }, //16
        { category_name: "Travel" }, //17
        { category_name: "Weather" }, //18
        { category_name: "Miscellaneous" } //19
      ]);
    });
};
