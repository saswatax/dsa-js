/**
 * @param {string[]} strs
 * @returns {string}
 */
function encode(strs) {
  let encodedStr = "";
  for (const str of strs) {
    const strLen = str.length;
    encodedStr += strLen + "-" + str;
  }

  return encodedStr;
}

/**
 * @param {string} str
 * @returns {string[]}
 */
function decode(str) {
  const decodedStrs = [];

  let idx = 0;
  while (idx < str.length) {
    let strLen = 0;
    while (str[idx] != "-") {
      strLen = strLen * 10 + Number(str[idx]);
      idx++;
    }
    const decodedStr = str.slice(idx + 1, idx + 1 + strLen);
    decodedStrs.push(decodedStr);

    idx = idx + 1 + strLen;
  }

  return decodedStrs;
}

console.log(decode(encode(["hello", "123", "---"])));
