import { combineReducers } from "redux";
import {
  decimalToBinaryConvertor,
  decimalToHexConverotr,
  decimalToOctalConvertor,
  hexToDecimalConvertor,
  binaryToDecimalConvertor,
  octalToDecimalConvertor,
} from "./formatConvertor";

const calculations = (state = "0", action) => {
  switch (action.type) {
    case "CHANGE":
      return action.number;
    case "NULL":
      return 0;
    case "DECIMAL_TO_HEX":
      return decimalToHexConverotr(parseInt(action.number));
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
    default:
      return 0;
  }
};

const format = (
  state = { from: "DECIMAL", to: "BINARY", isValid: true },
  action
) => {
  switch (action.type) {
    case "CHANGE_IN_FORMAT_FORM":
      return { ...state, from: action.from };
    case "CHANGE_IN_FORMAT_TO":
      return { ...state, to: action.to };
    case "CHANGE_IN_VALIDITY":
      return { ...state, isValid: !isValid };
    default:
      return { ...state };
  }
};

export const converter = combineReducers({ calculations, format });
