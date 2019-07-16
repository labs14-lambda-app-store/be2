const db = require("../data/dbConfig");

module.exports = {
  getProjects, 
  addProject
};

//get all projects
function getProjects() {
  return db("projects");
}

//add project
function addProject(project) {
  return db("projects")
    .insert(project)
    .then(([id]) => findById(id));
}

//find project by project id
function findById(id) {
  return db("projects")
    .where({ id })
    .first();
}
