const server = require("../../api/server");
const supertest = require("supertest");

describe("Users", () => {
  describe("GET /", () => {
    it("should return JSON", () => {
      return supertest(server)
        .get("/api/users")
        .expect("content-type", /json/i);
    });
    it("should return a 200 status code", () => {
        return supertest(server)
          .get("/api/users")
          .expect(200);
      });
  })
  describe("POST /", () => {
    it("should return JSON", () => {
      return supertest(server)
        .post("/api/users")
        .expect("content-type", /json/i);
    });
  })
  
});
