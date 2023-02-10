import CaculateServices from "../services/caculator_services";

const caculatorServices = new CaculateServices();

describe("Test caculatorServices.add function", () => {
  it("return value sum of two number", async () => {
    const firstNum = 1;
    const secondNum = 2;

    const result = caculatorServices.add(firstNum, secondNum);

    expect(result).toEqual(3);
  });
});

describe("Test caculatorServices.multiply function", () => {
  it("return value mutiply of two number", async () => {
    const firstNum = 1;
    const secondNum = 2;

    const result = caculatorServices.multiply(firstNum, secondNum);

    expect(result).toEqual(2);
  });
});
