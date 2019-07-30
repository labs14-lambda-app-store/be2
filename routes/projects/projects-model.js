const db = require("../../data/dbConfig.js");

module.exports = {
  getProjects,
  getProjectById,
  addProject,
  updateProject,
  deleteProject,
  findProjectTags
};

//get all projects
function getProjects(page) {
  let limit = 12;
  let offset = (page - 1) * limit;
  return db("projects")
    .limit(limit)
    .offset(offset);
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

function findProjectTags(id) {
  return db("projects as p")
    .join("projects_tags as pt", "pt.project_id", "p.id")
    .join("tags as t", "t.id", "pt.tag_id")
    .select("t.*")
    .where("p.id", id);
}
