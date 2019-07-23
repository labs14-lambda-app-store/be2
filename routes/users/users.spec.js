const server = require("../../api/server");
const supertest = require("supertest");

describe("Users", () => {
  describe("GET /", () => {
    it("should return JSON", () => {
      return supertest(server)
        .get("/api/users")
        .expect("content-type", /json/i);
    });
  });
});
