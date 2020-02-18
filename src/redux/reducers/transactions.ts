const addTransaction = (state = [], action: any) => {
    switch (action.type) {
        case 'ADD_TRANSACTION':
            return [
                ...state,
                {
                    transactionId: state.length,
                    transactionTitle: action.transactionTitle,
                    transactionDescription: action.transactionDescription,
                    transactionAmount: action.transactionAmount,
                    transactionType: action.transactionType
                }
            ]

        default:
            return state
    }
}

const initialState = {
    transactions: [],
    loading: false,
    error: null
};


const transactions = (state = initialState, action: any) => {
    switch (action.type) {
        case "FETCH_TRANSACTIONS_BEGIN":
            return {
                ...state,
                loading: true,
                error: null
            }

        case "FETCH_TRANSACTIONS_SUCCESS":
            return {
                ...state,
                loading: false,
                transactions: action.payload.transactions
            }

        case "FETCH_TRANSACTIONS_ERROR":
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }

        default:
            return state
    }
}

export { addTransaction, transactions };