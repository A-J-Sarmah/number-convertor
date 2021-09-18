import {combineReducers} from "redux";

const calculations = (state=0,action) => {
    switch (action.type){
        case "CHANGE":
            return action.number
        case "NULL":
            return 0
        case "DECIMAL_TO_HEX":
            return 0
        case "DECIMAL_TO_BINARY":
            return 0
        case "DECIMAL_TO_OCTAL":
            return 0
        case "HEX_TO_DECIMAL":
            return 0
        case "BINARY_TO_DECIMAL":
            return 0
        case "OCTAL_TO_DECIMAL":
            return 0
        default:
            return 0
    }
}

const format = (state={from:"DECIMAL",to:"BINARY"},action)=>{
    switch(action.type){
        case "CHANGE_IN_FORMAT_FORM":
            return {...state,from:action.from}
        case "CHANGE_IN_FORMAT_TO":
            return {...state,from:action.to}
        default:
            return {...state}
    }
}

export const converter = combineReducers({calculations,format})