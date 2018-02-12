function romanize(number) {
  if (!+number) return false;

  let digits = String(+number).split("");
  const key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
    "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
    "","I","II","III","IV","V","VI","VII","VIII","IX"];
  let roman = "";
  let i = 3;

  while (i--) roman = (key[+digits.pop() + i * 10] || "") + roman;

  return Array(+digits.join() + 1).join('M') + roman;
}

romanize(1984);