const express = require("express");

const router = express.Router();
const UsersApps = require("./users-apps-model");
const helpers = require("../../helpers");
const { returnSafeErrorMessage } = helpers;
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
    let user_app = await UsersApps.addUserApp(req.body.users);
    res.status(201).json({ message: "UserApp successfully created." });
  } catch (error) {
    returnSafeErrorMessage(res, "Error creating that UserApp", error);
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
