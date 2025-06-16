function allSubstring(str, cur, len) {
  if (len === str.length) {
    console.log(cur);
    return;
  }

  allSubstring(str, cur, len + 1);
  allSubstring(str, cur + str[len], len + 1);
}

allSubstring("abc", "", 0);
