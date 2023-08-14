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
  if (typeof suffix !== "string") {
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
  substring = this.slice(start, end);
  return substring.endsWith(suffix);
};

String.prototype.pysplit = function (separator = " ", maxsplit = -1) {
  if (typeof separator !== "string") {
    throw new TypeError("'separator' must be a string");
  }
  if (typeof maxsplit !== "number") {
    throw new TypeError("'maxsplit' must be a number");
  }
  if (separator === "") {
    throw new Error("ValueError: empty separator");
  }
  if (maxsplit === -1) {
    return this.split(separator);
  }
  if (maxsplit === 0) {
    return [this.toString()];
  }
  const tokens = this.split(separator);
  const concatenation = [tokens.slice(maxsplit).join(separator)];
  return concatenation == ""
    ? tokens.slice(0, maxsplit)
    : tokens.slice(0, maxsplit).concat(concatenation);
};

String.prototype.center = function (width, fillchar = ' ') {
  if (typeof width !== 'number') {
    throw new TypeError("'width' must be a number");
  }

  if (typeof fillchar !== 'string' || fillchar.length !== 1) {
    throw new TypeError("The fill character must be exactly one character long");
  }

  if (this.length >= width) {
    return this.toString();
  }

  const padding = width - this.length;
  const leftPadding = Math.floor(padding / 2);
  const rightPadding = padding - leftPadding;

  const centeredText = fillchar.repeat(leftPadding) + this + fillchar.repeat(rightPadding);

  return centeredText;
};

module.exports = {};
