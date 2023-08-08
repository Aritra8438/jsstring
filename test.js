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

test("casefold method converts every letter to lowercase", () => {
  var inputString = "Hello World";
  var expectedOutput = "hello world";
  expect(inputString.casefold()).toBe(expectedOutput);

  inputString = "HELLO WORLD";
  expectedOutput = "hello world";
  expect(inputString.casefold()).toBe(expectedOutput);
});

test("index method returns the first occurrence of the substring in the given range", () => {
  var inputString = "Hello world";
  var expectedValueError = "substring not found";

  var stringToSearch = "";
  var expectedOutput = 0;
  expect(inputString.index(stringToSearch)).toBe(expectedOutput);

  stringToSearch = "H";
  expectedOutput = 0;
  expect(inputString.index(stringToSearch)).toBe(expectedOutput);

  stringToSearch = "h";
  expect(() => inputString.index(stringToSearch)).toThrow(expectedValueError);

  stringToSearch = "H";
  expect(() => inputString.index(stringToSearch, 1)).toThrow(
    expectedValueError
  );

  stringToSearch = "e";
  expectedOutput = 1;
  expect(inputString.index(stringToSearch, 1, 2)).toBe(expectedOutput);

  stringToSearch = "e";
  expect(() => inputString.index(stringToSearch, 0, 1)).toThrow(
    expectedValueError
  );

  stringToSearch = "o";
  expectedOutput = 7;
  expect(inputString.index(stringToSearch, 5)).toBe(expectedOutput);

  stringToSearch = "o";
  expectedOutput = 7;
  expect(() => inputString.index(stringToSearch, 5, 7)).toThrow(
    expectedValueError
  );

  stringToSearch = "Hello";
  expectedOutput = 0;
  expect(inputString.index(stringToSearch)).toBe(expectedOutput);

  stringToSearch = "ello";
  expectedOutput = 1;
  expect(inputString.index(stringToSearch)).toBe(expectedOutput);

  stringToSearch = "world";
  expectedOutput = 6;
  expect(inputString.index(stringToSearch)).toBe(expectedOutput);

  stringToSearch = " w";
  expectedOutput = 5;
  expect(inputString.index(stringToSearch)).toBe(expectedOutput);

  stringToSearch = "H";
  expect(() => inputString.index(stringToSearch, 0, 0)).toThrow(
    expectedValueError
  );

  stringToSearch = "word";
  expect(() => inputString.index(stringToSearch)).toThrow(expectedValueError);

  stringToSearch = " world.";
  expect(() => inputString.index(stringToSearch)).toThrow(expectedValueError);
});

test("count method returns the count the occurrences of a specified substring or character within the given string", () => {
  var inputString = "Hello World";
  var stringToSearch = "";
  var expectedOutput = 0;
  expect(inputString.count(stringToSearch)).toBe(expectedOutput);

  inputString = "Hello World";
  stringToSearch = "Hello";
  expectedOutput = 1;
  expect(inputString.count(stringToSearch)).toBe(expectedOutput);

  inputString = "Hello Hello World, Hello";
  stringToSearch = "Hello";
  expectedOutput = 3;
  expect(inputString.count(stringToSearch)).toBe(expectedOutput);

  inputString = "HELLO WORLD";
  stringToSearch = "Hello";
  expectedOutput = 0;
  expect(inputString.count(stringToSearch)).toBe(expectedOutput);

  inputString = "HELLO WORLD";
  stringToSearch = "O";
  expectedOutput = 2;
  expect(inputString.count(stringToSearch)).toBe(expectedOutput);

  inputString = "HELLO WORLD";
  stringToSearch = "o";
  expectedOutput = 0;
  expect(inputString.count(stringToSearch)).toBe(expectedOutput);

  inputString = "Hello Hello World, Hello";
  stringToSearch = "Hello ";
  expectedOutput = 2;
  expect(inputString.count(stringToSearch)).toBe(expectedOutput);

  var expectedValueError = "Invalid start or end parameters";
  inputString = "Hello Hello World, Hello";
  stringToSearch = "Hello ";
  expect(() => inputString.index(stringToSearch, 7, 2)).toThrow(expectedValueError);

  inputString = "Hello Hello World, Hello";
  stringToSearch = "Hello ";
  expect(() => inputString.index(stringToSearch, 7, 100)).toThrow(expectedValueError);

  inputString = "Hello Hello World, Hello";
  stringToSearch = "Hello ";
  expect(() => inputString.index(stringToSearch, -1, 10)).toThrow(expectedValueError);

});
