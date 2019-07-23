const db = require("../../data/dbConfig.js");

module.exports = {
  getUsers,
  getUserById,
  addUser,
  updateUser,
  deleteUser
};

// get all users
function getUsers() {
  return db("users");
}

// get user by id
function getUserById(id) {
  return db("users")
    .where({ id })
    .first();
}

// post for adding a user
function addUser(user) {
  return db("users")
    .insert(user)
    .then(ids => ({ id: ids[0] }));
}

// update the user
function updateUser(id, user) {
  return db("users")
    .where({ id })
    .update(user);
}

// delete the user
function deleteUser(id) {
  return db("users")
    .where({ id })
    .del();
}
