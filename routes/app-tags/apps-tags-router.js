const express = require("express");

const router = express.Router();
const App_Tags = require("./apps-tags-model");
const helpers = require("../../helpers");
const { returnSafeErrorMessage } = helpers;

// endpoint to get all app-tags
router.get("/", async (req, res) => {
  try {
    const app_tags = await App_Tags.getAppTags();
    res.status(200).json(app_tags);
  } catch (error) {
    returnSafeErrorMessage(res, "Error getting app_tags", error);
  }
});

// endpoint to add a new app-tag relation
router.post("/", async (req, res) => {
  try {
    let app_tag = await App_Tags.addAppTag(req.body.tags);
    res.status(201).json({ message: "App_tag successfully created." });
  } catch (error) {
    returnSafeErrorMessage(res, "Error creating that app_tag", error);
  }
});

// endpoint to delete an app-tag relation by id
router.delete("/:id", async (req, res) => {
  try {
    const count = await App_Tags.deleteAppTag(req.params.id);
    if (count > 0) {
      res.status(200).json({
        message: "The app_tag has been removed"
      });
    } else {
      res.status(404).json({
        message: "The app_tag with the specified ID does not exist"
      });
    }
  } catch (error) {
    returnSafeErrorMessage(res, "Error deleting that app_tag", error);
  }
});

module.exports = router;
