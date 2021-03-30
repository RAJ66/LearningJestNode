const index = require("./index");

beforeEach(() => {
  //console.log("before each test");
});

afterEach(() => {
  //console.log("after each test");
});

beforeAll(() => {
  console.log("before all test");
});

afterAll(() => {
  console.log("after all test");
});

test("first test", () => {
  const result = index.helloUser("Vitor");
  expect(result).toEqual("Hi");
});

test("second test", () => {
  const result = index.helloUser("Barbosa");
  expect(result).toEqual("Hello Barbosa");
});

test("adds 1 + 2 to equal 3", () => {
  expect(index.sum(1, 2)).toBe(3);
});

test("type 1 + 2 is number", () => {
  expect(typeof index.sum(1, 2)).toBe("number");
});

test("adds Vitor + 2 to equal false", () => {
  expect(index.sum("Vitor", 2)).toBeFalsy();
});

test("adds Vitor + Barbosa to equal false", () => {
  expect(index.sum("Vitor", "Barbosa")).toBeFalsy();
});

test("adds 2 + Barbosa to equal false", () => {
  expect(index.sum(2, "Barbosa")).toBeFalsy();
});
