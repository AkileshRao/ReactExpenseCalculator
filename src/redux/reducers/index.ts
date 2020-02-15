import { combineReducers } from "redux";
import expenses from './expenses';
import incomes from './incomes';
import { ListTypes } from '../actions/index';

const listTypeReducer = (state = ListTypes.EXPENSE_LIST, action: any) => {
    switch (action.type) {
        case "SET_LIST_TYPE":
            return action.type;

        default:
            return state;
    }

}

export default combineReducers({
    expenses,
    incomes,
    listTypeReducer
})