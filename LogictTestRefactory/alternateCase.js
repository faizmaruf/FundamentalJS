function alternateCase(str) {
  let character = "";
  let temp = [];
  for (let i = 0; i < str.length; i++) {
    character = str.charAt(i);
    if (str.charAt(i) == character.toUpperCase() && str.charAt(i) != character.toLowerCase()) {
      temp.push(str.charAt(i).toLowerCase());
    } else if (str.charAt(i) == character.toLowerCase() && str.charAt(i) != character.toUpperCase()) {
      temp.push(str.charAt(i).toUpperCase());
    } else {
      temp.push(str.charAt(i));
    }
  }

  return temp.join("");
}
console.log(alternateCase("Hello World"));
