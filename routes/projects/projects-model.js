const db = require("../../data/dbConfig.js");

module.exports = {
  getProjects,
  getProjectById,
  addProject
};

//get all projects
function getProjects() {
  return db("projects");
}

//find project by project id
function getProjectById(id) {
  return db("projects")
    .where({ id })
    .first();
}

//add project
function addProject(project) {
  return db("projects").insert(project);
}
