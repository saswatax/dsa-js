/**
 * @param {number[]} arr
 * @returns {number}
 */
function secondLargest(arr) {
  if (arr.length < 2) return -1;

  let first = 0;
  let second = -1;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[first]) {
      second = first;
      first = i;
    } else if (arr[i] < arr[first]) {
      if (second === -1 || arr[i] > arr[second]) {
        second = i;
      }
    }
  }

  return second;
}

console.log(secondLargest([20, 20]));
