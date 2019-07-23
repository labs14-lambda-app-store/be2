const db = require("../../data/dbConfig.js");

module.exports = {
  getTags,
  addTag,
  deleteTag
};

//get all tags
function getTags() {
  return db("tags");
}

//add a new tag
function addTag(tag) {
  return db("tags")
    .insert(tag, "id")
    .then(ids => {
      return db("tags")
        .where({ id: ids[0] })
        .first();
    });
}

//delete ann existing tag
function deleteTag(id) {
  return db("tags")
    .where({ id })
    .del();
}
