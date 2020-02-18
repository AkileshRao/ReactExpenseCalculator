import { combineReducers } from "redux";
import { transactions } from './transactions';
import { FilterTypes } from '../actions/index';

const setFilter = (state = FilterTypes.ALL, action: any) => {
    switch (action.type) {
        case "FILTER":
            return action.filter;

        default:
            return state;
    }
}

export default combineReducers({
    transactions,
    setFilter
})