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

test("isalnum function returns a boolean value indicating if the string only contains alphanumeric characters or not", () => {
  var inputString = "helloworld";
  var expectedOutput = true;
  expect(inputString.isalnum()).toBe(expectedOutput);

  inputString = "hello World@345";
  expectedOutput = false;
  expect(inputString.isalnum()).toBe(expectedOutput);
});

test("count method returns the count the occurrences of a specified substring or character within the given string", () => {
  var inputString = "Hello World";
  var stringToSearch = "";
  var expectedOutput = 12;
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

  inputString = "Hello Hello World, Hello";
  stringToSearch = "Hello ";
  expectedOutput = 2;
  expect(inputString.count(stringToSearch, 0, 100)).toBe(expectedOutput);

  inputString = "Hello Hello World, Hello";
  stringToSearch = "Hello ";
  expectedOutput = 1;
  expect(inputString.count(stringToSearch, 5, 100)).toBe(expectedOutput);

  inputString = "Hello Hello World, Hello";
  stringToSearch = "Hello ";
  expectedOutput = 0;
  expect(inputString.count(stringToSearch, 7, 100)).toBe(expectedOutput);

  inputString = "Hello Hello World, Hello";
  stringToSearch = "Hello ";
  expectedOutput = 0;
  expect(inputString.count(stringToSearch, 100, 7)).toBe(expectedOutput);
});

test("endswith method determines whether the string ends with the specified suffix", () => {
  var inputString = "Hello, World!";
  var suffix = "";
  var expectedOutput = true;
  expect(inputString.endswith(suffix)).toBe(expectedOutput);

  inputString = "Hello, World!";
  suffix = "World!";
  expectedOutput = true;
  expect(inputString.endswith(suffix)).toBe(expectedOutput);

  inputString = "Hello, World!";
  suffix = "Hello";
  expectedOutput = false;
  expect(inputString.endswith(suffix)).toBe(expectedOutput);

  inputString = "Hello, World!";
  suffix = "!";
  expectedOutput = false;
  expect(inputString.endswith(suffix, 10, 1)).toBe(expectedOutput);

  inputString = "Hello, World!";
  suffix = "WORLD!";
  expectedOutput = false;
  expect(inputString.endswith(suffix)).toBe(expectedOutput);

  inputString = "Hello, World!";
  suffix = "o";
  expectedOutput = true;
  expect(inputString.endswith(suffix, -1, 5)).toBe(expectedOutput);

  inputString = "Hello, World!";
  suffix = "!";
  expectedOutput = true;
  expect(inputString.endswith(suffix, 5, 100)).toBe(expectedOutput);

  inputString = "";
  suffix = "";
  expectedOutput = true;
  expect(inputString.endswith(suffix)).toBe(expectedOutput);

  inputString = "Hello, World!";
  suffix = "Hello, World!";
  expectedOutput = true;
  expect(inputString.endswith(suffix)).toBe(expectedOutput);

  inputString = "Hello, World!";
  suffix = "!";
  expectedOutput = true;
  expect(inputString.endswith(suffix)).toBe(expectedOutput);

  inputString = "Hello, World!";
  suffix = "Hello, World! ";
  expectedOutput = false;
  expect(inputString.endswith(suffix)).toBe(expectedOutput);

  inputString = "Hello, World!";
  var expectedTypeError = "'suffix' must be a string";
  suffix = 5;
  expect(() => inputString.endswith(suffix)).toThrow(expectedTypeError);
});

test("split method splits the string into an array of substrings", () => {
  var inputString = "Hello, World!";
  var separator = ",";
  var expectedOutput = ["Hello", " World!"];
  expect(inputString.pysplit(separator)).toEqual(expectedOutput);

  separator = " ";
  expectedOutput = ["Hello,", "World!"];
  expect(inputString.pysplit(separator)).toEqual(expectedOutput);

  separator = "o";
  expectedOutput = ["Hell", ", W", "rld!"];
  expect(inputString.pysplit(separator)).toEqual(expectedOutput);

  separator = "!";
  expectedOutput = ["Hello, World", ""];
  expect(inputString.pysplit(separator)).toEqual(expectedOutput);

  separator = " ";
  var maxsplit = 1;
  expectedOutput = ["Hello,", "World!"];
  expect(inputString.pysplit(separator, maxsplit)).toEqual(expectedOutput);

  separator = " ";
  maxsplit = 2;
  expectedOutput = ["Hello,", "World!"];
  expect(inputString.pysplit(separator, maxsplit)).toEqual(expectedOutput);

  separator = " ";
  maxsplit = 0;
  expectedOutput = ["Hello, World!"];
  expect(inputString.pysplit(separator, maxsplit)).toEqual(expectedOutput);

  separator = " ";
  maxsplit = -1;
  expectedOutput = ["Hello,", "World!"];
  expect(inputString.pysplit(separator, maxsplit)).toEqual(expectedOutput);

  separator = " ";
  maxsplit = 2;
  expectedOutput = ["Hello,", "World!"];
  expect(inputString.pysplit(separator, maxsplit)).toEqual(expectedOutput);

  separator = " ";
  maxsplit = 100;
  expectedOutput = ["Hello,", "World!"];
  expect(inputString.pysplit(separator, maxsplit)).toEqual(expectedOutput);

  var expectedTypeError = "'separator' must be a string";
  separator = 123; // Not a string
  expect(() => inputString.pysplit(separator)).toThrow(expectedTypeError);

  expectedTypeError = "'maxsplit' must be a number";
  separator = " ";
  maxsplit = "abc"; // Not a number
  expect(() => inputString.pysplit(separator, maxsplit)).toThrow(
    expectedTypeError
  );

  var expectedValueError = "ValueError: empty separator";
  separator = "";
  expect(() => inputString.pysplit(separator)).toThrow(expectedValueError);
});
