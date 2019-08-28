const router = require("express").Router();

const Users = require("./users-model.js");
const helpers = require("../../helpers");
const { returnSafeErrorMessage } = helpers;

//endpoint to get all users
router.get("/", async (req, res) => {
  try {
    const users = await Users.getUsers();
    res.status(200).json(users);
  } catch (error) {
    returnSafeErrorMessage(res, "Get users error", error);
  }
});

// endpoint to get user by id
router.get("/:id", async (req, res) => {
  try {
    const user = await Users.getUserById(req.params.id);
    const apps = await Users.getUserApps(req.params.id);
    if (user) {
      res.status(200).json({ ...user, apps });
    } else {
      throw "NO_USER";
    }
  } catch (error) {
    if (error === "NO_USER") {
      res
        .status(404)
        .json({ message: "The user with the specified ID does not exist." });
    } else {
      returnSafeErrorMessage(res, "Error getting that user", error);
    }
  }
});

//endpoint to create a new user
router.post("/", async (req, res) => {
  try {
    let user = await Users.getUserByEmail(req.body.email);
    if (!user) {
      //the next two lines create or login a user and then return newly created user with email
      user = await Users.addUser(req.body);
      let returnUser = await Users.getUserByEmail(req.body.email);
      res
        .status(201)
        .json({ message: "User successfully registered.", user: returnUser });
    } else {
      res.status(201).json({ message: "User successfully logged in.", user });
    }
  } catch (error) {
    returnSafeErrorMessage(res, "Error creating that user", error);
  }
});

//endpoint to update existing user by id
router.put("/:id", async (req, res) => {
  const user = req.body;
  try {
    const updatedUser = await Users.updateUser(req.params.id, user);
    if (user) {
      res.status(200).json({ message: "User successfullly updated." });
    } else {
      throw "NO_USER";
    }
  } catch (error) {
    if (error === "NO_USER") {
      res
        .status(404)
        .json({ message: "The user with the specified ID does not exist." });
    } else {
      returnSafeErrorMessage(res, "Error updating that user", error);
    }
  }
});

//endpoint to delete existing user by id
router.delete("/:id", async (req, res) => {
  try {
    const count = await Users.deleteUser(req.params.id);
    if (count > 0) {
      res.status(200).json({
        message: "The user has been removed"
      });
    } else {
      throw "NO_USER";
    }
  } catch (error) {
    if (error === "NO_USER") {
      res.status(404).json({
        message: "The user with the specified ID does not exist."
      });
    } else {
      returnSafeErrorMessage(res, "Error deleting that user", error);
    }
  }
});

module.exports = router;
