/**
 * @param {number[]} arr
 * @returns {number}
 */
function buySellStock(arr) {
  let res = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      res += arr[i] - arr[i - 1];
    }
  }

  return res;
}

/**
 * only add to res when time to sell
 * @param {number[]} arr
 * @returns {number}
 */
function buySellStock_complex(arr) {
  let res = 0;
  let buy = arr[0];
  let sellIdx = 1;

  while (sellIdx < arr.length) {
    if (sellIdx + 1 === arr.length || arr[sellIdx] > arr[sellIdx + 1]) {
      res += Math.max(arr[sellIdx] - buy, 0);
      buy = arr[sellIdx + 1];
      sellIdx += 2;
    } else {
      buy = Math.min(buy, arr[sellIdx]);

      sellIdx++;
    }
  }

  return res;
}

console.log(buySellStock_complex([1, 5, 3, 8, 12]));
console.log(buySellStock_complex([1, 5, 3, 1, 2, 8]));
