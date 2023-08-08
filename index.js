/** @format */

String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
};

String.prototype.casefold = function () {
  return this.toLowerCase();
};

String.prototype.index = function (value, start = 0, end = this.length) {
  position = this.slice(0, end).indexOf(value, start);
  if (position != -1) return position;
  else {
    err = new Error("substring not found");
    err.name = "ValueError";
    throw err;
  }
};

String.prototype.count = function (subString, start = 0, end = this.length) {
  if (start < 0 || end < start || end > this.length) {
    const err = new Error("Invalid start or end parameters");
    err.name = "ValueError";
    throw err;
  }

  let count = 0;
  let position = this.indexOf(subString, start);

  while (position !== -1 && position < end) {
    count++;
    position = this.indexOf(subString, position + subString.length);
  }

  return count;
};

module.exports = {};
