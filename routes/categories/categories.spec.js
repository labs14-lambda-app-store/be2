const server = require("../../api/server");
const supertest = require("supertest");

describe("Categories", () => {
  describe("GET /", () => {
    it("should return JSON", () => {
      return supertest(server)
        .get("/api/categories")
        .expect("content-type", /json/i);
    });
  });
});
