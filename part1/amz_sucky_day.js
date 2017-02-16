
function totalScore(blocks, n)
{
  var lastLastScore = 0;
  var lastScore = 0;
  var total = 0;

  if(!isNaN(blocks[0])) {
    console.log('a number');
    total = blocks[0];
    lastScore = blocks[0];
    lastLastScore = lastScore;
  }

  for (var i = 1; i < n; i++) {

    switch (blocks[i]) {
      case 'X':
        total += 2*lastScore;
        break;
      case '+':
        total += lastScore + lastLastScore;
        break;
      case 'Z':
        total -= lastScore;
        break;
      default:
        lastLastScore = lastScore;
        lastScore = blocks[i];
        total += lastScore;
    }
  }

  return total;
}
