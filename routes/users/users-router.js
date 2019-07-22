const router = require("express").Router();

const Users = require("./users-model.js");

// router.get("/", restricted, async (req, res) => {
router.get("/", async (req, res) => {
  try {
    const users = await Users.getUsers();
    res.status(200).json(users);
  } catch (error) {
    console.log("Get users error : ", error);
    res.status(500).json({ message: "Error getting users.", error });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const user = await Users.getUserById(req.params.id);
    if (user) {
      res.status(200).json(user);
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

router.post("/", async (req, res) => {
  try {
    const user = await Users.addUser(req.body);
    res.status(201).json({ message: "User successfully created." });
  } catch (error) {
    console.log("Create user error : ", error);
    res.status(500).json({ message: "Error creating that user.", error });
  }
});

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
