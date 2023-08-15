/** @format */

interface String {
  /**
   * Returns the string converted to lower-case.
   */
  casefold(): string;

  /**
   * Returns the capitalized string.
   */
  capitalize(): string;

  /**
   * Returns the position of the first occurrence of a substring in a given range of string if found, else throws ValueError.
   * @param value The substring to search.
   * @param start The position to start searching. If omitted, search starts at the beginning.
   * @param end Search upto this position. If omitted, searches till the end of the string.
   */
  index(value: string, start?: number, end?: number): number | undefined;

  /**
   * Returns the count of the occurrences of a specified substring or character within the given string.
   * @param sub The substring to search.
   * @param start The position to start searching. If omitted, search starts at the beginning.
   * @param end Search upto this position. If omitted, searches till the end of the string.
   */
  count(sub: string, start?: number, end?: number): number;

  /**
   * Returns true if the given string ends with the specified suffix within a specified range, else false.
   * @param suffix The suffix to check.
   * @param start The position to start checking. If omitted, check starts at the beginning.
   * @param end Check up to this position. If omitted, checks until the end of the string.
   */
  endswith(suffix: string, start?: number, end?: number): boolean | undefined;

  /**
   * Returns an array of substrings obtained after splitting the given string using a specified separator and maximum number of splits.
   * @param separator The string used to determine where to split the string.
   * @param maxsplit The maximum number of splits. If omitted or negative, the string is split as many times as possible.
   */
  pysplit(separator?: string, maxsplit?: number): string[];

  /**
  * Returns a string centered within a specified width by adding padding characters on both sides.
  * @param width The total width of the centered string.
  * @param fillchar The character used for padding. Must be a single character. Default is a space.
  */
  center(width: number, fillchar: string = ' '): string;
}
