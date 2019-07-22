const express = require("express");
const server = express();
const cors = require("cors");

server.use(express.json());
server.use(cors());

const projectsRouter = require("../routes/projects/projects-router.js");
const categoriesRouter = require("../routes/categories/categories-router.js");
const usersRouter = require("../routes/users/users-router.js");

server.use("/api/projects", projectsRouter);
server.use("/api/categories", categoriesRouter);
server.use("/api/users", usersRouter);

const repoUrl = `https://github.com/labs14-lambda-app-store`;

server.get("/", (req, res) => {
  res.json(
    `Lambda School Labs 14 - Lambda App Store - GitHub Repo: ${repoUrl}`
  );
});

module.exports = server;
