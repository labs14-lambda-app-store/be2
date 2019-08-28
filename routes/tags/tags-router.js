const express = require("express");

const router = express.Router();
const Tags = require("./tags-model");
const helpers = require("../../helpers");
const { returnSafeErrorMessage } = helpers;

// Get for the tags
router.get("/", async (req, res) => {
  try {
    const tags = await Tags.getTags();
    res.status(200).json(tags);
  } catch (error) {
    returnSafeErrorMessage(res, "Error getting tags", error);
  }
});

// Post endpoint to add a tag
router.post("/", async (req, res) => {
  try {
    const tag = await Tags.addTag(req.body);
    res.status(201).json({ message: "Tag successfully created." });
  } catch (error) {
    returnSafeErrorMessage(res, "Error creating that tag", error);
  }
});

// Delete endpoint for deleting a tag
router.delete("/:id", async (req, res) => {
  try {
    const count = await Tags.deleteTag(req.params.id);
    if (count > 0) {
      res.status(200).json({
        message: "The tag has been removed"
      });
    } else {
      throw "NO_TAG";
      res.status(404).json({
        message: "The tag with the specified ID does not exist."
      });
    }
  } catch (error) {
    if (error === "NO_TAG") {
      res.status(404).json({
        message: "The tag with the specified ID does not exist."
      });
    } else {
      returnSafeErrorMessage(res, "Error deleting that tag", error);
    }
  }
});

module.exports = router;
