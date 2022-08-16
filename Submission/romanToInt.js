//  Roman To Integer (mengubah angka romawi ke integer)

let romanToInt = function (s) {
  let m = new Map();
  m.set("I", 1).set("V", 5).set("X", 10).set("L", 50).set("C", 100).set("D", 500).set("M", 1000);
  let temp = "";
  let hsl = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    temp = s.charAt(i);
    if (s.charAt(i) == "V" || (s.charAt(i) == "X" && s.charAt(i - 1) == "I")) {
      m.set("I", -1);
    } else if (s.charAt(i) == "L" || (s.charAt(i) == "C" && s.charAt(i - 1) == "X")) {
      m.set("X", -10);
    } else if (s.charAt(i) == "D" || (s.charAt(i) == "M" && s.charAt(i - 1) == "C")) {
      m.set("C", -100);
    }
    hsl += m.get(temp);
  }
  return console.log(hsl);
};
romanToInt("MCMXCIV");
