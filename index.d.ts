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
}
