const server = require("../../api/server");
const supertest = require("supertest");
const db = require("../../data/dbConfig");
const { addProject } = require("./projects-model");

describe("Projects", () => {
  beforeEach(async () => {
    await db("projects").truncate();
  });
  describe("GET /", () => {
    it("should return JSON", () => {
      return supertest(server)
        .get("/api/projects")
        .expect("content-type", /json/i);
    });
    it("should return a 200 status code", () => {
      return supertest(server)
        .get("/api/projects")
        .expect(200);
    });
  });
  describe("POST /", () => {
    it("should return with a 201 status code", async () => {
      const project =   {
        name: "Lambda App Store 1",
        category_id: 1,
        is_approved: 0,
        description: "A place for Lambda Students to showcase their beautiful apps!",
        hosted_url: "example hosted url 1",
        frontend_url: "https://github.com/labs14-lambda-app-store/be2",
        backend_url: "https://github.com/labs14-lambda-app-store/FE2",
        submitted_at: "July 18th at 1:00 PM",
        approved_at: "",
        display_image: "example url",
        tags: "example tags",
        in_development: 1,
        is_live: 0,
        is_featured: 0
      };
      const res = await supertest(server)
        .post("/api/projects")
        .send(project)
      expect(res.status).toBe(201);
    });
    it("should return with JSON", async () => {
        const project =   {
          name: "Lambda App Store 1",
          category_id: 1,
          is_approved: 0,
          description: "A place for Lambda Students to showcase their beautiful apps!",
          hosted_url: "example hosted url 1",
          frontend_url: "https://github.com/labs14-lambda-app-store/be2",
          backend_url: "https://github.com/labs14-lambda-app-store/FE2",
          submitted_at: "July 18th at 1:00 PM",
          approved_at: "",
          display_image: "example url",
          tags: "example tags",
          in_development: 1,
          is_live: 0,
          is_featured: 0
        };
        const res = await supertest(server)
          .post("/api/projects")
          .send(project)
        .expect('content-type', /json/i)
      })
    it("should insert projects", async () => {
      await addProject({
        name: "Lambda App Store 1",
        category_id: 1,
        is_approved: false,
        description: "A place for Lambda Students to showcase their beautiful apps!",
        hosted_url: "example hosted url 1",
        frontend_url: "https://github.com/labs14-lambda-app-store/be2",
        backend_url: "https://github.com/labs14-lambda-app-store/FE2",
        submitted_at: "July 18th at 1:00 PM",
        approved_at: "",
        display_image: "example url",
        tags: "example tags",
        in_development: true,
        is_live: false,
        is_featured: false
      });
      await addProject({
        name: "Lambda App Store 2",
        category_id: 1,
        is_approved: false,
        description: "A place for Lambda Students to showcase their beautiful apps!",
        hosted_url: "example hosted url 2",
        frontend_url: "https://github.com/labs14-lambda-app-store/be2",
        backend_url: "https://github.com/labs14-lambda-app-store/FE2",
        submitted_at: "July 18th at 1:00 PM",
        approved_at: "",
        display_image: "example url",
        tags: "example tags",
        in_development: true,
        is_live: false,
        is_featured: false
      });
      const projects = await db('projects')

      expect(projects).toHaveLength(2)
    });
  });
});