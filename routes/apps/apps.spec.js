const server = require("../../api/server");
const supertest = require("supertest");
const db = require("../../data/dbConfig");
const { addApp } = require("./apps-model");

const app = {
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
  in_development: 1,
  is_live: 0,
  is_featured: 0
};
const appTwo = {
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
  in_development: true,
  is_live: false,
  is_featured: false
};

describe("Apps", () => {
  beforeEach(async () => {
    await db("apps").truncate();
  });
  describe("GET /", () => {
    it("should return JSON", () => {
      return supertest(server)
        .get("/api/apps")
        .expect("content-type", /json/i);
    });
    it("should return a 200 status code when approved = false", () => {
      return supertest(server)
        .get("/api/apps?approved=false")
        .expect(200);
    });
    it("should return a 200 status code when approved = true", () => {
      return supertest(server)
        .get("/api/apps?approved=true")
        .expect(200);
    });
    it("should return a 500 status code when there is no approved parameter and page = 1", () => {
      return supertest(server)
        .get("/api/apps?page=1")
        .expect(500);
    });
    it("should return a 200 status code when searchParameter = anything", () => {
      return supertest(server)
        .get("/api/apps?search=anything")
        .expect(200);
    });
    it("should return a 200 status code when approved = true and page = 1", () => {
      return supertest(server)
        .get("/api/apps?approved=true&page=1")
        .expect(200);
    });
    it("should return a 500 status code when there is no approved query", () => {
      return supertest(server)
        .get("/api/apps")
        .expect(500);
    });
    it("should return a 200 status code when retrieving individual app", async () => {
      const res = await supertest(server)
        .post("/api/apps")
        .send(app);
      expect(res.status).toBe(201);
      const getRes = await supertest(server).get("/api/apps/1");
      expect(getRes.status).toBe(200);
    });
  });
  describe("POST /", () => {
    it("should return with a 201 status code", async () => {
      const res = await supertest(server)
        .post("/api/apps")
        .send(app);
      expect(res.status).toBe(201);
    });
    it("should return with JSON", async () => {
      await supertest(server)
        .post("/api/apps")
        .send(app)
        .expect("content-type", /json/i);
    });
    it("should insert apps", async () => {
      await addApp(app);
      await addApp(appTwo);
      const apps = await db("apps");

      expect(apps).toHaveLength(2);
    });
  });
});
