const express = require("express");

const router = express.Router();
const Tags = require("./tags-model");

const environment = process.env.DB_ENV || "development";

// Get for the tags
router.get("/", async (req, res) => {
  try {
    const tags = await Tags.getTags();
    res.status(200).json(tags);
  } catch (err) {
    if (environment === "production") {
      res.status(500).json({ message: "error getting tags " });
    } else {
      console.log("Error getting the tag ", err);
      res.status(500).json(err);
    }
  }
});

// Post endpoint to add a tag
router.post("/", async (req, res) => {
  try {
    const tag = await Tags.addTag(req.body);
    res.status(201).json({ message: "Tag successfully created." });
  } catch (error) {
    if (environment === "production") {
      res.status(500).json({ message: "error creating that tag " });
    } else {
      console.log("Creating tag error ", error);
      res.status(500).json({ message: "Error creating that tag.", error });
    }
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
    if (environment === "production") {
      res.status(500).json({ message: "error deleting that tag " });
    } else {
      console.log("Delete tag error: ", error);
      res.status(500).json({ message: "Error deleting that tag.", error });
    }
  }
});

module.exports = router;
