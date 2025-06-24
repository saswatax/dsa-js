/**
 * @param {number[]} arr
 * @returns {number}
 */
function maximumCircularSubArray(arr) {
  let res = arr[0];
  let cur = arr[0];

  for (let i = 1; i < 2 * arr.length - 1; i++) {
    cur = Math.max(cur + arr[i % arr.length], arr[i % arr.length]);
    res = Math.max(res, cur);
    console.log(arr[i % arr.length]);
  }

  return res;
}

console.log(maximumCircularSubArray([5, -2, 3, 4]));
console.log(maximumCircularSubArray([2, 3, -4]));
console.log(maximumCircularSubArray([8, -4, 3, -5, 4]));
console.log(maximumCircularSubArray([-3, 4, 6, -2]));
