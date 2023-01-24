let isPalindrome = function (x) {
  let text = x.toString();
  let isPalindrome = false;
  let j = x.toString().length - 1;

  for (let i = 0; i < x.toString().length; i++) {
    if (text.charAt(i) == text.charAt(j)) {
      isPalindrome = true;
    } else {
      return false;
    }
    j = j - 1;
  }
  return isPalindrome;
};
