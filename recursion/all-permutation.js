function allParmutation(value, idx) {
  if (value.length === idx) {
    console.log(value);
    return;
  }

  for (let i = idx; i < value.length; i++) {
    value = swap(value, idx, i);
    allParmutation(value, idx + 1);
  }
}

function swap(value, i, j) {
  if (i === j) return value;

  return (
    value.substring(0, i) +
    value[j] +
    value.substring(i + 1, j) +
    value[i] +
    value.substring(j + 1)
  );
}

allParmutation("abc", 0);
