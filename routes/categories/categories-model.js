const db = require("../../data/dbConfig.js");

module.exports = {
  getCategories
};

//get all projects
function getCategories() {
  return db("categories");
}
