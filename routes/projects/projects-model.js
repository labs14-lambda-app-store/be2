const db = require("../../data/dbConfig.js");

module.exports = {
  getAllProjects,
  getProjectsPerPage,
  getProjectById,
  getProjectTags,
  getProjectCategory,
  getProjectComments,
  getProjectsCount,
  addProject,
  updateProject,
  deleteProject
};

//gets all projects in DB with no filters or pagination
function getAllProjects(searchParameter, approvedFilter) {
  return db("projects");
}

//returns the count of all projects found in DB that match the searchParameter string or approvedFilter boolean
function getProjectsCount(searchParameter, approvedFilter) {
  let filter = approvedFilter ? `AND is_approved = ${approvedFilter}` : "";
  if (approvedFilter && !searchParameter) {
    return db("projects")
      .whereRaw(`is_approved = ${approvedFilter}`)
      .count("id");
  } else {
    return db("projects")
      .whereRaw(
        `(UPPER(name) LIKE UPPER('%${searchParameter}%') or UPPER(description) LIKE UPPER('%${searchParameter}%')) ${filter}`
      )
      .count("id");
  }
}

//sets pagination while getting set amount of projects at a time.  Currently 12 projects per page.
//use approvedFilter parameter to change the is_approved DB query
function getProjectsPerPage(page, searchParameter, approvedFilter) {
  let filter = approvedFilter ? `AND is_approved = ${approvedFilter}` : "";
  let limit = 12;
  let offset = (page - 1) * limit;
  if (searchParameter) {
    return db("projects")
      .whereRaw(
        `(UPPER(name) LIKE UPPER('%${searchParameter}%') or UPPER(description) LIKE UPPER('%${searchParameter}%')) ${filter}`
      )
      .limit(limit)
      .offset(offset);
  } else {
    return db("projects")
      .whereRaw(`is_approved = ${approvedFilter}`)
      .limit(limit)
      .offset(offset);
  }
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

//get category for a project
function getProjectCategory(id) {
  return db("categories as c").where("c.id", id);
}

//get comments for a project
function getProjectComments(id) {
  return db("comments as c").where("c.project_id", id);
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
