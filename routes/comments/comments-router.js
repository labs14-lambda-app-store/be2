const express = require("express");

const router = express.Router();
const Comments = require("./comments-model");
const helpers = require("../../helpers");
const { returnSafeErrorMessage } = helpers;

// Get for the comments
router.get("/", async (req, res) => {
  try {
    const comments = await Comments.getComments();
    res.status(200).json(comments);
  } catch (error) {
    returnSafeErrorMessage(res, "Error getting comments", error);
  }
});

// Post endpoint to add a comment
router.post("/", async (req, res) => {
  try {
    const comment = await Comments.addComment(req.body);
    res.status(201).json({ message: "comment successfully created." });
  } catch (error) {
    returnSafeErrorMessage(res, "Error creating that comment ", error);
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
      throw "NO_COMMENT";
    }
  } catch (error) {
    if (error === "NO_COMMENT") {
      res.status(404).json({
        message: "The comment with the specified ID does not exist."
      });
    }
    returnSafeErrorMessage(res, "Error deleting that comment", error);
  }
});

module.exports = router;
