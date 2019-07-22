const db = require("../../data/dbConfig.js");

module.exports = {
  getUsers,
  getUserById,
  addUser,
  updateUser,
  deleteUser
};

function getUsers() {
  return db("users");
}

function getUserById(id) {
  return db("users")
    .where({ id })
    .first();
}

function addUser(want) {
  return db("users")
    .insert(want)
    .then(ids => ({ id: ids[0] }));
}

function updateUser(id, post) {
  return db("users")
    .where({ id })
    .update(post);
}

function deleteUser(id) {
  return db("users")
    .where({ id })
    .del();
}
