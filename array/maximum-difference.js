/**
 * @param {number[]} arr
 * @returns {number}
 */
function maximumDifference(arr) {
  if (arr.length < 2) return -1;

  let res = arr[1] - arr[0];
  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    res = Math.max(arr[i] - min, res);
    min = Math.min(arr[i], min);
  }

  return res;
}

console.log(maximumDifference([2, 3, 10, 6, 4, 8, 1]));
