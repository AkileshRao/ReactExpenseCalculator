import { ADD_TRANSACTION, FETCH_TRANSACTIONS, DELETE_TRANSACTION } from "../actions";

const transaction = (state = [], action: any) => {
    switch (action.type) {
        case ADD_TRANSACTION:
            return [
                ...state,
                action.transaction
            ]

        case DELETE_TRANSACTION:
            return state.filter((trans: any) => trans.id === action.transaction_id)

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