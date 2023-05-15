const supertest = require("supertest");
const app = require("./index");
const request = supertest(app);
const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");
const Task = require("./model/task.model");

describe("Task API", () => {
  beforeAll(async () => {
    const mongoServer = await MongoMemoryServer.create();
    await mongoose.connect(mongoServer.getUri());
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await mongoose.connection.close();
  });
  let task;
  beforeEach(async () => {
    task = await Task.create({
      title: "Task 1",
      description: "Task 1 description",
    });
  });
  afterEach(async () => {
    await Task.deleteMany();
  });
  it("should get all tasks", async () => {
    const response = await request.get("/api/v1");
    expect(response.status).toBe(200);
    expect(response.body.length).toBe(1);
  });
  it("should get a task with id", async () => {
    const response = await request.get(`/api/v1/${task._id}`);
    expect(response.status).toBe(200);
    expect(response.body.task.title).toBe(task.title);
  });
  it("should not get a task with invalid id", async () => {
    const response = await request.get(`/api/v1/123`);
    expect(response.status).toBe(404);
  });
  it("should create a task", async () => {
    const response = await request.post("/api/v1").send({
      title: "Task 2",
      description: "Task 2 description",
    });
    expect(response.status).toBe(200);
    expect(response.body.savedTask.title).toBe("Task 2");
  });
  it("should not create a task with duplicate title and description", async () => {
    const response = await request.post("/api/v1").send({
      title: "Task 1",
      description: "Task 1 description",
    });
    expect(response.status).toBe(500);
  });
  it("should not create a task with invalid title length", async () => {
    const response = await request.post("/api/v1").send({
      title: "T",
      description: "Task 1 description",
    });
    expect(response.status).toBe(500);
  });
  it("should update a task", async () => {
    const response = await request.patch(`/api/v1/${task._id}`).send({
      title: "Task 1 updated",
      description: "Task 1 description updated",
    });
    expect(response.status).toBe(200);
    expect(response.body.updatedTask.title).toBe("Task 1 updated");
    expect(response.body.updatedTask.description).toBe(
      "Task 1 description updated"
    );
  });
  it("should not update a task with invalid id", async () => {
    const response = await request.patch(`/api/v1/123`).send({
      title: "Task 1 updated",
      description: "Task 1 description updated",
    });
    expect(response.status).toBe(404);
  });
  it("should delete a task", async () => {
    const response = await request.delete(`/api/v1/${task._id}`);
    expect(response.status).toBe(200);
  });
  it("should not delete a task with invalid id", async () => {
    const response = await request.delete(`/api/v1/123`);
    expect(response.status).toBe(404);
  });
});
