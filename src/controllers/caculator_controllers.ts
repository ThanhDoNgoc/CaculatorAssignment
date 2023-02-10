import { Request, Response } from "express";
import CaculatorServices from "../services/caculator_services";

export default class CaculatorController {
  private _caculatorService: CaculatorServices;

  constructor(caculatorServices: CaculatorServices) {
    this._caculatorService = caculatorServices;
  }

  public add(request: Request, respone: Response) {
    const num1: number = parseInt(request.body.firstNum);
    const num2: number = parseInt(request.body.secondNum);

    if (!num1 || !num2) {
      respone.status(400).json({
        error: "Not number",
      });
      return;
    }

    const result = this._caculatorService.add(num1, num2);
    respone.status(200).json({
      result: result,
    });
  }

  public subtract(request: Request, respone: Response) {
    const num1: number = parseInt(request.body.firstNum);
    const num2: number = parseInt(request.body.secondNum);

    if (!num1 || !num2) {
      respone.status(400).json({
        error: "Not number",
      });
      return;
    }

    const result = this._caculatorService.add(num1, -num2);
    respone.status(200).json({
      result: result,
    });
  }

  public multiply(request: Request, respone: Response) {
    const num1: number = parseInt(request.body.firstNum);
    const num2: number = parseInt(request.body.secondNum);

    if (!num1 || !num2) {
      respone.status(400).json({
        error: "Not number",
      });
      return;
    }

    const result = this._caculatorService.multiply(num1, num2);
    respone.status(200).json({
      result: result,
    });
  }

  public divide(request: Request, respone: Response) {
    const num1: number = parseInt(request.body.firstNum);
    const num2: number = parseInt(request.body.secondNum);

    if (num2 === 0) {
      respone.status(400).json({
        error: "Divisor must not equal 0",
      });
      return;
    }

    if (!num1 || !num2) {
      respone.status(400).json({
        error: "Not number",
      });
      return;
    }

    const result = this._caculatorService.multiply(num1, 1 / num2);
    respone.status(200).json({
      result: result,
    });
  }
}
