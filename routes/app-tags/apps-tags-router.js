const express = require("express");

const router = express.Router();
const App_Tags = require("./apps-tags-model");

const environment = process.env.DB_ENV;

router.get("/", async (req, res) => {
  try {
    const app_tags = await App_Tags.getAppTags();
    res.status(200).json(app_tags);
  } catch (error) {
    if (environment === "production") {
      res.status(500).json({ message: "Error getting app_tags" });
    } else {
      console.log("Get app_tags error : ", error);
      res.status(500).json({ message: "Error getting app_tags", error });
    }
  }
});

router.post("/", async (req, res) => {
  try {
    const app_tag = await App_Tags.addAppsTag(req.body);
    res.status(201).json({ message: "App_tag successfully created." });
  } catch (error) {
    if (environment === "production") {
      res.status(500).json({ message: "Error creating that app_tag" });
    } else {
      cconsole.log("Create app_tag error : ", error);
      res.status(500).json({ message: "Error creating that app_tag", error });
    }
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const count = await App_Tags.deleteAppsTag(req.params.id);
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
    if (environment === "production") {
      res.status(500).json({ message: "Error deleting that app_tag" });
    } else {
      console.log("Delete app_tag error : ", error);
      res.status(500).json({ message: "Error deleting that app_tag", error });
    }
  }
});

module.exports = router;