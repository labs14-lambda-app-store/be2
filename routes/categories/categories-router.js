const express = require("express");

const router = express.Router();
const Categories = require("./categories-model");

const environment = process.env.DB_ENV || "development";

//endpoint to get all categories
router.get("/", async (req, res) => {
  try {
    const categories = await Categories.getCategories();
    res.status(200).json(categories);
  } catch (error) {
    if (environment === "production") {
      res.status(500).json({ message: "Error getting categories" });
    } else {
      console.log("Get categories error", error);
      res.status(500).json({ message: "Error getting categories", error });
    }
  }
});

//endpoint to add new category
router.post("/", async (req, res) => {
  try {
    const category = await Categories.addCategory(req.body);
    res.status(201).json({ message: "Category successfully created." });
  } catch (error) {
    if (environment === "production") {
      res.status(500).json({ message: "Error creating that category" });
    } else {
      cconsole.log("Create category error", error);
      res.status(500).json({ message: "Error creating that category", error });
    }
  }
});

//endpoint to delete existing category by id
router.delete("/:id", async (req, res) => {
  try {
    const count = await Categories.deleteCategory(req.params.id);
    if (count > 0) {
      res.status(200).json({
        message: "The category has been removed"
      });
    } else {
      res.status(404).json({
        message: "The category with the specified ID does not exist"
      });
    }
  } catch (error) {
    if (environment === "production") {
      res.status(500).json({ message: "Error deleting that category" });
    } else {
      console.log("Delete category error", error);
      res.status(500).json({ message: "Error deleting that category", error });
    }
  }
});

module.exports = router;
