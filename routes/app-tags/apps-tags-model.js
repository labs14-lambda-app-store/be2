const db = require("../../data/dbConfig.js");

module.exports = {
  getAppTags,
  addAppsTag,
  deleteAppsTag
};

//get all comments
function getAppTags() {
  return db("apps_tags");
}

//post for adding a comment
function addAppsTag(app_tag) {
  return db("apps_tags")
    .insert(app_tag)
    .then(ids => ({ id: ids[0] }));
}

// for deleting a comment
function deleteAppsTag(id) {
  return db("apps_tags")
    .where({ id })
    .del();
}
