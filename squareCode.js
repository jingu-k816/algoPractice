/**
 * Square Code
 
 * In Square Code, the spaces are removed from the english text and the characters are written into a square (or rectangle).
 * For example, the sentence "If man was meant to stay on the ground god would have given us roots" is 54 characters long,
 * once the spaces are removed, so it is written into a rectangle with 7 rows and 8 columns.

 * Example:
    ifmanwas
    meanttos
    tayonthe
    groundgo
    dwouldha
    vegivenu
    sroots
 * The square root of 54 (Math.sqrt(54)) is 7.3484692283495345. If we round this number up (Math.ceil(Math.sqrt(54))),
 * we get 8. If we use that for the number of characters on each line (the number of columns), then our text will be close to a square shape.
 * The message is then coded by reading down the columns going left to right. For example, the message above is coded as:
    "imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau"
 * And that's the output of the algorithm. We can then reverse the process to decrypt the text and read the original message.


 * Example Input:
    have a nice day

 * Example Output:
    hae and via ecy
 */

const squareCode = function(message) {
  let output = '';
  let line = '';
  let lineArr = [];

  message = message.replace(/ /g, '');

  for (let i = 0; i < message.length; i++) {
    if (line.length === Math.ceil(Math.sqrt(message.length))) {
      lineArr.push(line);
      line = '';
    }
    line += message[i];

  }
  lineArr.push(line);

  for (let i = 0; i < lineArr[0].length; i++) {
    for (let j = 0; j < lineArr.length; j++) {
      if (lineArr[j].length > i) {
        output += lineArr[j][i];
      }
    }
    output += ' ';
  }
  return output;
};
    
console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));