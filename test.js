/** @format */

require("./index");

test("capitalize method capitalizes the first letter of the string and convert other letters to lowercase", () => {
  var inputString = "hello world";
  var expectedOutput = "Hello world";
  expect(inputString.capitalize()).toBe(expectedOutput);
  inputString = "hello World";
  expectedOutput = "Hello world";
  expect(inputString.capitalize()).toBe(expectedOutput);
});

test("casefold method convert every letter to lowercase", () => {
  var inputString = "Hello World";
  var expectedOutput = "hello world";
  expect(inputString.casefold()).toBe(expectedOutput);
  inputString = "HELLO WORLD";
  expectedOutput = "hello world";
  expect(inputString.casefold()).toBe(expectedOutput);
});
