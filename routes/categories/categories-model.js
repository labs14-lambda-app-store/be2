const db = require("../../data/dbConfig.js");

module.exports = {
  getCategories,
  addCategory,
  deleteCategory
};

//get all projects
function getCategories() {
  return db("categories");
}

//post for adding a category
function addCategory(category) {
  return db("categories")
    .insert(category, "id")
    .then(ids => {
      return db("categories")
        .where({ id: ids[0] })
        .first();
    });
}

// for deleting a category
function deleteCategory(id) {
  return db("categories")
    .where({ id })
    .del();
}
