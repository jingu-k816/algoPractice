const toCamel = (string) => {
  return string.split(" ").map((word, index) => {
    if (!index) {
      return word.toLowerCase();
    }
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }).join("");
};

const toPascal = (string) => {
  return string.split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join("");
};

const toSnake = (string) => {
  return string.split(" ").join("_");
};

const toKebab = str => str.split(" ").join("-");

const toTitle = string => string.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");

const toVowel = (string) => {
  let resultString = '';
  for (let i = 0; i < string.length; i++) {
    if (string[i] === 'a' || string[i] === 'e' || string[i] === 'i' || string[i] === 'o' || string[i] === 'u') {
      resultString += string[i].toUpperCase();
    } else {
      resultString += string[i];
    }
  }

  return resultString;
};

const toConsonant = (string) => {
  let resultString = '';
  for (let i = 0; i < string.length; i++) {
    if (string[i] === 'a' || string[i] === 'e' || string[i] === 'i' || string[i] === 'o' || string[i] === 'u') {
      resultString += string[i];
    } else {
      resultString += string[i].toUpperCase();
    }
  }

  return resultString;
};

const makeCase = (input, types) => {
  if (typeof types === "string") {
    switch (types) {
    case "camel":
      return toCamel(input);
    case "pascal":
      return toPascal(input);
    case "snake":
      return toSnake(input);
    case "kebab":
      return toKebab(input);
    case "title":
      return toTitle(input);
    case "vowel":
      return toVowel(input);
    case "consonant":
      return toConsonant(input);
    }
  } else if (Array.isArray(types)) {
    let output = '';

    for (let type of types) {
      switch (type) {
      case "camel":
        output = toCamel(input);
        break;
      case "pascal":
        output = toPascal(input);
        break;
      case "snake":
        output = toSnake(input);
        break;
      case "kebab":
        output = toKebab(input);
        break;
      case "title":
        output = toTitle(input);
        break;
      case "vowel":
        output = toVowel(input);
        break;
      case "consonant":
        output = toConsonant(input);
        break;
      default:
        output = input;
      }
    }
    if (types[0] === "upper") {
      output = output.toUpperCase();
    } else if (types[0] === "lower") {
      output = output.toLowerCase();
    } else if (types[0] === "vowel") {
      output = toVowel(output);
    } else if (types[0] === "consonant") {
      output = toConsonant(output);
    }
    return output;
  }

};

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));