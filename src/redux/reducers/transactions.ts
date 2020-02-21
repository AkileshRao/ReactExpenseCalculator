import { ADD_TRANSACTION, FETCH_TRANSACTIONS } from "../actions";

const addTransaction = (state = [], action: any) => {
    switch (action.type) {
        case ADD_TRANSACTION:
            return [
                action.transaction
            ]
        default:
            return state
    }
}

const initialState = {
    transactions: [],
};


const transactions = (state = initialState, action: any) => {
    switch (action.type) {
        case FETCH_TRANSACTIONS:
            return action.transactions
        default:
            return state
    }
}

export { addTransaction, transactions };