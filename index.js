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

module.exports = {};
