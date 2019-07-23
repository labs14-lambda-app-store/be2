const express = require("express");

const router = express.Router();
const Tags = require("./tags-model");

// Get for the tags
router.get("/", async (req, res) => {
  try {
    const tags = await Tags.getTags();
    res.status(200).json(tags);
  } catch (err) {
    console.log("Error getting the tag ", err);
    res.status(500).json(err);
  }
});

// Post endpoint to add a tag
router.post("/", async (req, res) => {
  try {
    const tag = await Tags.addTag(req.body);
    res.status(201).json({ message: "User successfully created." });
  } catch (error) {
    console.log("Creating tag error ", error);
    res.status(500).json({ message: "Error creating that user.", error });
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
      res.status(404).json({
        message: "The tag with the specified ID does not exist."
      });
    }
  } catch (error) {
    console.log("Delete tag error: ", error);
    res.status(500).json({ message: "Error deleting that tag.", error });
  }
});

module.exports = router;
