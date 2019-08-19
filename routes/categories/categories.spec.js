const server = require("../../api/server");
const supertest = require("supertest");
const db = require("../../data/dbConfig");

describe("Categories", () => {
  beforeEach(async () => {
    await db("categories").truncate();
  });
  describe("GET /", () => {
    it("should return JSON", () => {
      return supertest(server)
        .get("/api/categories")
        .expect("content-type", /json/i);
    });
    it("should return a 200 status code", () => {
      return supertest(server)
        .get("/api/categories")
        .expect(200);
    });
  });
  describe("POST /", () => {
    it("should return a 201 status code when a new category is added", async () => {
      const category = {
        category_name: "Business"
      };
      const res = await supertest(server)
        .post("/api/categories")
        .send(category);
      expect(res.status).toBe(201);
    });
    it("should return a JSON when a new category is added", async () => {
      const category = {
        category_name: "Business"
      };
      const res = await supertest(server)
        .post("/api/categories")
        .send(category)
        .expect("content-type", /json/i);
    });
  });
  describe("DELETE /", () => {
    it("should return a 200 when removing category", async () => {
      const category = { category_name: "Business" };
      await supertest(server)
        .post("/api/categories/")
        .send(category);

      const res = await supertest(server)
        .delete("/api/categories/1")
        .send(category);

      expect(res.status).toBe(200);
    });
  });
});
