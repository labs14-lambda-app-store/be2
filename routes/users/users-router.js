const router = require("express").Router();

const Users = require("./users-model.js");

const environment = process.env.DB_ENV;

//endpoint to get all users
// router.get("/", restricted, async (req, res) => {    <----- restricted endpoints not yet set up because convenience reasons???
router.get("/", async (req, res) => {
  try {
    const users = await Users.getUsers();
    res.status(200).json(users);
  } catch (error) {
    console.log("Get users error : ", error);
    res.status(500).json({ message: "Error getting users.", error });
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
      res
        .status(404)
        .json({ message: "The user with the specified ID does not exist." });
    }
  } catch (error) {
    console.log("Get user by id error : ", error);
    res.status(500).json({ message: "Error getting that user.", error });
  }
});

//endpoint to create a new user
router.post("/", async (req, res) => {
  try {
    let user = await Users.getUserByEmail(req.body.email);
    if (!user) {
      //the next two lines create a user and then return newly created user with email
      user = await Users.addUser(req.body);
      let returnUser = await Users.getUserByEmail(req.body.email);
      res
        .status(201)
        .json({ message: "User successfully registered.", user: returnUser });
    } else {
      res.status(201).json({ message: "User successfully logged in.", user });
    }
  } catch (error) {
    console.log("Create user error : ", error);
    res.status(500).json({ message: "Error creating that user.", error });
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
      res
        .status(404)
        .json({ message: "The user with the specified ID does not exist." });
    }
  } catch (error) {
    console.log("Update user error : ", error);
    res.status(500).json({ message: "Error updating that user.", error });
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
      res.status(404).json({
        message: "The user with the specified ID does not exist."
      });
    }
  } catch (error) {
    console.log("Delete user error : ", error);
    res.status(500).json({ message: "Error deleting that user.", error });
  }
});

module.exports = router;
