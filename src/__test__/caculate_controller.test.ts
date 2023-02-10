import request from "supertest";
import express from "express";
import { App } from "../app";

const app = express();
const server = new App(app);

server.initMiddleware();
server.initRoutes();

describe("GET /api/add", () => {
  it("should return sum of two numbers", async () => {
    const num1: number = 1;
    const num2: number = 2;

    const data = { firstNum: num1, secondNum: num2 };

    await request(app)
      .get("/api/add")
      .send(data)
      .expect(200)
      .then((response) => {
        expect(response.body.result).toBe(3);
      });
  });
  it("should return error if input is not number", async () => {
    const num1: number = 1;
    const num2: string = "some string";

    const data = { firstNum: num1, secondNum: num2 };

    await request(app)
      .get("/api/add")
      .send(data)
      .expect(400)
      .then((response) => {
        expect(response.body.error).toBe("Not number");
      });
  });
});

describe("GET /api/subtract", () => {
  it("should return subtract of two numbers", async () => {
    const num1: number = 1;
    const num2: number = 2;

    const data = { firstNum: num1, secondNum: num2 };

    await request(app)
      .get("/api/subtract")
      .send(data)
      .expect(200)
      .then((response) => {
        expect(response.body.result).toBe(-1);
      });
  });
  it("should return error if input is not number", async () => {
    const num1: number = 1;
    const num2: string = "some string";

    const data = { firstNum: num1, secondNum: num2 };

    await request(app)
      .get("/api/subtract")
      .send(data)
      .expect(400)
      .then((response) => {
        expect(response.body.error).toBe("Not number");
      });
  });
});

describe("GET /api/multiply", () => {
  it("should return multiply of two numbers", async () => {
    const num1: number = 2;
    const num2: number = 3;

    const data = { firstNum: num1, secondNum: num2 };

    await request(app)
      .get("/api/multiply")
      .send(data)
      .expect(200)
      .then((response) => {
        expect(response.body.result).toBe(6);
      });
  });
  it("should return error if input is not number", async () => {
    const num1: number = 1;
    const num2: string = "some string";

    const data = { firstNum: num1, secondNum: num2 };

    await request(app)
      .get("/api/multiply")
      .send(data)
      .expect(400)
      .then((response) => {
        expect(response.body.error).toBe("Not number");
      });
  });
});

describe("GET /api/divide", () => {
  it("should return divide of two numbers", async () => {
    const num1: number = 6;
    const num2: number = 3;

    const data = { firstNum: num1, secondNum: num2 };

    await request(app)
      .get("/api/divide")
      .send(data)
      .expect(200)
      .then((response) => {
        expect(response.body.result).toBe(2);
      });
  });

  it("should return error if input is not number", async () => {
    const num1: number = 1;
    const num2: string = "some string";

    const data = { firstNum: num1, secondNum: num2 };

    await request(app)
      .get("/api/divide")
      .send(data)
      .expect(400)
      .then((response) => {
        expect(response.body.error).toBe("Not number");
      });
  });

  it("should return error if divider input is 0", async () => {
    const num1: number = 1;
    const num2: number = 0;

    const data = { firstNum: num1, secondNum: num2 };

    await request(app)
      .get("/api/divide")
      .send(data)
      .expect(400)
      .then((response) => {
        expect(response.body.error).toBe("Divisor must not equal 0");
      });
  });
});
