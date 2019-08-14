const express = require("express");
const server = express();
const cors = require("cors");

server.use(express.json());
server.use(cors());

const appsRouter = require("../routes/apps/apps-router.js");
const categoriesRouter = require("../routes/categories/categories-router.js");
const usersRouter = require("../routes/users/users-router.js");
const tagsRouter = require("../routes/tags/tags-router.js");
const commentsRouter = require("../routes/comments/comments-router.js");

server.use("/api/apps", appsRouter);
server.use("/api/categories", categoriesRouter);
server.use("/api/users", usersRouter);
server.use("/api/tags", tagsRouter);
server.use("/api/comments", commentsRouter);

const repoUrl = `https://github.com/labs14-lambda-app-store`;

server.get("/", (req, res) => {
  res.json(
    `Lambda School Labs 14 - Lambda App Store - GitHub Repo: ${repoUrl}`
  );
});

module.exports = server;
