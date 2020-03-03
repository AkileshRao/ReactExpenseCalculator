import { ADD_TRANSACTION, FETCH_TRANSACTIONS, DELETE_TRANSACTION } from "../actions";


let initial = {
    transactions: []
}
const transactions = (state = initial, action: any) => {
    switch (action.type) {
        case ADD_TRANSACTION:
            return {
                ...state,
                transactions: [...state.transactions, action.transaction]
            }

        case DELETE_TRANSACTION: {
            let newArr = state.transactions.filter((trans: any) => trans.id != action.transaction_id)
            return {
                ...state,
                transactions: newArr
            }
        }
        case FETCH_TRANSACTIONS:
            return {
                transactions: action.transactions
            }

        default:
            return state
    }
}



export { transactions };