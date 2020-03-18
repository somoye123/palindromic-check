function palindrome1(array) {
  let testCase = array;
  let palindromicCount = 0;
  let index;
  for (index of testCase) {
    let indexValue = index.replace(/[\W_]/g, "").toLowerCase();
    let indexValueReversed = index
      .replace(/[\W_]/g, "")
      .toLowerCase()
      .split("")
      .reverse()
      .join("");
    indexValue === indexValueReversed ? (palindromicCount += 1) : "";
  }
  console.log(`${palindromicCount} items in the array are palindromic`);
}

palindrome1(["aaa", "bb b", "c cc", "abc", "ggfd"]);
