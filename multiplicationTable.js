const multiplicationtable = function(maxValue) {
  let output = "";
  for (let i = 1; i < maxValue + 1; i++) {
    for (let j = 1; j < maxValue + 1; j++) {
      output += (i * j) + " ";
    }
    output += "\n";
  }
  return output;
};

console.log(multiplicationtable(10));
