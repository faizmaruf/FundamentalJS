function reverseWord(x) {
  let kata = "";
  let temp = x.split(" ");
  let temp1 = [];
  let temp2 = [];
  for (let i = 0; i < temp.length; i++) {
    temp1.push(temp[i].split("").reverse().join("").toLowerCase());
    kata = temp1[i].charAt(0).toUpperCase() + temp1[i].slice(1);
    temp2.push(kata);
  }
  return temp2.join(" ");
}
console.log(reverseWord("I am A Great human"));
