/**
 * @param {number} n
 * @param {number} k
 * @returns {number}
 */
function josephus(n, k) {
  if (n === 1) {
    return 0;
  }

  return (josephus(n - 1, k) + k) % n;
}

console.log(josephus(5, 3));

/**
 * @param {number} n
 * @param {number} k
 * @returns {number}
 */
function josephusNaive(n, k) {
  const arr = Array(n).fill(1);
  let remains = n;
  let pos = 0;
  let kRemains = k;

  while (remains !== 1) {
    if (arr[pos] === 1) {
      if (kRemains === 1) {
        arr[pos] = 0;
        kRemains = k;
        remains--;
      } else {
        kRemains--;
      }
      pos = (pos + 1) % n;
      continue;
    }

    pos = (pos + 1) % n;
  }

  return arr.indexOf(1);
}
