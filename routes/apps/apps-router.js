const express = require("express");

const router = express.Router();
const Apps = require("./apps-model");
const UsersApps = require("../users-apps/users-apps-model");

const environment = process.env.DB_ENV;

//gets all apps that match query strings given for searching and pagination
router.get("/", async (req, res) => {
  const searchParameter = req.query.search;
  const filter = req.query.approved;
  const page = req.query.page;

  try {
    //gets count of all apps requested - necessary for FE pagination
    const totalFilterAppsCount = await Apps.getAppsCount(
      searchParameter,
      filter
    );
    //gets actual app data requested, with pagination
    const appsPerPage = await Apps.getAppsPerPage(
      page,
      searchParameter,
      filter
    );

    //loops through apps and adds the proper values based off foreign keys to related array on app
    for (i = 0; i < appsPerPage.length; i++) {
      const app = appsPerPage[i];
      app.tags = await Apps.getAppTags(app.id);
      app.category = await Apps.getAppCategory(app.category_id);
      app.comments = await Apps.getAppComments(app.id);
    }

    res.status(200).json({
      //returns the count of the filtered and searching apps from line 16
      length: parseInt(totalFilterAppsCount[0].count),
      apps: appsPerPage
    });
  } catch (error) {
    //only logs the real error if we are not in production
    if (environment === "production") {
      res.status(500).json({
        message:
          "Error getting apps: please include approved boolean and/or search string in query "
      });
    } else {
      console.log("Getting apps error:", error);
      res
        .status(500)
        .json({ message: "error getting apps ", error, environment });
    }
  }
});

router.get("/all", async (req, res) => {
  try {
    const apps = await Apps.getAllApps();
    res.status(200).json({ apps: apps });
  } catch (e) {
    if (environment === "production") {
      res.status(500).json({
        message: "Error getting apps "
      });
    } else {
      console.log("Getting apps error:", error);
      res
        .status(500)
        .json({ message: "error getting apps ", error, environment });
    }
  }
});

//endpoint to get app by id
router.get("/:id", async (req, res) => {
  try {
    const app = await Apps.getAppById(req.params.id);
    const tags = await Apps.getAppTags(req.params.id);
    const category = await Apps.getAppCategory(app.category_id);
    if (app) {
      res.status(200).json({ ...app, tags, category });
    } else {
      res
        .status(404)
        .json({ message: "The app with the specified ID does not exist." });
    }
  } catch (error) {
    if (environment === "production") {
      res.status(500).json({ message: "error getting that app " });
    } else {
      console.log("Get app by ID error: ", error);
      res.status(500).json({ message: "Error getting that app.", error });
    }
  }
});

//endpoint to create new app
router.post("/", async (req, res) => {
  //extracts the user_id out of the req.body object
  const { user_id, ...newApp } = req.body;
  try {
    const app = await Apps.addApp(newApp);
    // takes new app created above and uses its id to add a user_app relation
    const userApp = await UsersApps.addUserApp({ user_id, app_id: app.id });
    res.status(201).json({ message: "App successfully created." });
  } catch (error) {
    if (environment === "production") {
      res.status(500).json({ message: "error creating apps " });
    } else {
      console.log("Create app error: ", error);
      res.status(500).json({ message: "Error creating that app." });
    }
  }
});

//endpoint to update existing app
router.put("/:id", async (req, res) => {
  const app = req.body;
  try {
    const updatedApp = await Apps.updateApp(req.params.id, app);
    if (app) {
      res.status(200).json({ message: "App successfully updated." });
    } else {
      res
        .status(404)
        .json({ message: "The app with the specified ID does not exist." });
    }
  } catch (error) {
    if (environment === "production") {
      res.status(500).json({ message: "error updating apps " });
    } else {
      console.log("Update app error: ", error);
      res.status(500).json({ message: "Error updating the app.", error });
    }
  }
});

//endpoint to delete app by id
router.delete("/:id", async (req, res) => {
  try {
    const count = await Apps.deleteApp(req.params.id);
    if (count > 0) {
      res.status(200).json({ message: "The app has been deleted." });
    } else {
      res
        .status(404)
        .json({ message: "The app with the specified ID does not exist." });
    }
  } catch (error) {
    if (environment === "production") {
      res.status(500).json({ message: "error deleting that app " });
    } else {
      console.log("Delete app error : ", error);
      res.status(500).json({ message: "Error deleting that app", error });
    }
  }
});

module.exports = router;
