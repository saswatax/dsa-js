/**
 * @param {number[]} arr
 * @returns {number}
 */
function maximumCircularSubArray(arr) {
  const maxNormal = maximumSubArray(arr);

  if (maxNormal < 0) {
    return maxNormal;
  }

  let arrSum = 0;
  for (let i = 0; i < arr.length; i++) {
    arrSum += arr[i];
    arr[i] = -arr[i];
  }

  const circularMax = arrSum + maximumSubArray(arr);

  return Math.max(maxNormal, circularMax);
}

/**
 * @param {number[]} arr
 * @returns {number}
 */
function maximumSubArray(arr) {
  let res = arr[0];
  let cur = arr[0];

  for (let i = 1; i < arr.length; i++) {
    cur = Math.max(cur + arr[i], arr[i]);
    res = Math.max(res, cur);
  }

  return res;
}

console.log(maximumCircularSubArray([5, -2, 3, 4]));
console.log(maximumCircularSubArray([2, 3, -4]));
console.log(maximumCircularSubArray([8, -4, 3, -5, 4]));
console.log(maximumCircularSubArray([-3, 4, 6, -2]));
