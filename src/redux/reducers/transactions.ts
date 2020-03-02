import { ADD_TRANSACTION, FETCH_TRANSACTIONS, DELETE_TRANSACTION } from "../actions";

let initialTransactionState: any = {
    transactions: []
}

const transaction = (state = initialTransactionState, action: any) => {
    switch (action.type) {
        case ADD_TRANSACTION:
            return {
                ...state,
                transactions: state.transactions.push(action.transaction),
            }

        case DELETE_TRANSACTION:
            return state.transactions.filter((trans: any) => trans.id !== action.transaction_id)

        default:
            return state
    }
}

const transactions = (state = [], action: any) => {
    switch (action.type) {
        case FETCH_TRANSACTIONS:
            return action.transactions
        default:
            return state
    }
}

export { transaction, transactions };