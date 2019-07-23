const server = require("../../api/server");
const supertest = require("supertest");

describe("Projects", () => {
  describe("GET /", () => {
    it("should return JSON", () => {
      return supertest(server)
        .get("/api/projects")
        .expect("content-type", /json/i);
    });
  });
});
