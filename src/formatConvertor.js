const arrayUp = (arr) => {
  return arr.join("").toString();
};

export const decimalToBinaryConvertor = (number) => {
  let decimalDigitsAsArrays = [];
  const base = 2;
  while (number > 0) {
    decimalDigitsAsArrays.push(number % base);
    number = Math.floor(number / base);
  }
  decimalDigitsAsArrays = decimalDigitsAsArrays.reverse();
  return arrayUp(decimalDigitsAsArrays);
};

export const decimalToHexConvertor = (number) => {
  const hexDigits = [];
  const base = 16;
  while (number !== 0) {
    hexDigits.push(number % base);
    number = Math.floor(number / base);
  }
  for (let i = 0; i < hexDigits.length; i++) {
    if (hexDigits[i] === 10) {
      hexDigits[i] = "A";
    } else if (hexDigits[i] === 11) {
      hexDigits[i] = "B";
    } else if (hexDigits[i] === 12) {
      hexDigits[i] = "C";
    } else if (hexDigits[i] === 13) {
      hexDigits[i] = "D";
    } else if (hexDigits[i] === 14) {
      hexDigits[i] = "E";
    } else if (hexDigits[i] === 15) {
      hexDigits[i] = "F";
    }
  }
  hexDigits.reverse();
  return arrayUp(hexDigits);
};

export const decimalToOctalConvertor = (number) => {
  const octalDigits = [];
  const base = 8;
  while (number !== 0) {
    octalDigits.push(number % base);
    number = Math.floor(number / base);
  }
  octalDigits.reverse();
  return arrayUp(octalDigits);
};

export const binaryToDecimalConvertor = (number) => {
  let decimalNumber = 0;
  const base = 2;
  const binaryDigitsAsArray = number.split("").map((number) => {
    return Number(number);
  });
  binaryDigitsAsArray.reverse();
  for (let i = 0; i < binaryDigitsAsArray.length; i++) {
    decimalNumber += binaryDigitsAsArray[i] * base ** i;
  }
  return decimalNumber.toString();
};

export const hexToDecimalConvertor = (number) => {
  let decimalNumber = 0;
  const base = 16;
  const hexDigitsAsArray = number.split("").map((num) => {
    if (num === "A") {
      return 10;
    } else if (num === "B") {
      return 11;
    } else if (num === "C") {
      return 12;
    } else if (num === "D") {
      return 13;
    } else if (num === "E") {
      return 14;
    } else if (num === "F") {
      return 15;
    } else {
      return Number(num);
    }
  });
  hexDigitsAsArray.reverse();
  for (let i = 0; i < hexDigitsAsArray.length; i++) {
    decimalNumber += hexDigitsAsArray[i] * base ** i;
  }
  return decimalNumber.toString();
};

export const octalToDecimalConvertor = (number) => {
  let decimalNumber = 0;
  const base = 8;
  const octalDigitsAsArray = number.split("").map((number) => {
    return Number(number);
  });
  octalDigitsAsArray.reverse();
  for (let i = 0; i < octalDigitsAsArray.length; i++) {
    decimalNumber += octalDigitsAsArray[i] * base ** i;
  }
  return decimalNumber.toString();
};
