const express = require("express");

const router = express.Router();
const UsersApps = require("./users-apps-model");

const environment = process.env.DB_ENV;

// Get for the UsersApps
router.get("/", async (req, res) => {
  try {
    const usersApps = await UsersApps.getUsersApps();
    res.status(200).json(usersApps);
  } catch (error) {
    if (environment === "production") {
      res.status(500).json({ message: "Error getting UsersApps." });
    } else {
      console.log("Error getting the UsersApps", error);
      res.status(500).json({ message: "Error getting UsersApps.", error });
    }
  }
});

// Post endpoint to add a UserApp relation
router.post("/", async (req, res) => {
  try {
    const add_users = await req.body.users.forEach(user => {
      if (!user.user_id || !user.app_id) throw "missing property";

      let user_app = UsersApps.addUserApp(user);
    });
    res.status(201).json({ message: "UserApp successfully created." });
  } catch (error) {
    if (environment === "production") {
      res.status(500).json({ message: "Error creating that UserApp." });
    } else if (error === "missing property") {
      res.status(500).json({ message: "Missing app id or user id" });
    } else {
      console.log("Creating UserApp error ", error);
      res.status(500).json({ message: "Error creating that UserApp.", error });
    }
  }
});

// Delete endpoint for deleting a UserApp Relation
router.delete("/:id", async (req, res) => {
  try {
    const count = await UsersApps.deleteUserApp(req.params.id);
    if (count > 0) {
      res.status(200).json({
        message: "The UserApp has been removed"
      });
    } else {
      res.status(404).json({
        message: "The UserApp with the specified ID does not exist."
      });
    }
  } catch (error) {
    if (environment === "production") {
      res.status(500).json({ message: "Error deleting that UserApp." });
    } else {
      console.log("Delete UserApp error: ", error);
      res.status(500).json({ message: "Error deleting that UserApp.", error });
    }
  }
});

module.exports = router;
