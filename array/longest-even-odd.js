/**
 *
 * @param {number[]} arr
 * @returns {number}
 */
function longestEvenOdd(arr) {
  let res = 1;
  let cur = 1;

  for (let i = 1; i < arr.length; i++) {
    if (
      (arr[i] % 2 === 0 && arr[i - 1] % 2 !== 0) ||
      (arr[i - 1] % 2 === 0 && arr[i] % 2 !== 0)
    ) {
      cur++;
      res = Math.max(res, cur);
    } else {
      cur = 1;
    }
  }

  return res;
}

/**
 *
 * @param {number[]} arr
 * @returns {number}
 */
function longestEvenOdd_mine(arr) {
  let res = 0;
  let evenCount = 0;
  let oddCount = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenCount++;
    } else {
      oddCount++;
    }

    if (Math.abs(evenCount - oddCount) > 1) {
      evenCount = 0;
      oddCount = 0;
      i--;
    } else {
      res = Math.max(res, evenCount + oddCount);
    }
  }

  return res;
}

console.log(longestEvenOdd([10, 12, 14, 7, 8]));
console.log(longestEvenOdd([7, 10, 13, 14]));
console.log(longestEvenOdd([10, 12, 8, 4]));
