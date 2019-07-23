const server = require("../../api/server");
const supertest = require("supertest");
const db = require("../../data/dbConfig");
const { addCategory } = require("./categories-model");

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
});
