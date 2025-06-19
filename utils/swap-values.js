/**
 * swap two values
 * @param {any} a
 * @param {any} b
 * @returns {any[]}
 */
export default function swapValues(a, b) {
  a = a ^ b;
  b = a ^ b;
  a = a ^ b;

  return [a, b];
}
