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

String.prototype.count = function (sub, start = 0, end = this.length) {
  if (sub == "") {
    return end - start > 0 ? end - start + 1 : 0;
  }
  let count = 0;
  let position = this.indexOf(sub, start);
  while (position !== -1 && position < end) {
    count++;
    position = this.indexOf(sub, position + sub.length);
  }
  return count;
};

String.prototype.endswith = function (suffix, start = 0, end = this.length) {
  if (typeof suffix !== 'string') {
    throw new Error("TypeError: 'suffix' must be a string");
  }

  if (end > this.length) {
    end = this.length;
  }

  if (start < 0) {
    start = 0;
  }

  if (end - start < suffix.length) {
    return false;
  }

  const substring = this.slice(start, end);
  return substring.lastIndexOf(suffix) === substring.length - suffix.length;
};

module.exports = {};
