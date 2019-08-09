const express = require("express");

const router = express.Router();
const Comments = require("./comments-model");

const environment = process.env.DB_ENV || "development";

// Get for the comments
router.get("/", async (req, res) => {
  try {
    const comments = await Comments.getComments();
    res.status(200).json(comments);
  } catch (err) {
    if (environment === "production") {
      res.status(500).json({ message: "error getting comments " });
    } else {
      console.log("Error getting the comment ", err);
      res.status(500).json(err);
    }
  }
});

// Post endpoint to add a comment
router.post("/", async (req, res) => {
  try {
    const comment = await Comments.addComment(req.body);
    res.status(201).json({ message: "comment successfully created." });
  } catch (error) {
    if (environment === "production") {
      res.status(500).json({ message: "error creating that comment " });
    } else {
      console.log("Creating comment error ", error);
      res.status(500).json({ message: "Error creating that comment.", error });
    }
  }
});

// Delete endpoint for deleting a comment
router.delete("/:id", async (req, res) => {
  try {
    const count = await Comments.deleteComment(req.params.id);
    if (count > 0) {
      res.status(200).json({
        message: "The comment has been removed"
      });
    } else {
      res.status(404).json({
        message: "The comment with the specified ID does not exist."
      });
    }
  } catch (error) {
    if (environment === "production") {
      res.status(500).json({ message: "error deleting that comment " });
    } else {
      console.log("Delete comment error: ", error);
      res.status(500).json({ message: "Error deleting that comment.", error });
    }
  }
});

module.exports = router;
