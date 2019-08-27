const db = require("../../data/dbConfig.js");

module.exports = {
  getAllApps,
  getAppsPerPage,
  getAppById,
  getAppTags,
  getAppCategory,
  getAppComments,
  getAppsCount,
  getAppUsers,
  addApp,
  updateApp,
  deleteApp
};

//gets all apps in DB with no filters or pagination
function getAllApps() {
  return db("apps");
}

//returns the count of all apps found in DB that match the searchParameter string or approvedFilter boolean
function getAppsCount(searchParameter, approvedFilter) {
  let filter = approvedFilter ? `AND is_approved = ${approvedFilter}` : "";
  if (approvedFilter && !searchParameter) {
    return db("apps")
      .whereRaw(`is_approved = ${approvedFilter}`)
      .count("id");
  } else {
    return db("apps")
      .whereRaw(
        `(UPPER(name) LIKE UPPER('%${searchParameter}%') or UPPER(description) LIKE UPPER('%${searchParameter}%')) ${filter}`
      )
      .count("id");
  }
}

//sets pagination while getting set amount of apps at a time.  Currently 12 apps per page.
//use approvedFilter parameter to change the is_approved DB query
function getAppsPerPage(page, searchParameter, approvedFilter) {
  let filter = approvedFilter ? `AND is_approved = ${approvedFilter}` : "";
  let limit = 12;
  let offset = (page - 1) * limit;
  if (searchParameter) {
    return db("apps")
      .whereRaw(
        `(UPPER(name) LIKE UPPER('%${searchParameter}%') or UPPER(description) LIKE UPPER('%${searchParameter}%')) ${filter}`
      )
      .limit(limit)
      .offset(offset);
  } else {
    return db("apps")
      .whereRaw(`is_approved = ${approvedFilter}`)
      .limit(limit)
      .offset(offset);
  }
}

//get app by app id
function getAppById(id) {
  return db("apps")
    .where({ id })
    .first();
}

//get all tags for a app
function getAppTags(id) {
  return db("apps as p")
    .join("apps_tags as pt", "pt.app_id", "p.id")
    .join("tags as t", "t.id", "pt.tag_id")
    .select("t.*")
    .where("p.id", id);
}

function getAppUsers(id) {
  return db("apps as a")
    .join("users_apps as ua", "ua.app_id", "a.id")
    .join("users as u", "u.id", "ua.user_id")
    .select(
      "u.username",
      "u.email",
      "u.first_name",
      "u.last_name",
      "u.pictureURL",
      "u.id"
    )
    .where("a.id", id);
}

//get category for an app
function getAppCategory(id) {
  return db("categories as c").where("c.id", id);
}

//get comments for an app
function getAppComments(id) {
  return db("comments as c").where("c.app_id", id);
}

//add new app
function addApp(app) {
  return db("apps")
    .insert(app, ["id"])
    .then(ids => ids[0]);
}

//update existing app
function updateApp(id, app) {
  return db("apps")
    .where({ id })
    .update(app);
}

//delete existing app
function deleteApp(id) {
  return db("apps")
    .where({ id })
    .del();
}
