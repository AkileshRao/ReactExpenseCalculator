import { combineReducers } from "redux";
import { transactions, transaction } from './transactions';


export default combineReducers({
    transactions,
    transaction
})