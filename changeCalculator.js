const calculateChange = function(total, cash) {
  const resultObj = {};

  let remainder = cash - total;

  const denominationsArr = [
    ['twentyDollars', 2000],
    ['tenDollars', 1000],
    ['fiveDollars', 500],
    ['twoDollars', 200],
    ['oneDollar', 100],
    ['quarter', 25],
    ['dime', 10],
    ['nickel', 5],
    ['penny', 1]
  ];

  for (let deno of denominationsArr) {
    if (remainder - deno[1] >= 0) {
      resultObj[deno[0]] = Math.floor(remainder / deno[1]);
      remainder = remainder % deno[1];
    }
    if (!remainder) {
      return resultObj;
    }
  }
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));