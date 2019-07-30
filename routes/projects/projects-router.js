const express = require("express");

const router = express.Router();
const Projects = require("./projects-model");

//endpoint to get all projects
// router.get("/", async (req, res) => {
//   console.log("req.query : ", req.query);
//   let page = req.query.page || 1;
//   try {
//     const projects = await Projects.getProjects(page);
//     res.status(200).json(projects);
//   } catch (error) {
//     console.log("Getting projects error: ", error);
//     res.status(500).json({ message: "error getting projects ", error });
//   }
// });

router.get("/", async (req, res) => {
  console.log("req.query : ", req.query);
  let page = req.query.page || 1;
  try {
    const projects = await Projects.getProjects();
    const projectsPerPage = await Projects.getProjectsPerPage(page);
    for (i = 0; i < projectsPerPage.length; i++) {
      const project = projectsPerPage[i];
      project.tags = await Projects.findProjectTags(project.id);
    }
    res
      .status(200)
      .json({
        projects: projectsPerPage,
        projectLength: projects.length,
        message: "Did somebody order some projects"
      });
  } catch (error) {
    console.log("Getting projects error: ", error);
    res.status(500).json({ message: "error getting projects ", error });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const project = await Projects.getProjectById(req.params.id);
    const tags = await Projects.findProjectTags(req.params.id);
    if (project) {
      res.status(200).json({ ...project, tags });
    } else {
      res
        .status(404)
        .json({ message: "The project with the specified ID does not exist." });
    }
  } catch (error) {
    console.log("Get project by ID error: ", error);
    res.status(500).json({ message: "Error getting that project.", error });
  }
});

//endpoint to post new project
router.post("/", async (req, res) => {
  try {
    const project = await Projects.addProject(req.body);
    res.status(201).json({ message: "Project successfully created." });
  } catch (error) {
    console.log("Create project error: ", error);
    res.status(500).json({ message: "Error creating that project." });
  }
});

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
    console.log("Update project error: ", error);
    res.status(500).json({ message: "Error updating the project.", error });
  }
});

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
    console.log("Delete project error : ", error);
    res.status(500).json({ message: "Error deleting that project", error });
  }
});

module.exports = router;
