const db = require("../data/dbConfig");

module.exports = {
  getCategories, 
};

//get all projects
function getCategories() {
  return db("categories");
}