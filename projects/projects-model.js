const db = require("../data/dbConfig");

module.exports = {
  getProjects, 
  addProject
};

function getProjects() {
  return db("projects");
}

function addProject(project) {
  return db("projects")
    .insert(project)
    .then(([id]) => findById(id));
}

function findById(id) {
  return db("projects")
    .where({ id })
    .first();
}
