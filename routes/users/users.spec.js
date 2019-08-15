const server = require("../../api/server");
const supertest = require("supertest");
const db = require("../../data/dbConfig");
const { addUser } = require("./users-model");

const user = {
  username: "Username",
  email: "Email",
  sub_id: 1,
  first_name: "First",
  last_name: "Last",
  pictureURL: "string"
};

const userTwo = {
  username: "Username2",
  email: "Email2",
  sub_id: 1,
  first_name: "First",
  last_name: "Last",
  pictureURL: "string"
};

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
    it("should return a 200 when fetching individual user", async () => {
      await supertest(server)
        .post("/api/users")
        .send(user);

      const res = await supertest(server).get("/api/users/1");

      expect(res.status).toBe(200);
    });
  });
  describe("POST /", () => {
    it("should return with a 201 status code", async () => {
      const res = await supertest(server)
        .post("/api/users")
        .send(user);
      expect(res.status).toBe(201);
    });
    it("should insert users", async () => {
      await addUser(user);
      await addUser(userTwo);
      const users = await db("users");

      expect(users).toHaveLength(2);
    });
  });
  describe("DELETE", () => {
    it("should return a 200 when deleting a user", async () => {
      await supertest(server)
        .post("/api/users")
        .send(user);

      const res = await supertest(server)
        .delete("/api/users/1")
        .send(user);

      expect(res.status).toBe(200);
    });
  });
});
