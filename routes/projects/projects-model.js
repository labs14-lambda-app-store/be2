const db = require("../../data/dbConfig.js");

module.exports = {
  getProjects,
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

//approvedFilter will take in either true or false
// if true: query DB for all projects where is_approved === true
// if false: query DB for all projects where is_approved === false
// need to make sure project length isn't screwed in the process
// might need to take projectLength state out of Redux or separate into pendingProjectLength and
//get all projects

//WE NEED THIS
//total count of all is_approved = true projects with optional search param
//total count of all is_approved = false projects with optional search param

function getProjects(searchParameter, approvedFilter) {
  if (searchParameter) {
    return db("projects").whereRaw(
      `UPPER(name) LIKE UPPER('%${searchParameter}%') or UPPER(description) LIKE UPPER('%${searchParameter}%')`
    );
  } else {
    return db("projects");
  }
}

//returns the count of all projecs with the searchParameter or approvedFilter
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
  return db("comments as c").where("c.id", id);
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
