let isPalindrome = function (x) {
  let number = x.toString();
  let isPalindrome = false;
  let j = x.toString().length - 1;

  for (let i = 0; i < x.toString().length; i++) {
    if (number.charAt(i) == number.charAt(j)) {
      isPalindrome = true;
    } else {
      return false;
    }
    j = j - 1;
  }
  return isPalindrome;
};
console.log(isPalindrome(12345432));
