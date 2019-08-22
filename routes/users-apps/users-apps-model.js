const db = require("../../data/dbConfig.js");

module.exports = {
  getUsersApps,
  addUserApp,
  deleteUserApp
};

//get all Users-Apps relations
function getUsersApps() {
  return db("users_apps");
}

//post for adding a User-App relation
function addUserApp(user_app) {
  return db("users_apps")
    .insert(user_app)
    .then(ids => ({ id: ids[0] }));
}

// for deleting a User-App relation
function deleteUserApp(id) {
  return db("users_apps")
    .where({ id })
    .del();
}
