const db = require("../../data/dbConfig.js");

module.exports = {
  getUsers,
  getUserById,
  getUserBySubId,
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

// get user by Sub_id
function getUserBySubId(id) {
  return db("users")
    .where("sub_id", id)
    .first();
}

// post for adding a user
function addUser(user) {
  const determineRole = user => {
    let role = "";
    let email = user.email;
    let result = email.split("@");
    switch (result[1]) {
      case "lambdaschool.com":
        role = "admin";
        break;
      default:
        role = "student";
    }
    return role;
  };
  const finalUser = {
    ...user,
    role: determineRole(user)
  };
  return db("users")
    .insert(finalUser)
    .then(ids => ({ id: ids[0] }))
    .then(user => finalUser);
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
