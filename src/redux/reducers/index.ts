import { combineReducers } from "redux";
import expenses from './expenses';
import incomes from './incomes';

export default combineReducers({
    expenses,
    incomes
})