function findMiddleAlphabet(a, b) {
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let al = alphabet.split("");
  let first = al.indexOf(a);
  let last = al.indexOf(b);
  if (first > last) {
    return "masukan inputan dengan benar !";
  } else {
    let mid = (last + first) / 2;
    if ((last - first) % 2 != 0) {
      return al.slice(mid, mid + 2).join("");
    } else {
      return al.slice(mid, mid + 1).join("");
    }
  }
}
console.log(findMiddleAlphabet("Q", "Z"));
