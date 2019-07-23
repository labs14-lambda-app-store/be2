const db = require("../../data/dbConfig.js");

module.exports = {
  getProjects,
  getProjectById,
  addProject,
  updateProject,
  deleteProject
};

//get all projects
function getProjects() {
  return db("projects");
}

//get project by project id
function getProjectById(id) {
  return db("projects")
    .where({ id })
    .first();
}

//add new project
function addProject(project) {
  return db("projects")
    .insert(project)
    .then(ids => ({ id: ids[0] }));
}

//update existing project
function updateProject(id, project) {
  return db("projects")
    .where({ id })
    .update(project);
}

//delete existing project
function deleteProject(id) {
  return db("projects")
    .where({ id })
    .del();
}
