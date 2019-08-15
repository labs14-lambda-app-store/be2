const server = require("../../api/server");
const supertest = require("supertest");
const db = require("../../data/dbConfig");

const tag = { tag_name: "JavaScript" };

describe("Tags", () => {
  beforeEach(async () => {
    await db("tags").truncate();
  });
  describe("GET /", () => {
    it("should return JSON", () => {
      return supertest(server)
        .get("/api/tags")
        .expect("content-type", /json/i);
    });
    it("should return a 200 status code", () => {
      return supertest(server)
        .get("/api/tags")
        .expect(200);
    });
  });
  describe("POST /", () => {
    it("should return a 201 when creating a new tag", async () => {
      const res = await supertest(server)
        .post("/api/tags")
        .send(tag);

      expect(res.status).toBe(201);
    });
    it("should return JSON when creating a new tag", async () => {
      const res = await supertest(server)
        .post("/api/tags")
        .send(tag)
        .expect("content-type", /json/i);
    });
  });
  describe("DELETE /", () => {
    it("should return a 200 when deleting a tag", async () => {
      await supertest(server)
        .post("/api/tags")
        .send(tag);

      const res = await supertest(server)
        .delete("/api/tags/1")
        .send(tag);

      expect(res.status).toBe(200);
    });
  });
});
