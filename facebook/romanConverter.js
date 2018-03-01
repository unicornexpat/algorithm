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

console.log(romanize(1984));

function deromanize( roman ) {
  roman = roman.toUpperCase();
  const lookup = {I:1,V:5,X:10,L:50,C:100,D:500,M:1000};
  let arabic = 0;
  let i = roman.length;

  while (i--) {
    if (lookup[roman[i]] < lookup[roman[i+1]])
      arabic -= lookup[roman[i]];
    else
      arabic += lookup[roman[i]];
  }
  return arabic;
}

console.log(deromanize("MCMLXXXIV"));