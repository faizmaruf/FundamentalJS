function multiple(x) {
  let temp = 0;
  for (let i = 0; i < x; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      console.log(i);

      temp += i;
    }
  }
  return temp;
}
console.log(multiple(10));
