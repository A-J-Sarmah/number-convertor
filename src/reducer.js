import {combineReducers} from "redux";

const calculations = (state=[],action) => {
    switch (action.type){
        case "DECIMAL_TO_HEX":
            return [...state]
        case "DECIMAL_TO_BINARY":
            return [...state]
        case "DECIMAL_TO_OCTAL":
            return [...state]
        default:
            return [...state]
    }
}

const number = (state=0,action)=>{
    switch(action.type){
        case "CHANGE":
            return state = action.number
        case "NULL":
            return state = 0
        default:
            return state
    }
}

export const converter = combineReducers({calculations,number})