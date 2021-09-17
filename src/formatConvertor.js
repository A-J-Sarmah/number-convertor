const arrayUp = (arr) => {
  return arr.join("").toString();
};

const decimalToBinaryConvertor = (number) => {
  let decimalDigitsAsArrays = [];
  base = 2;
  while (number > 0) {
    decimalDigitsAsArrays.push(number % base);
    number = Math.floor(number / base);
  }
  decimalDigitsAsArrays = decimalDigitsAsArrays.reverse();
  return arrayUp(decimalDigitsAsArrays);
};

const decimalToHexConvertor = (number) => {
  const hexDigits = [];
  base = 16;
  while (number != 0) {
    hexDigits.push(number % base);
    number = Math.floor(number / base);
  }
  for (let i = 0; i < hexDigits.length; i++) {
    if (hexDigits[i] == 10) {
      hexDigits[i] = "A";
    } else if (hexDigits[i] == 11) {
      hexDigits[i] = "B";
    } else if (hexDigits[i] == 12) {
      hexDigits[i] = "C";
    } else if (hexDigits[i] == 13) {
      hexDigits[i] = "D";
    } else if (hexDigits[i] == 14) {
      hexDigits[i] = "E";
    } else if (hexDigits[i] == 15) {
      hexDigits[i] = "F";
    }
  }
  hexDigits.reverse();
  return arrayUp(hexDigits);
};

const decimalToOctalConvertor = (number) => {
  const octalDigits = [];
  base = 8;
  while (number != 0) {
    octalDigits.push(number % base);
    number = Math.floor(number / base);
  }
  octalDigits.reverse();
  return arrayUp(octalDigits);
};

console.log(decimalToOctalConvertor(345678));
