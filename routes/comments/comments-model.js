const db = require("../../data/dbConfig.js");

module.exports = {
  getComments,
  addComment,
  deleteComment
};

//get all comments
function getComments() {
  return db("comments");
}

//post for adding a comment
function addComment(comment) {
  return db("comments")
    .insert(comment, "id")
    .then(ids => {
      return db("comments")
        .where({ id: ids[0] })
        .first();
    });
}

// for deleting a comment
function deleteComment(id) {
  return db("comments")
    .where({ id })
    .del();
}
