const express = require("express");

const router = express.Router();
const Projects = require("./projects-model");

const environment = process.env.DB_ENV;

//endpoint to get all projects
router.get("/", async (req, res) => {
  let searchParameter = req.query.search;
  let page = parseInt(req.query.page) || 1;
  let filterApproved = req.query.filterApproved;
  try {
    const projects = await Projects.getProjects(searchParameter);
    const projectsPerPage = await Projects.getProjectsPerPage(
      page,
      searchParameter,
      filterApproved
    );
    for (i = 0; i < projectsPerPage.length; i++) {
      const project = projectsPerPage[i];
      project.tags = await Projects.getProjectTags(project.id);
      project.category = await Projects.getProjectCategory(project.category_id);
      project.comments = await Projects.getProjectComments(project.id);
    }
    res.status(200).json({
      projects: projectsPerPage,
      projectLength: projects.length,
      message: "Did somebody order some projects"
    });
  } catch (error) {
    //only logs the real error if we are not in production
    if (environment === "production") {
      res.status(500).json({ message: "error getting projects " });
    } else {
      console.log("Getting projects error:", error);
      res
        .status(500)
        .json({ message: "error getting projects ", error, environment });
    }
  }
});

//endpoint to get project by id
router.get("/:id", async (req, res) => {
  try {
    const project = await Projects.getProjectById(req.params.id);
    const tags = await Projects.getProjectTags(req.params.id);
    if (project) {
      res.status(200).json({ ...project, tags });
    } else {
      res
        .status(404)
        .json({ message: "The project with the specified ID does not exist." });
    }
  } catch (error) {
    if (environment === "production") {
      res.status(500).json({ message: "error getting that project " });
    } else {
      console.log("Get project by ID error: ", error);
      res.status(500).json({ message: "Error getting that project.", error });
    }
  }
});

//endpoint to create new project
router.post("/", async (req, res) => {
  try {
    const project = await Projects.addProject(req.body);
    res.status(201).json({ message: "Project successfully created." });
  } catch (error) {
    if (environment === "production") {
      res.status(500).json({ message: "error creating projects " });
    } else {
      console.log("Create project error: ", error);
      res.status(500).json({ message: "Error creating that project." });
    }
  }
});

//endpoint to update existing project
router.put("/:id", async (req, res) => {
  const project = req.body;
  try {
    const updatedProject = await Projects.updateProject(req.params.id, project);
    if (project) {
      res.status(200).json({ message: "Project successfully updated." });
    } else {
      res
        .status(404)
        .json({ message: "The project with the specified ID does not exist." });
    }
  } catch (error) {
    if (environment === "production") {
      res.status(500).json({ message: "error updating projects " });
    } else {
      console.log("Update project error: ", error);
      res.status(500).json({ message: "Error updating the project.", error });
    }
  }
});

//endpoint to delete project by id
router.delete("/:id", async (req, res) => {
  try {
    const count = await Projects.deleteProject(req.params.id);
    if (count > 0) {
      res.status(200).json({ message: "The project has been deleted." });
    } else {
      res
        .status(404)
        .json({ message: "The project with the specified ID does not exist." });
    }
  } catch (error) {
    if (environment === "production") {
      res.status(500).json({ message: "error deleting that project " });
    } else {
      console.log("Delete project error : ", error);
      res.status(500).json({ message: "Error deleting that project", error });
    }
  }
});

module.exports = router;
