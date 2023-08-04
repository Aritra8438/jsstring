/** @format */

String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
};
ab = "Hi";
String.prototype.casefold = function () {
  return this.toLowerCase();
};

module.exports = {};
