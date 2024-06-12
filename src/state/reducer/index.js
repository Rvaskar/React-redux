import { combineReducers } from "redux";
import amountReducer from "./amountReducer";
import countReducer from "./countReducer";


const reducers =  combineReducers({
    amount : amountReducer,//here the amount is initial state
    number : countReducer
})

export default reducers;