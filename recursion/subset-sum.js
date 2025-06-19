/**
 * @param {number[]} arr
 * @param {number} target
 * @param {number} idx
 * @returns {number}
 */
function subsetSum(arr, target, idx) {
  if (target === 0) return 1;

  if (idx === arr.length) return 0;
  if (target < 0) return 0;

  return (
    subsetSum(arr, target, idx + 1) + subsetSum(arr, target - arr[idx], idx + 1)
  );
}

console.log(subsetSum([1, 2, 3], 14, 0));
