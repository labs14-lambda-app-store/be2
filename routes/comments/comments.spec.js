const server = require("../../api/server");
const supertest = require("supertest");
const db = require("../../data/dbConfig");

describe("Comments", () => {
  beforeEach(async () => {
    await db("comments").truncate();
  });
  describe("GET /", () => {
    it("should return JSON", () => {
      return supertest(server)
        .get("/api/comments")
        .expect("content-type", /json/i);
    });
    it("should return a 200 status code", () => {
      return supertest(server)
        .get("/api/comments")
        .expect(200);
    });
  });
  describe("POST /", () => {
    it("should return a 201 when creating a new comment", async () => {
      const comment = { app_id: 1, comment: "example comment" };
      const res = await supertest(server)
        .post("/api/comments")
        .send(comment);

      expect(res.status).toBe(201);
    });
    it("should return JSON when creating a new comment", async () => {
      const comment = { app_id: 1, comment: "example comment" };
      const res = await supertest(server)
        .post("/api/comments")
        .send(comment)
        .expect("content-type", /json/i);
    });
  });
  describe("DELETE /", () => {
    it("should return a 200 when deleting a comment", async () => {
      const comment = { app_id: 1, comment: "example comment" };
      await supertest(server)
        .post("/api/comments")
        .send(comment);

      const res = await supertest(server)
        .delete("/api/comments/1")
        .send(comment);

      expect(res.status).toBe(200);
    });
  });
});
