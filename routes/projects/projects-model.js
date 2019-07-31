const db = require("../../data/dbConfig.js");

module.exports = {
  getProjects,
  getProjectsPerPage,
  getProjectById,
  getProjectTags,
  addProject,
  updateProject,
  deleteProject
};

//get all projects
function getProjects() {
  return db("projects");
}

//sets pagination while getting set amount of projects at a time.  Currently 12 projects per page.
// function getProjectsPerPage(page, projectName) {
//   let limit = 12;
//   let offset = (page - 1) * limit;
// return db("projects")
//   .where({ name: projectName })
//   .limit(limit)
//   .offset(offset);
// }

function getProjectsPerPage(page, searchParameter) {
  let limit = 3;
  let offset = (page - 1) * limit;
  console.log(searchParameter);
  if (searchParameter) {
    return db.raw(
      `SELECT * FROM projects WHERE UPPER(name) LIKE UPPER('%${searchParameter}%') or UPPER(description) LIKE UPPER('%${searchParameter}%') LIMIT ${limit} OFFSET ${offset}`
    );
  } else {
    return db("projects")
      .limit(limit)
      .offset(offset);
  }

  // .limit(limit)
  // .offset(offset);
}

//get project by project id
function getProjectById(id) {
  return db("projects")
    .where({ id })
    .first();
}

//get all tags for a project
function getProjectTags(id) {
  return db("projects as p")
    .join("projects_tags as pt", "pt.project_id", "p.id")
    .join("tags as t", "t.id", "pt.tag_id")
    .select("t.*")
    .where("p.id", id);
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
