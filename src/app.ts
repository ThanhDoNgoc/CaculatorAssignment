import express, { Express } from "express";
import bodyParser from "body-parser";
import { caculatorRouter } from "./routes/caculator_routes";

export class App {
  private app: Express;
  private port = process.env.PORT || 3000;

  constructor(_app: Express) {
    this.app = _app;
  }

  public async start() {
    this.app.listen(this.port, () => {
      this.initMiddleware();
      this.initRoutes();
      console.log(`Application is running on http://localhost:${this.port}`);
    });
  }

  public async initRoutes() {
    this.app.use("/api", caculatorRouter);
  }

  public async initMiddleware() {
    this.app.use(bodyParser.json());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }
}
