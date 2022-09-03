function findMiddleAlphabet(a, b) {
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let al = alphabet.split("");
  let first = al.indexOf(a);
  let last = al.indexOf(b);
  if (first > last) {
    return "masukan inputan dengan benar !";
  } else {
    let tengah;
    let mid = (last - first) / 2;
    if (mid % 2 == 0) {
      tengah = Math.round(mid);
    } else {
      tengah = Math.ceil(mid);
    }
    console.log(tengah);
    console.log(mid);
    console.log(first);
    console.log(last);
    return al.slice(first + tengah, last - tengah + 1);
  }
}
console.log(findMiddleAlphabet("R", "U"));
