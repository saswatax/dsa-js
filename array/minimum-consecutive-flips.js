/**
 * @param {number[]} arr
 */
function mininumConsecutiveFlips(arr) {
  let after = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[0]) {
      if (i - after > 1) {
        console.log(after + 1, i - 1);
      }
      after = i;
    }
  }

  if (arr.length - after > 1) {
    console.log(after + 1, arr.length - 1);
  }
}

mininumConsecutiveFlips([1, 1, 0, 0, 0, 1]);
mininumConsecutiveFlips([1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1]);
mininumConsecutiveFlips([1, 1, 1]);
mininumConsecutiveFlips([1, 0]);
