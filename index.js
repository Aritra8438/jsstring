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
    throw new TypeError("'suffix' must be a string");
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
  return substring.endsWith(suffix);
};

String.prototype.split = function (separator = " ", maxsplit = -1) {
  if (typeof separator !== 'string') {
    throw new TypeError("'separator' must be a string");
  }
  if (typeof maxsplit !== 'number') {
    throw new TypeError("'maxsplit' must be a number");
  }
  if (separator === "") {
    throw new Error("ValueError: 'separator' cannot be empty");
  }
  if (maxsplit === 0) {
    return [this.toString()];
  }
  const result = maxsplit > 0 ? this.split(separator, maxsplit - 1) : this.split(separator);
  return result.map((substring, index) => {
    if (index >= result.length - 1) {
      return substring;
    }
    return maxsplit === -1 ? substring : substring + separator;
  });
};

module.exports = {};
