const server = require("../../api/server");
const supertest = require("supertest");
const db = require("../../data/dbConfig");
const { addUser } = require("./users-model");

describe("Users", () => {
  beforeEach(async () => {
    await db("users").truncate();
  });
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
  });
  describe("POST /", () => {
    it("should return with a 201 status code", async () => {
      const user = {
        username: "Username",
        email: "Email",
        password: "Password",
        sub_id: 1,
        first_name: "First",
        last_name: "Last",
        pictureURL: "string"
      };
      const res = await supertest(server)
        .post("/api/users")
        .send(user);
      expect(res.status).toBe(201);
    });
    it("should insert users", async () => {
      await addUser({
        username: "Username1",
        email: "Email1",
        password: "Password",
        sub_id: 1,
        first_name: "First",
        last_name: "Last",
        pictureURL: "string"
      });
      await addUser({
        username: "Username2",
        email: "Email2",
        password: "Password",
        sub_id: 1,
        first_name: "First",
        last_name: "Last",
        pictureURL: "string"
      });
      const users = await db('users')

      expect(users).toHaveLength(2)
    });
  });
});
