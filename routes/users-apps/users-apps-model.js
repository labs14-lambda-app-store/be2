const db = require("../../data/dbConfig.js");

module.exports = {
  getUsersApps,
  addUserApp,
  deleteUserApp
};

//get all comments
function getUsersApps() {
  return db("users_apps");
}

//post for adding a comment
function addUserApp(user_app) {
  return db("users_apps")
    .insert(user_app)
    .then(ids => ({ id: ids[0] }));
}

// for deleting a comment
function deleteUserApp(id) {
  return db("users_apps")
    .where({ id })
    .del();
}
