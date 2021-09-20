import { combineReducers } from "redux";
import {
  decimalToBinaryConvertor,
  decimalToHexConvertor,
  decimalToOctalConvertor,
  hexToDecimalConvertor,
  binaryToDecimalConvertor,
  octalToDecimalConvertor,
} from "./formatConvertor";


const calculations = (state = "0", action) => {
  let number
  switch (action.type) {
    case "CHANGE":
      return action.number;
    case "NULL":
      return 0;
    case "DECIMAL_TO_HEX":
      return decimalToHexConvertor(parseInt(action.number));
    case "DECIMAL_TO_BINARY":
      return decimalToBinaryConvertor(parseInt(action.number));
    case "DECIMAL_TO_OCTAL":
      return decimalToOctalConvertor(parseInt(action.number));
    case "HEX_TO_DECIMAL":
      return hexToDecimalConvertor(action.number);
    case "BINARY_TO_DECIMAL":
      return binaryToDecimalConvertor(action.number);
    case "OCTAL_TO_DECIMAL":
      return octalToDecimalConvertor(action.number);
    case "BINARY_TO_OCTAL":
      number = binaryToDecimalConvertor(action.number)
      return decimalToOctalConvertor(parseInt(number))
    case "BINARY_TO_HEX":
      number = binaryToDecimalConvertor(action.number)
      return decimalToHexConvertor(parseInt(number))
    case "OCTAL_TO_BINARY":
      number = octalToDecimalConvertor(action.number)
      return decimalToBinaryConvertor(parseInt(number))
    case "OCTAL_TO_HEX":
      number = octalToDecimalConvertor(action.number)
      return decimalToHexConvertor(parseInt(number))
    case "HEX_TO_BINARY":
      number = hexToDecimalConvertor(action.number)
      return decimalToBinaryConvertor(parseInt(number))
    case "HEX_TO_OCTAL":
      number = hexToDecimalConvertor(action.number)
      return decimalToOctalConvertor(parseInt(number))
    default:
      return 0;
  }
};

const format = (
  state = { from: "decimal", to: "binary" },
  action
) => {
  switch (action.type) {
    case "CHANGE_IN_FORMAT_FORM":
      return { ...state, from: action.from };
    case "CHANGE_IN_FORMAT_TO":
      return { ...state, to: action.to };
    default:
      return { ...state };
  }
};

export const converter = combineReducers({ calculations, format });
