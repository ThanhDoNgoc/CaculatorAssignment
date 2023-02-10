import express from "express";
import CaculatorController from "../controllers/caculator_controllers";
import CaculatorServices from "../services/caculator_services";

const caculatorRouter = express.Router();
const caculatorServices = new CaculatorServices();
const caculatorController = new CaculatorController(caculatorServices);

caculatorRouter.get("/add", (req, res) => {
  caculatorController.add(req, res);
});

caculatorRouter.get("/subtract", (req, res) => {
  caculatorController.subtract(req, res);
});

caculatorRouter.get("/multiply", (req, res) => {
  caculatorController.multiply(req, res);
});

caculatorRouter.get("/divide", (req, res) => {
  caculatorController.divide(req, res);
});

export { caculatorRouter };
