const db = require("../../data/dbConfig.js");

module.exports = {
  getAppTags,
  addAppTag,
  deleteAppTag
};

//get all Apps-Tags relations
function getAppTags() {
  return db("apps_tags");
}

//post for adding an App-Tag relations
function addAppTag(app_tag) {
  return db("apps_tags")
    .insert(app_tag)
    .then(ids => ({ id: ids[0] }));
}

// for deleting an App-Tag relations
function deleteAppTag(id) {
  return db("apps_tags")
    .where({ id })
    .del();
}
