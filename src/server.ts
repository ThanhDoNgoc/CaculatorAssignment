import express from "express";
import * as dotenv from "dotenv";
import { App } from "./app";

dotenv.config();
const app = express();
const server = new App(app);

server.start();

export default server;
