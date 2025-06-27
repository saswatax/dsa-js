/**
 *
 * @param {number[]} arr
 * @param {number} target
 * @returns {number}
 */
function firstOccurrenceIndex(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low < high) {
    const mid = Math.floor((low + high) / 2);

    if (target === arr[mid]) {
      high = mid;
    } else if (target < arr[mid]) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  if (arr[low] === target) {
    return low;
  }

  return -1;
}

console.log(firstOccurrenceIndex([1, 10, 10, 10, 20, 20, 40], 20));
console.log(firstOccurrenceIndex([10, 20, 30], 15));
console.log(firstOccurrenceIndex([15, 15, 15], 15));
